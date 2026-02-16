import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { api } from '../../lib/api'
import { Plus, Edit2, Trash2, X, Search, HelpCircle } from 'lucide-react'

interface QuizQuestion {
    id: number; question: string; options: string; correct: number; explanation: string
}

export const AdminQuiz = () => {
    const [items, setItems] = useState<QuizQuestion[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [editing, setEditing] = useState<QuizQuestion | null>(null)
    const [showForm, setShowForm] = useState(false)
    const [form, setForm] = useState({ question: '', options: '', correct: '0', explanation: '' })

    const load = () => {
        api.get<QuizQuestion[]>('/quiz').then(setItems).catch(console.error).finally(() => setLoading(false))
    }
    useEffect(load, [])

    const openNew = () => { setEditing(null); setForm({ question: '', options: '', correct: '0', explanation: '' }); setShowForm(true) }
    const openEdit = (q: QuizQuestion) => {
        setEditing(q)
        setForm({ question: q.question, options: q.options, correct: q.correct.toString(), explanation: q.explanation || '' })
        setShowForm(true)
    }

    const handleSave = async () => {
        try {
            const data = { ...form, correct: Number(form.correct) }
            if (editing) await api.put(`/quiz/${editing.id}`, data)
            else await api.post('/quiz', data)
            setShowForm(false); load()
        } catch (err: any) { alert(err.message) }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Hapus pertanyaan ini?')) return
        try { await api.delete(`/quiz/${id}`); load() } catch (err: any) { alert(err.message) }
    }

    const filtered = items.filter(q => q.question.toLowerCase().includes(search.toLowerCase()))

    const parseOptions = (opts: string): string[] => {
        try { return JSON.parse(opts) } catch { return [] }
    }

    if (loading) return <div className="flex justify-center py-20"><div className="w-8 h-8 border-3 border-gold/30 border-t-gold rounded-full animate-spin" /></div>

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-ink dark:text-dark-heading font-serif">Kelola Kuis</h1>
                    <p className="text-stone-text dark:text-dark-muted text-sm mt-1">{items.length} pertanyaan</p>
                </div>
                <motion.button onClick={openNew} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright text-white dark:text-night font-semibold text-sm shadow-lg btn-glow" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Plus className="w-4 h-4" /> Tambah Pertanyaan
                </motion.button>
            </div>

            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari pertanyaan..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-night-surface border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading placeholder-muted-text focus:ring-2 focus:ring-gold/50 outline-none" />
            </div>

            <div className="space-y-4">
                {filtered.map((q, idx) => {
                    const opts = parseOptions(q.options)
                    return (
                        <motion.div key={q.id} className="bg-white dark:bg-night-surface rounded-2xl border border-stone-100/60 dark:border-night-border/60 p-5 shadow-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3 flex-1">
                                    <span className="w-8 h-8 rounded-lg bg-gold-soft dark:bg-gold-glow-bg flex items-center justify-center text-sm font-bold text-gold dark:text-gold-neon flex-shrink-0">
                                        {idx + 1}
                                    </span>
                                    <div className="flex-1">
                                        <p className="font-medium text-ink dark:text-dark-heading text-sm">{q.question}</p>
                                        <div className="mt-2 grid grid-cols-2 gap-2">
                                            {opts.map((opt, i) => (
                                                <span key={i} className={`text-xs px-3 py-1.5 rounded-lg ${i === q.correct ? 'bg-teal-soft dark:bg-teal-glow-bg text-teal dark:text-teal-neon font-semibold border border-teal/20 dark:border-teal-neon/20' : 'bg-warm-sand dark:bg-night-card text-stone-text dark:text-dark-muted'}`}>
                                                    {String.fromCharCode(65 + i)}. {opt}
                                                </span>
                                            ))}
                                        </div>
                                        {q.explanation && <p className="text-xs text-muted-text dark:text-dark-muted mt-2 italic">{q.explanation}</p>}
                                    </div>
                                </div>
                                <div className="flex gap-1 flex-shrink-0">
                                    <button onClick={() => openEdit(q)} className="p-2 rounded-lg hover:bg-gold-soft dark:hover:bg-gold-glow-bg text-gold dark:text-gold-neon"><Edit2 className="w-4 h-4" /></button>
                                    <button onClick={() => handleDelete(q.id)} className="p-2 rounded-lg hover:bg-coral-soft dark:hover:bg-coral-glow-bg text-coral dark:text-coral-neon"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            <AnimatePresence>
                {showForm && (
                    <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-white dark:bg-night-surface rounded-2xl shadow-2xl w-full max-w-lg border border-stone-100/60 dark:border-night-border/60" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
                            <div className="flex items-center justify-between p-6 border-b border-stone-100 dark:border-night-border">
                                <h3 className="text-lg font-bold text-ink dark:text-dark-heading">{editing ? 'Edit Pertanyaan' : 'Tambah Pertanyaan'}</h3>
                                <button onClick={() => setShowForm(false)} className="p-2 hover:bg-warm-sand dark:hover:bg-night-card rounded-lg"><X className="w-5 h-5" /></button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-1">Pertanyaan</label>
                                    <textarea value={form.question} onChange={e => setForm({ ...form, question: e.target.value })} rows={2} className="w-full px-4 py-2.5 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading focus:ring-2 focus:ring-gold/50 outline-none text-sm resize-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-1">Opsi (JSON array)</label>
                                    <input value={form.options} onChange={e => setForm({ ...form, options: e.target.value })} placeholder='["Opsi A", "Opsi B", "Opsi C", "Opsi D"]' className="w-full px-4 py-2.5 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading focus:ring-2 focus:ring-gold/50 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-1">Jawaban Benar (index, mulai dari 0)</label>
                                    <input type="number" min="0" max="3" value={form.correct} onChange={e => setForm({ ...form, correct: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading focus:ring-2 focus:ring-gold/50 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-1">Penjelasan</label>
                                    <textarea value={form.explanation} onChange={e => setForm({ ...form, explanation: e.target.value })} rows={2} className="w-full px-4 py-2.5 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading focus:ring-2 focus:ring-gold/50 outline-none text-sm resize-none" />
                                </div>
                            </div>
                            <div className="flex gap-3 p-6 border-t border-stone-100 dark:border-night-border">
                                <button onClick={() => setShowForm(false)} className="flex-1 py-2.5 rounded-xl border border-stone-100 dark:border-night-border text-stone-text font-medium text-sm hover:bg-warm-sand transition-colors">Batal</button>
                                <motion.button onClick={handleSave} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright text-white dark:text-night font-semibold text-sm shadow-lg btn-glow" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>{editing ? 'Simpan' : 'Tambah'}</motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

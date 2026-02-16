import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { api } from '../../lib/api'
import { Plus, Edit2, Trash2, X, Search, MapPin } from 'lucide-react'

interface Region {
    id: number; name: string; emoji: string; description: string
    products?: { id: number; name: string; category: string; emoji: string }[]
}

export const AdminRegions = () => {
    const [items, setItems] = useState<Region[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [editing, setEditing] = useState<Region | null>(null)
    const [showForm, setShowForm] = useState(false)
    const [form, setForm] = useState({ name: '', emoji: '🏝️', description: '' })

    const load = () => {
        api.get<Region[]>('/regions').then(setItems).catch(console.error).finally(() => setLoading(false))
    }
    useEffect(load, [])

    const openNew = () => { setEditing(null); setForm({ name: '', emoji: '🏝️', description: '' }); setShowForm(true) }
    const openEdit = (r: Region) => { setEditing(r); setForm({ name: r.name, emoji: r.emoji, description: r.description }); setShowForm(true) }

    const handleSave = async () => {
        try {
            if (editing) await api.put(`/regions/${editing.id}`, form)
            else await api.post('/regions', form)
            setShowForm(false); load()
        } catch (err: any) { alert(err.message) }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Hapus wilayah ini?')) return
        try { await api.delete(`/regions/${id}`); load() } catch (err: any) { alert(err.message) }
    }

    const filtered = items.filter(r => r.name.toLowerCase().includes(search.toLowerCase()))

    if (loading) return <div className="flex justify-center py-20"><div className="w-8 h-8 border-3 border-gold/30 border-t-gold rounded-full animate-spin" /></div>

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-ink dark:text-dark-heading font-serif">Kelola Wilayah</h1>
                    <p className="text-stone-text dark:text-dark-muted text-sm mt-1">{items.length} wilayah</p>
                </div>
                <motion.button onClick={openNew} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright text-white dark:text-night font-semibold text-sm shadow-lg btn-glow" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Plus className="w-4 h-4" /> Tambah Wilayah
                </motion.button>
            </div>

            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari wilayah..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-night-surface border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading placeholder-muted-text focus:ring-2 focus:ring-gold/50 outline-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map(r => (
                    <motion.div key={r.id} className="bg-white dark:bg-night-surface rounded-2xl border border-stone-100/60 dark:border-night-border/60 p-5 shadow-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{r.emoji}</span>
                                <div>
                                    <h3 className="font-bold text-ink dark:text-dark-heading">{r.name}</h3>
                                    <p className="text-xs text-stone-text dark:text-dark-muted mt-1 line-clamp-2">{r.description}</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button onClick={() => openEdit(r)} className="p-2 rounded-lg hover:bg-gold-soft dark:hover:bg-gold-glow-bg text-gold dark:text-gold-neon"><Edit2 className="w-4 h-4" /></button>
                                <button onClick={() => handleDelete(r.id)} className="p-2 rounded-lg hover:bg-coral-soft dark:hover:bg-coral-glow-bg text-coral dark:text-coral-neon"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                        {r.products && r.products.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {r.products.map(p => (
                                    <span key={p.id} className="text-xs px-2 py-1 rounded-full bg-warm-sand dark:bg-night-card text-stone-text dark:text-dark-muted">
                                        {p.emoji} {p.name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {showForm && (
                    <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-white dark:bg-night-surface rounded-2xl shadow-2xl w-full max-w-md border border-stone-100/60 dark:border-night-border/60" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
                            <div className="flex items-center justify-between p-6 border-b border-stone-100 dark:border-night-border">
                                <h3 className="text-lg font-bold text-ink dark:text-dark-heading">{editing ? 'Edit Wilayah' : 'Tambah Wilayah'}</h3>
                                <button onClick={() => setShowForm(false)} className="p-2 hover:bg-warm-sand dark:hover:bg-night-card rounded-lg"><X className="w-5 h-5" /></button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-1">Nama</label>
                                    <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading focus:ring-2 focus:ring-gold/50 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-1">Emoji</label>
                                    <input value={form.emoji} onChange={e => setForm({ ...form, emoji: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading focus:ring-2 focus:ring-gold/50 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-1">Deskripsi</label>
                                    <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-4 py-2.5 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading focus:ring-2 focus:ring-gold/50 outline-none text-sm resize-none" />
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

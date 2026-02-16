import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserPlus, Mail, Lock, User, Eye, EyeOff, AlertCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { register } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        if (password !== confirmPassword) {
            setError('Password tidak cocok')
            return
        }
        if (password.length < 6) {
            setError('Password minimal 6 karakter')
            return
        }
        setLoading(true)
        try {
            await register(name, email, password)
            navigate('/')
        } catch (err: any) {
            setError(err.message || 'Registrasi gagal')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-cream dark:bg-night">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-teal/10 to-gold/10 dark:from-teal-neon/5 dark:to-gold-neon/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-gold/10 to-teal/10 dark:from-gold-neon/5 dark:to-teal-neon/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                className="relative w-full max-w-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-8">
                    <Link to="/">
                        <h1 className="text-3xl font-bold gradient-text font-serif tracking-wide">LegacyTrace</h1>
                    </Link>
                    <p className="mt-2 text-stone-text dark:text-dark-muted">Buat akun baru</p>
                </div>

                <div className="bg-white dark:bg-night-surface rounded-2xl shadow-xl border border-stone-100/60 dark:border-night-border/60 p-8">
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 rounded-xl bg-coral-soft dark:bg-coral-glow-bg border border-coral/20 dark:border-coral-neon/20 flex items-center gap-3"
                        >
                            <AlertCircle className="w-5 h-5 text-coral dark:text-coral-neon flex-shrink-0" />
                            <span className="text-sm text-coral-deep dark:text-coral-neon">{error}</span>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-2">Nama Lengkap</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text dark:text-dark-muted" />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading placeholder-muted-text dark:placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-gold/50 dark:focus:ring-gold-neon/50 focus:border-gold dark:focus:border-gold-neon transition-all"
                                    placeholder="Nama Anda"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text dark:text-dark-muted" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading placeholder-muted-text dark:placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-gold/50 dark:focus:ring-gold-neon/50 focus:border-gold dark:focus:border-gold-neon transition-all"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text dark:text-dark-muted" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-12 py-3 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading placeholder-muted-text dark:placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-gold/50 dark:focus:ring-gold-neon/50 focus:border-gold dark:focus:border-gold-neon transition-all"
                                    placeholder="Minimal 6 karakter"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-text dark:text-dark-muted hover:text-gold dark:hover:text-gold-neon"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-charcoal dark:text-dark-body mb-2">Konfirmasi Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text dark:text-dark-muted" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-warm-sand dark:bg-night-card border border-stone-100 dark:border-night-border text-ink dark:text-dark-heading placeholder-muted-text dark:placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-gold/50 dark:focus:ring-gold-neon/50 focus:border-gold dark:focus:border-gold-neon transition-all"
                                    placeholder="Ulangi password"
                                />
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright text-white dark:text-night font-semibold shadow-lg hover:shadow-xl hover:shadow-gold/30 dark:hover:shadow-gold-neon/30 transition-all duration-250 btn-glow flex items-center justify-center gap-2 disabled:opacity-50"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <UserPlus className="w-5 h-5" />
                                    Daftar
                                </>
                            )}
                        </motion.button>
                    </form>

                    <div className="my-6 flex items-center gap-4">
                        <div className="flex-1 h-px bg-stone-100 dark:bg-night-border" />
                        <span className="text-xs text-muted-text dark:text-dark-muted">atau</span>
                        <div className="flex-1 h-px bg-stone-100 dark:bg-night-border" />
                    </div>

                    <p className="text-center text-sm text-stone-text dark:text-dark-muted">
                        Sudah punya akun?{' '}
                        <Link to="/login" className="text-gold dark:text-gold-neon font-semibold hover:underline">
                            Masuk
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

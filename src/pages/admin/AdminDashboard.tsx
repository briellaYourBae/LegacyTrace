import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { api } from '../../lib/api'
import {
    Package, Users, MapPin, UserCircle, HelpCircle,
    Star, TrendingUp, Activity, BarChart3
} from 'lucide-react'

interface DashboardResponse {
    stats: {
        totalUsers: number
        totalProducts: number
        totalArtisans: number
        totalReviews: number
        totalRegions: number
        totalTeamMembers: number
        totalQuizQuestions: number
        averageRating: number
    }
    categoryCounts: Record<string, number>
    recentReviews: Array<{ id: number; rating: number; comment: string; user: { name: string }; product: { name: string } }>
    recentUsers: Array<{ id: number; name: string; email: string; role: string; createdAt: string }>
}

export const AdminDashboard = () => {
    const [data, setData] = useState<DashboardResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        api.get<DashboardResponse>('/dashboard/stats')
            .then(setData)
            .catch((err) => { console.error(err); setError(err.message || 'Gagal memuat') })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-8 h-8 border-3 border-gold/30 border-t-gold dark:border-gold-neon/30 dark:border-t-gold-neon rounded-full animate-spin" />
            </div>
        )
    }

    if (!data) return <p className="text-center text-coral dark:text-coral-neon py-10">{error || 'Gagal memuat data'}</p>

    const s = data.stats

    const statCards = [
        { label: 'Total Produk', value: s.totalProducts, icon: Package, color: 'from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright' },
        { label: 'Pengrajin', value: s.totalArtisans, icon: Users, color: 'from-teal to-teal-deep dark:from-teal-neon dark:to-teal-bright' },
        { label: 'Wilayah', value: s.totalRegions, icon: MapPin, color: 'from-cat-batik to-cat-weave dark:from-cat-batik-dark dark:to-cat-weave-dark' },
        { label: 'Pengguna', value: s.totalUsers, icon: UserCircle, color: 'from-coral to-coral-deep dark:from-coral-neon dark:to-coral-bright' },
        { label: 'Review', value: s.totalReviews, icon: Star, color: 'from-cat-herbal to-teal dark:from-cat-herbal-dark dark:to-teal-neon' },
        { label: 'Kuis', value: s.totalQuizQuestions, icon: HelpCircle, color: 'from-cat-pottery to-gold dark:from-cat-pottery-dark dark:to-gold-neon' },
    ]

    const categoryColors: Record<string, string> = {
        batik: 'bg-cat-batik dark:bg-cat-batik-dark',
        makanan: 'bg-cat-food dark:bg-cat-food-dark',
        kerajinan: 'bg-cat-craft dark:bg-cat-craft-dark',
        tenun: 'bg-cat-weave dark:bg-cat-weave-dark',
        gerabah: 'bg-cat-pottery dark:bg-cat-pottery-dark',
        herbal: 'bg-cat-herbal dark:bg-cat-herbal-dark',
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-ink dark:text-dark-heading font-serif">Dashboard</h1>
                <p className="text-stone-text dark:text-dark-muted mt-1">Ringkasan data dan aktivitas LegacyTrace</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {statCards.map((card, i) => {
                    const Icon = card.icon
                    return (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-night-surface rounded-2xl p-5 border border-stone-100/60 dark:border-night-border/60 shadow-sm"
                        >
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3`}>
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-2xl font-bold text-ink dark:text-dark-heading">{card.value}</p>
                            <p className="text-xs text-muted-text dark:text-dark-muted mt-1">{card.label}</p>
                        </motion.div>
                    )
                })}
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Category Distribution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-night-surface rounded-2xl p-6 border border-stone-100/60 dark:border-night-border/60 shadow-sm"
                >
                    <div className="flex items-center gap-2 mb-5">
                        <BarChart3 className="w-5 h-5 text-gold dark:text-gold-neon" />
                        <h3 className="font-bold text-ink dark:text-dark-heading">Distribusi Kategori</h3>
                    </div>
                    <div className="space-y-3">
                        {Object.entries(data.categoryCounts).map(([cat, count]) => {
                            const total = Object.values(data.categoryCounts).reduce((a, b) => a + b, 0)
                            const pct = total > 0 ? Math.round((count / total) * 100) : 0
                            return (
                                <div key={cat}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-charcoal dark:text-dark-body capitalize">{cat}</span>
                                        <span className="text-muted-text dark:text-dark-muted">{count} ({pct}%)</span>
                                    </div>
                                    <div className="h-2 bg-warm-sand dark:bg-night-card rounded-full overflow-hidden">
                                        <motion.div
                                            className={`h-full rounded-full ${categoryColors[cat] || 'bg-gold dark:bg-gold-neon'}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${pct}%` }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Rating & Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white dark:bg-night-surface rounded-2xl p-6 border border-stone-100/60 dark:border-night-border/60 shadow-sm"
                >
                    <div className="flex items-center gap-2 mb-5">
                        <Activity className="w-5 h-5 text-teal dark:text-teal-neon" />
                        <h3 className="font-bold text-ink dark:text-dark-heading">Statistik Rating</h3>
                    </div>

                    {/* Average rating */}
                    <div className="text-center py-6 mb-4 bg-gold-soft/50 dark:bg-gold-glow-bg/50 rounded-xl">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map(star => (
                                <Star
                                    key={star}
                                    className={`w-6 h-6 ${star <= Math.round(s.averageRating) ? 'text-gold dark:text-gold-neon fill-current' : 'text-stone-100 dark:text-night-border'}`}
                                />
                            ))}
                        </div>
                        <p className="text-3xl font-bold text-ink dark:text-dark-heading">
                            {s.averageRating > 0 ? s.averageRating.toFixed(1) : '-'}
                        </p>
                        <p className="text-xs text-muted-text dark:text-dark-muted mt-1">Rating rata-rata dari {s.totalReviews} review</p>
                    </div>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-warm-sand dark:bg-night-card text-center">
                            <TrendingUp className="w-5 h-5 text-teal dark:text-teal-neon mx-auto mb-1" />
                            <p className="text-lg font-bold text-ink dark:text-dark-heading">{s.totalTeamMembers}</p>
                            <p className="text-xs text-muted-text dark:text-dark-muted">Anggota Tim</p>
                        </div>
                        <div className="p-3 rounded-xl bg-warm-sand dark:bg-night-card text-center">
                            <Package className="w-5 h-5 text-gold dark:text-gold-neon mx-auto mb-1" />
                            <p className="text-lg font-bold text-ink dark:text-dark-heading">{s.totalProducts}</p>
                            <p className="text-xs text-muted-text dark:text-dark-muted">Total Produk</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}


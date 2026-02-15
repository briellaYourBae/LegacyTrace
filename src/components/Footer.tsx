import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, MapPin, ShoppingBag, BookOpen } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Jelajahi Produk', path: '/products', icon: <ShoppingBag className="w-4 h-4" /> },
    { label: 'Belajar', path: '/edutainment', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Eksplorasi Region', path: '/regions', icon: <MapPin className="w-4 h-4" /> },
    { label: 'Partnership', path: '/partnership', icon: <Heart className="w-4 h-4" /> },
  ]

  return (
    <motion.footer
      className="relative mt-12 border-t border-stone-100/50 dark:border-night-border/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-warm-sand/50 dark:bg-night-surface/50 py-8">
        <div className="max-w-6xl mx-auto px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-serif font-bold gradient-text mb-3">LegacyTrace</h3>
              <p className="text-stone-text dark:text-dark-muted text-sm leading-relaxed">
                Melestarikan warisan budaya Indonesia melalui transparansi supply chain dan pemberdayaan artisan lokal.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-charcoal dark:text-dark-heading uppercase tracking-wider mb-4">Navigasi</h4>
              <div className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <Link key={idx} to={link.path}>
                    <motion.div
                      className="flex items-center gap-2 text-sm text-stone-text dark:text-dark-muted hover:text-gold dark:hover:text-gold-neon transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link.icon}
                      {link.label}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div>
              <h4 className="text-sm font-bold text-charcoal dark:text-dark-heading uppercase tracking-wider mb-4">Misi Kami</h4>
              <p className="text-stone-text dark:text-dark-muted text-sm leading-relaxed">
                Menghubungkan konsumen dengan pengrajin lokal, mendukung SDGs 8, 12, dan 17 untuk pertumbuhan ekonomi yang berkelanjutan.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-gold-soft dark:bg-gold-glow-bg text-gold dark:text-gold-neon rounded-full text-xs font-semibold">Fair Trade</span>
                <span className="px-3 py-1 bg-teal-soft dark:bg-teal-glow-bg text-teal dark:text-teal-neon rounded-full text-xs font-semibold">Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-stone-100/50 dark:border-night-border/50 pt-6 mt-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-text dark:text-dark-muted font-serif italic">
              © {currentYear} <span className="font-semibold gradient-text">LegacyTrace</span> — Crafted with passion for Indonesia's heritage
            </p>
            <p className="text-xs text-muted-text dark:text-dark-muted">
              Ethical Supply Chain • Transparent Commerce
            </p>
          </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
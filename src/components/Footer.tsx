import { motion } from 'framer-motion'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="glass border-t border-soft-border/50 dark:border-soft-dark-border/50 py-12 mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center">
        
        {/* Copyright - Centered */}
        <p className="text-sm text-slate-text dark:text-dark-body">
          © {currentYear} <span className="font-semibold gradient-text">LegacyTrace</span> — Melestarikan Warisan Artisan Indonesia. All rights reserved.
        </p>

      </div>
    </motion.footer>
  )
}
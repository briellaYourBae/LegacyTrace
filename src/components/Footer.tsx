import { motion } from 'framer-motion'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-mist-gray dark:bg-deep-night border-t border-soft-border dark:border-soft-dark-border py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center">
        
        {/* Copyright - Centered */}
        <p className="text-sm text-slate-text dark:text-dark-body">
          © {currentYear} <span className="font-semibold text-edu-blue dark:text-neon-edu-blue">LegacyTrace</span> — Melestarikan Warisan Artisan Indonesia. All rights reserved.
        </p>

      </div>
    </motion.footer>
  )
}
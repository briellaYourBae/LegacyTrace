import { motion } from 'framer-motion'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-gradient-to-r from-brown-primary/5 to-green-accent/5 border-t border-brown-primary/10 py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center">
        
        {/* Copyright - Centered */}
        <p className="text-sm text-brown-light">
          © {currentYear} <span className="font-semibold text-brown-primary">LegacyTrace</span> — Preserving Indonesian Artisan Heritage. All rights reserved.
        </p>

      </div>
    </motion.footer>
  )
}
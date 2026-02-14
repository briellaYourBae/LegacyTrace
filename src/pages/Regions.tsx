import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { regions } from '../data/regions'

export const Regions = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedRegion])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const pulauBesar = regions.slice(0, 5)
  const pulauKecil = regions.slice(5)

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-br from-sky-soft-blue to-leaf-soft-green dark:from-brown-primary/10 dark:to-green-accent/10 max-w-6xl mx-auto px-8 py-16 rounded-2xl my-8 text-center relative overflow-hidden border border-soft-border dark:border-gold/30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-edu-blue/10 dark:bg-gold/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-growth-green/10 dark:bg-green-accent/10 rounded-lg rotate-45"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-serif font-bold text-edu-blue dark:text-brown-primary mb-4">🗺️ Jelajahi by Region</h1>
          <p className="text-xl text-slate-text dark:text-brown-light max-w-3xl mx-auto">
            Temukan kerajinan tradisional unik dari 5 pulau besar dan 5 pulau kecil terkenal Indonesia.
          </p>
        </div>
      </motion.section>

      {/* Pulau Besar Section */}
      <motion.section
        className="max-w-6xl mx-auto px-8 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold text-edu-blue dark:text-brown-primary mb-8">🏝️ Pulau Besar</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pulauBesar.map((region) => (
            <motion.button
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-250 flex flex-col items-center gap-2 ${
                selectedRegion.id === region.id
                  ? 'bg-action-orange hover:bg-deep-action-orange dark:bg-dark-action-orange dark:hover:bg-hot-orange text-white shadow-md'
                  : 'bg-mist-gray dark:bg-soft-dark-border text-ink-black dark:text-dark-body hover:bg-sky-soft-blue dark:hover:bg-blue-glow-soft'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-3xl">{region.emoji}</span>
              <span className="text-lg">{region.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.section>

      {/* Pulau Kecil Section */}
      <motion.section
        className="max-w-6xl mx-auto px-8 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold text-edu-blue dark:text-brown-primary mb-8">🏖️ Pulau Kecil Terkenal</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pulauKecil.map((region) => (
            <motion.button
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-250 flex flex-col items-center gap-2 ${
                selectedRegion.id === region.id
                  ? 'bg-action-orange hover:bg-deep-action-orange dark:bg-dark-action-orange dark:hover:bg-hot-orange text-white shadow-md'
                  : 'bg-mist-gray dark:bg-soft-dark-border text-ink-black dark:text-dark-body hover:bg-sky-soft-blue dark:hover:bg-blue-glow-soft'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-3xl">{region.emoji}</span>
              <span className="text-lg">{region.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.section>

      {/* Region Detail */}
      <motion.section className="max-w-6xl mx-auto px-8 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRegion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-pure-card to-sky-soft-blue dark:from-cream dark:to-light rounded-2xl p-12 shadow-lg border border-soft-border dark:border-2 dark:border-gold/30"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              <span className="text-6xl flex-shrink-0">{selectedRegion.emoji}</span>
              <div className="flex-1">
                <h3 className="text-4xl font-serif font-bold text-edu-blue dark:text-brown-primary">{selectedRegion.name}</h3>
                <p className="text-slate-text dark:text-brown-light mt-3 text-lg">{selectedRegion.description}</p>
              </div>
            </div>

            {/* Products */}
            <div className="mt-8">
              <h4 className="text-2xl font-serif font-bold text-edu-blue dark:text-brown-primary mb-6">Produk Unggulan</h4>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {selectedRegion.products.map((product) => (
                  <motion.div
                    key={product.id}
                    className="bg-pure-card dark:bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-l-4 border-edu-blue dark:border-gold hover:border-growth-green dark:hover:border-green-accent"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-4xl mb-3">{product.emoji}</div>
                    <h5 className="font-serif font-bold text-ink-black dark:text-brown-primary mb-2 text-sm">{product.name}</h5>
                    <p className="text-xs text-edu-blue dark:text-gold font-semibold mb-2">{product.category}</p>
                    <p className="text-xs text-slate-text dark:text-brown-light">{product.umkm}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-soft-border dark:border-brown-primary/10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-3xl font-bold text-edu-blue dark:text-brown-primary">{selectedRegion.products.length}</p>
                <p className="text-sm text-slate-text dark:text-brown-light">Produk Unggulan</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-3xl font-bold text-growth-green dark:text-gold">✓</p>
                <p className="text-sm text-slate-text dark:text-brown-light">Fair Trade</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-3xl font-bold text-growth-green dark:text-green-accent">✓</p>
                <p className="text-sm text-slate-text dark:text-brown-light">Sustainable</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        className="max-w-6xl mx-auto px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-sky-soft-blue to-leaf-soft-green dark:from-brown-primary/10 dark:to-green-accent/10 rounded-2xl p-12 text-center border border-soft-border dark:border-2 dark:border-gold/20">
          <h2 className="text-3xl font-serif font-bold text-edu-blue dark:text-brown-primary mb-4">Ingin Mengeksplorasi Lebih Lanjut?</h2>
          <p className="text-lg text-slate-text dark:text-brown-light mb-8">Lihat semua produk dari region pilihan Anda</p>
          <Link to="/products">
            <motion.button
              className="px-8 py-4 bg-action-orange dark:bg-brown-primary text-white font-semibold rounded-full hover:bg-deep-action-orange dark:hover:bg-brown-primary/90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              Jelajahi Semua Produk →
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
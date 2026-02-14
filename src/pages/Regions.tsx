import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { regions } from '../data/regions'
import { 
  Map, Palmtree, Mountain, Anchor, Bird, 
  Palette, Utensils, Hammer, Scissors, Coffee, Leaf, 
  ArrowRight, CheckCircle, Leaf as LeafIcon, Sun, Compass
} from 'lucide-react'
import { BackgroundShapes } from '../components/BackgroundShapes'

export const Regions = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0])

  const scrollToDetail = () => {
    const detailSection = document.getElementById('region-detail')
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleRegionSelect = (region: typeof regions[0]) => {
    setSelectedRegion(region)
    setTimeout(scrollToDetail, 100)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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

  // Helper to get icon based on category or region name
  const getIcon = (type: string, className = "w-8 h-8") => {
    const lower = type.toLowerCase()
    // Regions
    if (lower.includes('jawa') || lower.includes('java')) return <Mountain className={className} />
    if (lower.includes('sumatra')) return <Palmtree className={className} />
    if (lower.includes('kalimantan')) return <Leaf className={className} />
    if (lower.includes('sulawesi')) return <Anchor className={className} />
    if (lower.includes('papua')) return <Bird className={className} />
    if (lower.includes('bali')) return <Sun className={className} />
    
    // Categories
    if (lower.includes('batik')) return <Palette className={className} />
    if (lower.includes('makanan') || lower.includes('snacks')) return <Utensils className={className} />
    if (lower.includes('crafts') || lower.includes('kerajinan')) return <Hammer className={className} />
    if (lower.includes('woven') || lower.includes('tenun')) return <Scissors className={className} />
    if (lower.includes('pottery') || lower.includes('gerabah')) return <Coffee className={className} />
    if (lower.includes('herbal')) return <LeafIcon className={className} />
    
    // Default
    return <Map className={className} />
  }

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      <BackgroundShapes variant="minimal" />
      
      {/* Header */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-16 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block p-3 rounded-full bg-edu-blue/10 dark:bg-neon-edu-blue/10 mb-6">
          <Compass className="w-8 h-8 text-edu-blue dark:text-neon-edu-blue" />
        </div>
        <h1 className="text-5xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-6">Jelajahi Nusantara</h1>
        <p className="text-xl text-slate-text dark:text-dark-body max-w-3xl mx-auto leading-relaxed">
            Temukan kerajinan tradisional unik dari 5 pulau besar dan 5 pulau kecil terkenal Indonesia.
        </p>
      </motion.section>

      {/* Pulau Besar Section */}
      <motion.section
        className="max-w-6xl mx-auto px-8 mb-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-8 flex items-center gap-3">
          <Map className="w-6 h-6" /> Pulau Besar
        </h2>
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
              onClick={() => handleRegionSelect(region)}
              className={`p-6 rounded-2xl font-semibold transition-all duration-300 text-center group ${
                selectedRegion.id === region.id
                  ? 'bg-action-orange text-white shadow-lg scale-105 ring-4 ring-action-orange/20'
                  : 'bg-pure-card dark:bg-dark-surface border border-soft-border dark:border-soft-dark-border text-slate-text dark:text-dark-body hover:border-edu-blue dark:hover:border-neon-edu-blue hover:shadow-md'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`mb-3 flex justify-center transition-colors ${selectedRegion.id === region.id ? 'text-white' : 'text-edu-blue dark:text-neon-edu-blue group-hover:text-action-orange'}`}>
                {getIcon(region.name, "w-10 h-10")}
              </span>
              {region.name}
            </motion.button>
          ))}
        </motion.div>
      </motion.section>

      {/* Pulau Kecil Section */}
      <motion.section
        className="max-w-6xl mx-auto px-8 mb-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-8 flex items-center gap-3">
          <Sun className="w-6 h-6" /> Pulau Kecil Terkenal
        </h2>
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
              onClick={() => handleRegionSelect(region)}
              className={`p-6 rounded-2xl font-semibold transition-all duration-300 text-center group ${
                selectedRegion.id === region.id
                  ? 'bg-growth-green text-white shadow-lg scale-105 ring-4 ring-growth-green/20'
                  : 'bg-pure-card dark:bg-dark-surface border border-soft-border dark:border-soft-dark-border text-slate-text dark:text-dark-body hover:border-growth-green dark:hover:border-glow-green hover:shadow-md'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`mb-3 flex justify-center transition-colors ${selectedRegion.id === region.id ? 'text-white' : 'text-growth-green dark:text-glow-green group-hover:text-growth-green'}`}>
                {getIcon(region.name, "w-10 h-10")}
              </span>
              {region.name}
            </motion.button>
          ))}
        </motion.div>
      </motion.section>

      {/* Region Detail */}
      <motion.section id="region-detail" className="max-w-6xl mx-auto px-8 mb-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRegion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-pure-card dark:bg-dark-surface rounded-3xl p-8 md:p-12 shadow-xl border border-soft-border dark:border-soft-dark-border"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              <div className="p-6 bg-sky-soft-blue dark:bg-blue-glow-soft rounded-2xl shadow-inner text-edu-blue dark:text-neon-edu-blue">
                {getIcon(selectedRegion.name, "w-16 h-16")}
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-serif font-bold text-ink-black dark:text-dark-heading mb-3">{selectedRegion.name}</h3>
                <p className="text-slate-text dark:text-dark-body text-lg leading-relaxed">{selectedRegion.description}</p>
              </div>
            </div>

            {/* Products */}
            <div className="mt-12">
              <h4 className="text-2xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-6 border-b border-soft-border dark:border-soft-dark-border pb-4">Produk Unggulan</h4>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {selectedRegion.products.map((product) => (
                  <motion.div
                    key={product.id}
                    className="bg-mist-gray dark:bg-soft-dark-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-action-orange dark:hover:border-dark-action-orange group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="mb-4 text-edu-blue dark:text-neon-edu-blue group-hover:text-action-orange transition-colors">
                      {getIcon(product.category, "w-8 h-8")}
                    </div>
                    <h5 className="font-serif font-bold text-ink-black dark:text-dark-heading mb-2 text-sm line-clamp-2">{product.name}</h5>
                    <p className="text-xs text-action-orange dark:text-dark-action-orange font-semibold mb-1 uppercase tracking-wider">{product.category}</p>
                    <p className="text-xs text-slate-text dark:text-dark-body truncate">{product.umkm}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        className="max-w-6xl mx-auto px-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-sky-soft-blue/30 via-soft-peach/20 to-leaf-soft-green/30 dark:from-blue-glow-soft/20 dark:via-burnt-orange-base/20 dark:to-deep-green-base/20 rounded-3xl p-12 text-center border border-edu-blue/20 dark:border-neon-edu-blue/20">
          <h2 className="text-3xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-4">Ingin Mengeksplorasi Lebih Lanjut?</h2>
          <p className="text-lg text-slate-text dark:text-dark-body mb-8">Lihat semua produk dari region pilihan Anda</p>
          <Link to="/products">
            <motion.button
              className="px-8 py-4 bg-action-orange hover:bg-deep-action-orange dark:bg-dark-action-orange dark:hover:bg-hot-orange text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-250 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              Jelajahi Semua Produk <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
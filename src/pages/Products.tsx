import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { BackgroundShapes } from '../components/BackgroundShapes'
import { 
  Globe, Palette, Utensils, Hammer, Scissors, 
  Coffee, Leaf 
} from 'lucide-react'

type Category = 'all' | 'batik' | 'makanan' | 'kerajinan' | 'tenun' | 'gerabah' | 'herbal'

export const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const categoryFromUrl = (searchParams.get('category') as Category) || 'all'
    const [selectedCategory, setSelectedCategory] = useState<Category>(categoryFromUrl)

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [selectedCategory])

    useEffect(() => {
      setSelectedCategory(categoryFromUrl)
    }, [categoryFromUrl])

  const categories: Array<{ value: Category; label: string; icon: React.ReactNode }> = [
    { value: 'all', label: 'Semua Produk', icon: <Globe className="w-5 h-5" /> },
    { value: 'batik', label: 'Batik', icon: <Palette className="w-5 h-5" /> },
    { value: 'makanan', label: 'Makanan', icon: <Utensils className="w-5 h-5" /> },
    { value: 'kerajinan', label: 'Kerajinan', icon: <Hammer className="w-5 h-5" /> },
    { value: 'tenun', label: 'Tenun', icon: <Scissors className="w-5 h-5" /> },
    { value: 'gerabah', label: 'Gerabah', icon: <Coffee className="w-5 h-5" /> },
    { value: 'herbal', label: 'Herbal', icon: <Leaf className="w-5 h-5" /> }
  ]

    const filtered = useMemo(() => {
      return products.filter(p => {
          return selectedCategory === 'all' || p.category === selectedCategory
      })
    }, [selectedCategory])

    return (
      <div className="min-h-screen pb-20 relative page-transition">
          <BackgroundShapes variant="minimal" />
          
          {/* Header */}
          <motion.section
            className="max-w-6xl mx-auto px-8 py-12 text-center relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-serif font-bold gradient-text mb-2">Jelajahi Produk Ethical</h1>
            <p className="text-lg text-slate-text dark:text-dark-body">
                Filter berdasarkan kategori untuk menemukan produk handcrafted favorit Anda
            </p>
          </motion.section>

          {/* Filters */}
          <div className="max-w-6xl mx-auto px-8 mb-8 glass rounded-2xl shadow-xl p-8 border border-soft-border/50 dark:border-soft-dark-border/50">
            <div className="mb-6">
                <h3 className="text-lg font-serif font-bold gradient-text mb-4">Kategori</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map(cat => (
                      <motion.button
                        key={cat.value}
                        className={`px-5 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                            selectedCategory === cat.value
                              ? 'bg-gradient-to-r from-action-orange to-deep-action-orange dark:from-dark-action-orange dark:to-hot-orange text-white shadow-lg hover:shadow-xl hover:shadow-action-orange/50 dark:hover:shadow-dark-action-orange/50'
                              : 'glass text-ink-black dark:text-dark-body hover:bg-gradient-to-r hover:from-sky-soft-blue hover:to-leaf-soft-green dark:hover:from-blue-glow-soft dark:hover:to-deep-green-base border border-soft-border/50 dark:border-soft-dark-border/50'
                        }`}
                        onClick={() => {
                          setSelectedCategory(cat.value)
                          setSearchParams(cat.value === 'all' ? {} : { category: cat.value })
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className={selectedCategory === cat.value ? 'transform rotate-12' : ''}>{cat.icon}</span> {cat.label}
                      </motion.button>
                  ))}
                </div>
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filtered.length > 0 ? (
                filtered.map((product, idx) => (
                  <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                      <ProductCard product={product} selectedCategory={selectedCategory} />
                  </motion.div>
                ))
            ) : (
                <motion.div
                  className="col-span-full text-center py-16 text-slate-text dark:text-dark-body"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-lg">Tidak ada produk ditemukan. Coba sesuaikan filter Anda!</p>
                </motion.div>
            )}
          </motion.div>
      </div>
    )
}
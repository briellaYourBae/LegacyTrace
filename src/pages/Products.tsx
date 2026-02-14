import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

type Category = 'all' | 'batik' | 'makanan' | 'crafts' | 'woven' | 'pottery' | 'herbal'

export const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all')
    const [selectedVillage, setSelectedVillage] = useState('all')

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [selectedCategory, selectedVillage])

const categories: Array<{ value: Category; label: string; emoji: string }> = [{ value: 'all', label: 'Semua Produk', emoji: '🌍' },
    { value: 'batik', label: 'Batik', emoji: '🎨' },
    { value: 'makanan', label: 'Makanan', emoji: '🍴' },
    { value: 'crafts', label: 'Kerajinan', emoji: '🎭' },
    { value: 'woven', label: 'Tenun', emoji: '🧵' },
    { value: 'pottery', label: 'Gerabah', emoji: '🏺' },
    { value: 'herbal', label: 'Herbal', emoji: '🌿' }
]

    const villages = useMemo(() => {
      const unique = ['all', ...new Set(products.map(p => p.village))]
      return unique
    }, [])

    const filtered = useMemo(() => {
      return products.filter(p => {
          const catMatch = selectedCategory === 'all' || p.category === selectedCategory
          const villMatch = selectedVillage === 'all' || p.village === selectedVillage
          return catMatch && villMatch
      })
    }, [selectedCategory, selectedVillage])

    return (
      <div className="min-h-screen pb-20">
          {/* Header */}
          <motion.section
            className="max-w-6xl mx-auto px-8 py-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-serif font-bold text-brown-primary mb-2">Jelajahi Produk Ethical</h1>
            <p className="text-lg text-brown-light">
                Filter berdasarkan kategori atau wilayah untuk menemukan produk handcrafted favorit Anda
            </p>
          </motion.section>

          {/* Filters */}
          <div className="max-w-6xl mx-auto px-8 mb-8 bg-white rounded-2xl shadow-sm p-8">
            <div className="mb-6">
                <h3 className="text-lg font-serif font-bold text-brown-primary mb-4">Kategori</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map(cat => (
                      <motion.button
                        key={cat.value}
                        className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                            selectedCategory === cat.value
                              ? 'bg-gradient-to-r from-brown-primary to-gold text-white'
                              : 'bg-brown-primary/10 text-dark hover:bg-brown-primary/20'
                        }`}
                        onClick={() => setSelectedCategory(cat.value)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{cat.emoji}</span> {cat.label}
                      </motion.button>
                  ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-serif font-bold text-brown-primary mb-4">Desa / Wilayah</h3>
                <select
                  className="px-4 py-2 border-2 border-brown-primary/20 rounded-lg bg-white hover:border-gold focus:border-gold outline-none transition-colors"
                  value={selectedVillage}
                  onChange={(e) => setSelectedVillage(e.target.value)}
                >
                  {villages.map(v => (
                      <option key={v} value={v}>
                        {v === 'all' ? 'Semua Wilayah' : v}
                      </option>
                  ))}
                </select>
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
                      <ProductCard product={product} />
                  </motion.div>
                ))
            ) : (
                <motion.div
                  className="col-span-full text-center py-16 text-brown-light"
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
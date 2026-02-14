import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import { Product } from '../types/product'
import { MapPin, Trophy, ArrowLeft, Award, Package } from 'lucide-react'

export const ArtisanPage = () => {
  const { artisanId } = useParams()
  const navigate = useNavigate()
  const [artisanProducts, setArtisanProducts] = useState<Product[]>([])

  useEffect(() => {
    const found = products.filter(p => p.id.includes(artisanId || ''))
    if (found.length > 0) {
      setArtisanProducts(found)
    } else {
      navigate('/products')
    }
  }, [artisanId, navigate])

  if (artisanProducts.length === 0) return null

  const artisan = artisanProducts[0]

  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-cream to-gold/10 max-w-6xl mx-auto px-8 py-16 rounded-2xl my-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-serif font-bold text-brown-primary mb-2">{artisan.artisanName}</h1>
        <p className="text-2xl text-gold font-semibold mb-1">{artisan.category.toUpperCase()} Artisan</p>
        <p className="text-lg text-brown-light flex items-center justify-center gap-2"><MapPin className="w-5 h-5" /> {artisan.village}</p>
      </motion.section>

      {/* Bio */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8 bg-white rounded-2xl shadow-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gradient-to-br from-gold/10 to-green-accent/10 rounded-lg hover:shadow-md transition-all">
            <span className="block mb-2 flex justify-center"><Award className="w-10 h-10 text-brown-primary" /></span>
            <span className="block text-2xl font-bold text-brown-primary mb-1">{artisan.artisanExperience}+</span>
            <span className="block text-sm text-brown-light font-medium">Years of Mastery</span>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gold/10 to-green-accent/10 rounded-lg hover:shadow-md transition-all">
            <span className="block mb-2 flex justify-center"><Trophy className="w-10 h-10 text-brown-primary" /></span>
            <span className="block text-sm text-brown-light font-medium">Master Craftsperson</span>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gold/10 to-green-accent/10 rounded-lg hover:shadow-md transition-all">
            <span className="block mb-2 flex justify-center"><Package className="w-10 h-10 text-brown-primary" /></span>
            <span className="block text-2xl font-bold text-brown-primary mb-1">{artisanProducts.length}</span>
            <span className="block text-sm text-brown-light font-medium">Products Created</span>
          </div>
        </div>

        <blockquote className="bg-gradient-to-r from-brown-primary/5 to-green-accent/5 border-l-4 border-gold px-8 py-6 rounded text-2xl italic text-brown-primary text-center leading-relaxed">
          "{artisan.artisanQuote}"
        </blockquote>
      </motion.section>

      {/* Story */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8 bg-white rounded-2xl shadow-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-bold text-brown-primary mb-6">The Story</h2>
        <p className="text-lg text-dark leading-relaxed">{artisan.culturalValue}</p>
      </motion.section>

      {/* Products */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-bold text-brown-primary text-center mb-8">Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artisanProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              className="bg-gradient-to-br from-gold/10 to-green-accent/10 rounded-2xl overflow-hidden hover:shadow-md transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-brown-primary mb-1">{product.name}</h3>
                <p className="text-brown-light text-sm">{product.umkm}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-brown-primary font-semibold mb-6">
          Support this artisan by exploring their digital passports
        </p>
        <motion.button
          onClick={() => navigate('/products')}
          className="px-8 py-3 bg-brown-primary text-white font-semibold rounded-full hover:bg-gold transition-colors flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" /> Back to All Products
        </motion.button>
      </motion.section>
    </div>
  )
}
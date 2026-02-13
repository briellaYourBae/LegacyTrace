import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Product } from '../types/product'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/passport/${product.id}`}>
      <motion.div
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col"
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="relative overflow-hidden h-64">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <motion.button 
              className="px-6 py-3 bg-white text-brown-primary font-semibold rounded-full hover:bg-gold hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
            >
              View Digital Passport
            </motion.button>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-serif font-bold text-brown-primary mb-1">{product.name}</h3>
          <p className="text-gold font-semibold text-sm mb-1">{product.umkm}</p>
          <p className="text-brown-light text-sm mb-4">{product.village}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {product.ethicalBadges.map((badge, idx) => (
              <motion.span
                key={idx}
                className="bg-gradient-to-r from-brown-primary/10 to-green-accent/10 text-brown-primary px-3 py-1 rounded-full text-xs font-semibold hover:from-brown-primary hover:to-green-accent hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
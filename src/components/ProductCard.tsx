import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Product } from '../types/product'

interface ProductCardProps {
  product: Product
  selectedCategory?: string
}

const getCategoryColor = (category: string) => {
  const colors = {
    batik: 'bg-royal-purple/15 text-royal-purple dark:bg-batik-dark/20 dark:text-batik-dark hover:bg-royal-purple dark:hover:bg-batik-dark',
    makanan: 'bg-sunset-orange/15 text-sunset-orange dark:bg-makanan-dark/20 dark:text-makanan-dark hover:bg-sunset-orange dark:hover:bg-makanan-dark',
    kerajinan: 'bg-craft-teal/15 text-craft-teal dark:bg-kerajinan-dark/20 dark:text-kerajinan-dark hover:bg-craft-teal dark:hover:bg-kerajinan-dark',
    tenun: 'bg-indigo-weave/15 text-indigo-weave dark:bg-tenun-dark/20 dark:text-tenun-dark hover:bg-indigo-weave dark:hover:bg-tenun-dark',
    gerabah: 'bg-clay-brown/15 text-clay-brown dark:bg-gerabah-dark/20 dark:text-gerabah-dark hover:bg-clay-brown dark:hover:bg-gerabah-dark',
    herbal: 'bg-herbal-green/15 text-herbal-green dark:bg-herbal-dark/20 dark:text-herbal-dark hover:bg-herbal-green dark:hover:bg-herbal-dark'
  }
  return colors[category as keyof typeof colors] || colors.kerajinan
}

export const ProductCard = ({ product, selectedCategory }: ProductCardProps) => {
  const passportLink = selectedCategory && selectedCategory !== 'all' 
    ? `/passport/${product.id}?category=${selectedCategory}`
    : `/passport/${product.id}`
  
  return (
    <Link to={passportLink}>
      <motion.div
        className="bg-pure-card dark:bg-dark-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-250 h-full flex flex-col border border-soft-border dark:border-soft-dark-border"
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="relative overflow-hidden h-64">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-black dark:bg-night-slate bg-opacity-70 dark:bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-250 flex items-center justify-center">
            <motion.button 
              className="px-6 py-3 bg-action-orange hover:bg-deep-action-orange dark:bg-dark-action-orange dark:hover:bg-hot-orange text-white font-semibold rounded-full transition-all duration-250 shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              View Digital Passport
            </motion.button>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-serif font-bold text-ink-black dark:text-dark-heading mb-1">{product.name}</h3>
          <p className="text-edu-blue dark:text-neon-edu-blue font-semibold text-sm mb-1">{product.umkm}</p>
          <p className="text-slate-text dark:text-dark-body text-sm mb-4">{product.village}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {product.ethicalBadges.map((badge, idx) => (
              <motion.span
                key={idx}
                className={`${getCategoryColor(product.category)} px-3 py-1 rounded-full text-xs font-semibold transition-all duration-250 hover:text-white`}
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
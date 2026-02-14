import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Product } from '../types/product'

interface ProductCardProps {
  product: Product
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

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/passport/${product.id}`}>
      <motion.div
        className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-soft-border/50 dark:border-soft-dark-border/50 card-hover group"
        whileHover={{ y: -12, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="relative overflow-hidden h-64 group/image">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 via-ink-black/70 to-transparent dark:from-night-slate/90 dark:via-night-slate/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.button 
              className="px-6 py-3 bg-gradient-to-r from-action-orange to-deep-action-orange dark:from-dark-action-orange dark:to-hot-orange text-white font-semibold rounded-full transition-all duration-250 shadow-xl hover:shadow-2xl hover:shadow-action-orange/50 dark:hover:shadow-dark-action-orange/50 btn-glow"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Digital Passport
            </motion.button>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col relative z-10">
          <h3 className="text-xl font-serif font-bold text-ink-black dark:text-dark-heading mb-1 group-hover:text-edu-blue dark:group-hover:text-neon-edu-blue transition-colors">{product.name}</h3>
          <p className="text-edu-blue dark:text-neon-edu-blue font-semibold text-sm mb-1">{product.umkm}</p>
          <p className="text-slate-text dark:text-dark-body text-sm mb-4">{product.village}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {product.ethicalBadges.map((badge, idx) => (
              <motion.span
                key={idx}
                className={`${getCategoryColor(product.category)} px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:text-white hover:scale-110 shadow-md`}
                whileHover={{ scale: 1.1, y: -2 }}
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
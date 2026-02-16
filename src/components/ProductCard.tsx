import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Product } from '../types/product'

interface ProductCardProps {
  product: Product
  selectedCategory?: string
}

const getCategoryColor = (category: string) => {
  const colors = {
    batik: 'bg-cat-batik/15 text-cat-batik dark:bg-cat-batik-dark/20 dark:text-cat-batik-dark hover:bg-cat-batik dark:hover:bg-cat-batik-dark',
    makanan: 'bg-coral/15 text-coral dark:bg-cat-food-dark/20 dark:text-cat-food-dark hover:bg-coral dark:hover:bg-cat-food-dark',
    kerajinan: 'bg-cat-craft/15 text-cat-craft dark:bg-cat-craft-dark/20 dark:text-cat-craft-dark hover:bg-cat-craft dark:hover:bg-cat-craft-dark',
    tenun: 'bg-cat-weave/15 text-cat-weave dark:bg-cat-weave-dark/20 dark:text-cat-weave-dark hover:bg-cat-weave dark:hover:bg-cat-weave-dark',
    gerabah: 'bg-cat-pottery/15 text-cat-pottery dark:bg-cat-pottery-dark/20 dark:text-cat-pottery-dark hover:bg-cat-pottery dark:hover:bg-cat-pottery-dark',
    herbal: 'bg-cat-herbal/15 text-cat-herbal dark:bg-cat-herbal-dark/20 dark:text-cat-herbal-dark hover:bg-cat-herbal dark:hover:bg-cat-herbal-dark'
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
        className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-stone-100/50 dark:border-night-border/50 card-hover group"
        whileHover={{ y: -12, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="relative overflow-hidden h-64 group/image">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/70 to-transparent dark:from-night/90 dark:via-night/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright text-white dark:text-night font-semibold rounded-full transition-all duration-250 shadow-xl hover:shadow-2xl hover:shadow-gold/50 dark:hover:shadow-gold-neon/50 btn-glow"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Digital Passport
            </motion.button>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col relative z-10">
          <h3 className="text-xl font-serif font-bold text-ink dark:text-dark-heading mb-1 group-hover:text-gold dark:group-hover:text-gold-neon transition-colors">{product.name}</h3>
          <p className="text-gold dark:text-gold-neon font-semibold text-sm mb-1">{product.umkm}</p>
          <p className="text-stone-text dark:text-dark-body text-sm mb-4">{product.village}</p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {(Array.isArray(product.ethicalBadges) ? product.ethicalBadges : []).map((badge, idx) => (
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
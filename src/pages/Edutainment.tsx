import { useState } from 'react'
import { motion } from 'framer-motion'
import { products, quizzes } from '../data/products'
import { QuizCard } from '../components/QuizCard'

export const Edutainment = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  
  const lessons = [
    {
      title: 'What is Fair Trade?',
      content: 'Fair trade ensures that artisans and farmers receive fair compensation for their work, promoting sustainable livelihoods and ethical production practices.'
    },
    {
      title: 'Supply Chain Transparency',
      content: 'Knowing where products come from and how they\'re made creates accountability and supports communities that deserve recognition for their craftsmanship.'
    },
    {
      title: 'Cultural Preservation',
      content: 'Traditional handcrafts carry cultural heritage. Supporting artisans helps preserve centuries-old techniques and cultural identity.'
    },
    {
      title: 'Sustainable Practices',
      content: 'Many UMKM use natural materials and eco-friendly methods, reducing environmental impact while maintaining quality and authenticity.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-serif font-bold text-brown-primary mb-3">🎓 Edutainment Hub</h1>
        <p className="text-xl text-brown-light">
          Learn about ethical production, fair trade, and artisan communities
        </p>
      </motion.section>

      {/* Lessons Grid */}
      <motion.section
        className="max-w-6xl mx-auto px-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lessons.map((lesson, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-t-4 border-gold"
              variants={itemVariants}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-brown-primary to-gold text-white rounded-full flex items-center justify-center font-bold mb-4 text-lg">
                {idx + 1}
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-primary mb-3">{lesson.title}</h3>
              <p className="text-brown-light leading-relaxed text-sm">{lesson.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Interactive Quiz Section */}
      <motion.section
        className="max-w-6xl mx-auto px-8 mb-16 bg-white rounded-2xl shadow-md p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-bold text-brown-primary mb-2 text-center">🎮 Interactive Learning</h2>
        <p className="text-lg text-brown-light text-center mb-8">
          Choose a product and test your knowledge about its supply chain!
        </p>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {products.map(product => (
            <motion.button
              key={product.id}
              className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                selectedProduct.id === product.id
                  ? 'bg-gradient-to-r from-brown-primary to-gold text-white'
                  : 'bg-brown-primary/10 text-dark hover:bg-brown-primary/20'
              }`}
              onClick={() => setSelectedProduct(product)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">
                {product.category === 'batik' ? '🎨' :
                 product.category === 'snacks' ? '🍴' :
                 product.category === 'crafts' ? '🎭' :
                 product.category === 'woven' ? '🧵' : '✨'}
              </span>
              {product.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={selectedProduct.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {quizzes[selectedProduct.id] ? (
            <QuizCard questions={quizzes[selectedProduct.id]} />
          ) : (
            <div className="text-center py-12 text-brown-light">
              <p className="text-lg">Quiz coming soon for this product!</p>
            </div>
          )}
        </motion.div>
      </motion.section>

      {/* Ethical Commitment */}
      <motion.section
        className="max-w-6xl mx-auto px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-bold text-brown-primary text-center mb-12">💚 Our Commitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🌍', title: 'Global Community', desc: 'Supporting UMKM across Indonesia' },
            { icon: '✨', title: 'Quality Craftsmanship', desc: 'Preserving traditional techniques' },
            { icon: '💰', title: 'Fair Compensation', desc: 'Ensuring artisans earn what they deserve' },
            { icon: '🌱', title: 'Sustainable Production', desc: 'Eco-friendly and ethical practices' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gold/10 to-green-accent/10 p-8 rounded-2xl text-center hover:shadow-md transition-all">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-serif font-bold text-brown-primary mb-2">{item.title}</h3>
              <p className="text-brown-light text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { products, quizzes } from '../data/products'
import { Product, QuizQuestion } from '../types/product'
import { TimelineStep } from '../components/TimelineStep'
import { QuizCard } from '../components/QuizCard'
import { BackgroundShapes } from '../components/BackgroundShapes'

export const Passport = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])

  useEffect(() => {
    const found = products.find(p => p.id === productId)
    if (found && productId) {
      setProduct(found)
      const questions = quizzes[productId] || []
      setQuizQuestions(questions)
    } else {
      navigate('/products')
    }
  }, [productId, navigate])

  const handleStepScroll = (index: number) => {
    setVisibleSteps(prev => new Set([...prev, index]))
  }

  if (!product) return null

  return (
    <div className="min-height-screen pb-20 md:pb-20 relative">
      <BackgroundShapes variant="minimal" />
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-mist-gray to-sky-soft-blue/30 dark:from-dark-surface dark:to-blue-glow-soft/20 max-w-6xl mx-auto px-8 py-12 rounded-2xl my-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-soft-border dark:border-soft-dark-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-5xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-2">{product.name}</h1>
          <p className="text-2xl text-growth-green dark:text-glow-green font-semibold mb-1">{product.umkm}</p>
          <p className="text-lg text-slate-text dark:text-dark-body mb-4">📍 {product.village}</p>
          <div className="flex flex-wrap gap-3">
            {product.ethicalBadges.map((badge, idx) => (
              <motion.span
                key={idx}
                className="bg-growth-green dark:bg-glow-green text-white px-4 py-2 rounded-full font-semibold text-sm shadow-sm"
                whileHover={{ scale: 1.1 }}
              >
                ✓ {badge}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.section>

      {/* UMKM Story */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8 bg-pure-card dark:bg-dark-surface rounded-2xl shadow-sm mb-8 border border-soft-border dark:border-soft-dark-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-4">📖 The UMKM Story</h2>
        <p className="text-lg text-ink-black dark:text-dark-body leading-relaxed">{product.umkmStory}</p>
      </motion.section>

      {/* Cultural Value */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8 bg-pure-card dark:bg-dark-surface rounded-2xl shadow-sm mb-8 border border-soft-border dark:border-soft-dark-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-4">🌿 Cultural Value</h2>
        <p className="text-lg text-ink-black dark:text-dark-body leading-relaxed">{product.culturalValue}</p>
      </motion.section>

      {/* Supply Chain Timeline */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-12">🔗 Supply Chain Journey</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-edu-blue via-growth-green to-action-orange dark:from-neon-edu-blue dark:via-glow-green dark:to-dark-action-orange"></div>

          {/* Steps */}
          <div className="space-y-12">
            {product.steps.map((step, idx) => (
              <TimelineStep
                key={step.id}
                step={step}
                index={idx}
                isVisible={true}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Artisan Feature */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8 bg-pure-card dark:bg-dark-surface rounded-2xl shadow-sm mb-8 border border-soft-border dark:border-soft-dark-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-6">✋ Meet the Artisan</h2>
        <div className="bg-sky-soft-blue dark:bg-blue-glow-soft p-8 rounded-lg border-l-4 border-growth-green dark:border-glow-green">
          <h3 className="text-2xl font-serif font-bold text-ink-black dark:text-dark-heading mb-1">{product.artisanName}</h3>
          <p className="text-lg text-slate-text dark:text-dark-body font-semibold mb-4">Craft Master • {product.artisanExperience}+ years experience</p>
          <blockquote className="text-xl italic text-edu-blue dark:text-neon-edu-blue leading-relaxed mb-3">
            "{product.artisanQuote}"
          </blockquote>
          {product.artisanQuoteLocal && (
            <blockquote className="text-lg italic text-slate-text dark:text-dark-body leading-relaxed border-t border-soft-border dark:border-soft-dark-border pt-3 mt-3">
              "{product.artisanQuoteLocal}"
            </blockquote>
          )}
        </div>
      </motion.section>

      {/* Quiz Section */}
      {quizQuestions.length > 0 && (
        <motion.section
          className="max-w-6xl mx-auto px-8 py-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-2">📚 Test Your Knowledge</h2>
            <p className="text-lg text-slate-text dark:text-dark-body">Learn more about this product's ethical journey!</p>
          </div>

          {!showQuiz ? (
            <motion.button
              className="w-full py-4 bg-action-orange hover:bg-deep-action-orange dark:bg-dark-action-orange dark:hover:bg-hot-orange text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-250"
              onClick={() => setShowQuiz(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Interactive Quiz →
            </motion.button>
          ) : (
            <QuizCard questions={quizQuestions} />
          )}
        </motion.section>
      )}

      {/* Footer Action - Desktop Only */}
      <motion.section
        className="hidden md:block max-w-6xl mx-auto px-8 py-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-edu-blue dark:text-neon-edu-blue font-semibold mb-6">🎉 Thank you for supporting ethical artisan production!</p>
      </motion.section>
    </div>
  )
}
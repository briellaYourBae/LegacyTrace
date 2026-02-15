import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { products, quizzes } from '../data/products'
import { Product, QuizQuestion } from '../types/product'
import { TimelineStep } from '../components/TimelineStep'
import { QuizCard } from '../components/QuizCard'
import { BackgroundShapes } from '../components/BackgroundShapes'
import {
  MapPin, Check, BookOpen, Leaf, Hammer, Hand,
  Award, Clock, Quote, Sparkles, ArrowRight, Star
} from 'lucide-react'

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [productId])

  const handleStepScroll = (index: number) => {
    setVisibleSteps(prev => new Set([...prev, index]))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  }

  if (!product) return null

  return (
    <div className="min-h-screen pb-20 relative page-transition">
      <BackgroundShapes variant="minimal" />

      {/* ═══════════════════════════════════
          HERO HEADER
         ═══════════════════════════════════ */}
      <motion.section
        className="relative max-w-6xl mx-auto px-8 py-10 my-8 overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-soft via-cream to-teal-soft/30 dark:from-night-card dark:via-night dark:to-gold-glow-bg/20 border border-stone-100/60 dark:border-night-border/60" />
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gold/6 dark:bg-gold-neon/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal/6 dark:bg-teal-neon/6 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 dark:bg-gold-neon/10 rounded-full mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-gold dark:text-gold-neon" />
              <span className="text-xs font-semibold text-gold dark:text-gold-neon">Digital Passport</span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {product.name}
            </motion.h1>
            <motion.p
              className="text-xl text-teal dark:text-teal-neon font-semibold mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {product.umkm}
            </motion.p>
            <motion.p
              className="text-base text-stone-text dark:text-dark-body mb-5 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <MapPin className="w-4 h-4 text-gold dark:text-gold-neon" /> {product.village}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {product.ethicalBadges.map((badge, idx) => (
                <motion.span
                  key={idx}
                  className="bg-gradient-to-r from-teal to-teal-deep dark:from-teal-neon dark:to-teal-bright text-white px-3 py-1.5 rounded-full font-semibold text-xs shadow-sm flex items-center gap-1.5"
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  <Check className="w-3.5 h-3.5" /> {badge}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative group"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-gold/20 to-teal/20 dark:from-gold-neon/20 dark:to-teal-neon/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={product.imageUrl}
              alt={product.name}
              className="relative w-full h-72 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════
          UMKM STORY & CULTURAL VALUE
         ═══════════════════════════════════ */}
      <motion.section
        className="max-w-6xl mx-auto px-8 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* UMKM Story */}
          <motion.div
            className="glass p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100/60 dark:border-night-border/60 group"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif font-bold text-ink dark:text-dark-heading group-hover:text-gold dark:group-hover:text-gold-neon transition-colors">Kisah UMKM</h2>
            </div>
            <p className="text-stone-text dark:text-dark-body leading-relaxed">{product.umkmStory}</p>
          </motion.div>

          {/* Cultural Value */}
          <motion.div
            className="glass p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100/60 dark:border-night-border/60 group"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal to-teal-deep dark:from-teal-neon dark:to-teal-bright rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif font-bold text-ink dark:text-dark-heading group-hover:text-gold dark:group-hover:text-gold-neon transition-colors">Nilai Budaya</h2>
            </div>
            <p className="text-stone-text dark:text-dark-body leading-relaxed">{product.culturalValue}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════
          SUPPLY CHAIN TIMELINE
         ═══════════════════════════════════ */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 dark:bg-gold-neon/10 rounded-full mb-4">
            <Hammer className="w-4 h-4 text-gold dark:text-gold-neon" />
            <span className="text-sm font-semibold text-gold dark:text-gold-neon">Supply Chain</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-ink dark:text-dark-heading">
            Proses <span className="gradient-text">Pembuatan</span> Produk
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-teal to-gold-deep dark:from-gold-neon dark:via-teal-neon dark:to-gold-bright rounded-full"></div>

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

      {/* ═══════════════════════════════════
          ARTISAN SECTION (ENHANCED)
         ═══════════════════════════════════ */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass rounded-3xl shadow-xl border border-stone-100/60 dark:border-night-border/60 overflow-hidden">
          {/* Section Header */}
          <div className="bg-gradient-to-r from-gold/[0.06] to-teal/[0.06] dark:from-gold-neon/[0.08] dark:to-teal-neon/[0.08] px-8 py-5 border-b border-stone-100/60 dark:border-night-border/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright rounded-xl flex items-center justify-center text-white">
                <Hand className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold text-ink dark:text-dark-heading">Kenali Pengrajinnya</h2>
                <p className="text-xs text-stone-text dark:text-dark-muted">Artisan di balik karya ini</p>
              </div>
            </div>
          </div>

          {/* Artisan Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Artisan Identity */}
              <div className="lg:col-span-1 flex flex-col items-center text-center">
                {/* Avatar */}
                <motion.div
                  className="w-28 h-28 rounded-full overflow-hidden shadow-xl mb-5 ring-4 ring-white dark:ring-night-card bg-gradient-to-br from-gold to-teal dark:from-gold-neon dark:to-teal-neon flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  {product.artisanPhotoUrl ? (
                    <img
                      src={product.artisanPhotoUrl}
                      alt={product.artisanName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<span class="text-4xl text-white font-serif font-bold">${product.artisanName.charAt(0)}</span>`
                        }
                      }}
                    />
                  ) : (
                    <span className="text-4xl text-white font-serif font-bold">
                      {product.artisanName.charAt(0)}
                    </span>
                  )}
                </motion.div>

                <h3 className="text-2xl font-serif font-bold text-ink dark:text-dark-heading mb-1">{product.artisanName}</h3>
                <p className="text-sm text-teal dark:text-teal-neon font-semibold mb-2">
                  {product.category === 'batik' && 'Ahli Pembatik Tradisional'}
                  {product.category === 'makanan' && 'Ahli Kuliner Tradisional'}
                  {product.category === 'kerajinan' && 'Ahli Kerajinan Tradisional'}
                  {product.category === 'tenun' && 'Ahli Penenun Tradisional'}
                  {product.category === 'gerabah' && 'Ahli Pembuat Gerabah'}
                  {product.category === 'herbal' && 'Ahli Herbalis Tradisional'}
                </p>
                <p className="text-xs text-stone-text dark:text-dark-muted mb-5">
                  📍 {product.village}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="bg-gold-soft dark:bg-gold-glow-bg rounded-xl p-3 text-center">
                    <Clock className="w-5 h-5 text-gold dark:text-gold-neon mx-auto mb-1" />
                    <p className="text-xl font-bold text-gold dark:text-gold-neon">{product.artisanExperience}+</p>
                    <p className="text-xs text-stone-text dark:text-dark-muted">Tahun</p>
                  </div>
                  <div className="bg-teal-soft dark:bg-teal-glow-bg rounded-xl p-3 text-center">
                    <Award className="w-5 h-5 text-teal dark:text-teal-neon mx-auto mb-1" />
                    <p className="text-xl font-bold text-teal dark:text-teal-neon">Ahli</p>
                    <p className="text-xs text-stone-text dark:text-dark-muted">Level</p>
                  </div>
                </div>

                {/* Badge Tags */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  <span className="px-3 py-1 bg-gold/10 dark:bg-gold-neon/10 text-gold dark:text-gold-neon rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" /> Terampil
                  </span>
                  <span className="px-3 py-1 bg-teal/10 dark:bg-teal-neon/10 text-teal dark:text-teal-neon rounded-full text-xs font-semibold flex items-center gap-1">
                    <Leaf className="w-3 h-3" /> Tradisional
                  </span>
                </div>
              </div>

              {/* Right: Quote & Details */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                {/* Artisan Bio */}
                <div className="mb-6 p-4 bg-gradient-to-r from-cream to-gold-soft/30 dark:from-night-card/50 dark:to-gold-glow-bg/20 rounded-xl border-l-4 border-gold dark:border-gold-neon">
                  <h4 className="text-sm font-semibold text-gold dark:text-gold-neon mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" /> Tentang Pengrajin
                  </h4>
                  <p className="text-sm text-stone-text dark:text-dark-body leading-relaxed">
                    {product.artisanName} adalah pengrajin berpengalaman dengan lebih dari {product.artisanExperience} tahun dedikasi dalam melestarikan warisan budaya Indonesia. 
                    Keahlian dan ketekunan beliau telah menghasilkan karya-karya berkualitas tinggi yang menggabungkan teknik tradisional dengan sentuhan artistik yang unik.
                  </p>
                </div>

                {/* Main Quote */}
                <div className="relative mb-6">
                  <Quote className="w-10 h-10 text-gold/20 dark:text-gold-neon/20 absolute -top-2 -left-2" />
                  <blockquote className="pl-8 text-xl italic text-ink dark:text-dark-heading leading-relaxed font-serif">
                    "{product.artisanQuote}"
                  </blockquote>
                  <p className="text-right text-sm text-stone-text dark:text-dark-muted mt-2 pr-2">
                    — {product.artisanName}
                  </p>
                </div>

                {/* Local Quote */}
                {product.artisanQuoteLocal && (
                  <motion.div
                    className="bg-gradient-to-r from-teal-soft/60 to-gold-soft/40 dark:from-teal-glow-bg/50 dark:to-gold-glow-bg/30 rounded-xl p-5 border-l-4 border-teal dark:border-teal-neon mb-6"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-teal dark:text-teal-neon" />
                      <p className="text-sm text-teal dark:text-teal-neon font-semibold">Dalam Bahasa Lokal:</p>
                    </div>
                    <blockquote className="text-base italic text-ink dark:text-dark-body leading-relaxed font-serif">
                      "{product.artisanQuoteLocal}"
                    </blockquote>
                  </motion.div>
                )}


              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════
          QUIZ SECTION
         ═══════════════════════════════════ */}
      {quizQuestions.length > 0 && (
        <motion.section
          className="max-w-6xl mx-auto px-8 py-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-3xl shadow-xl p-8 border border-stone-100/60 dark:border-night-border/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-teal/[0.02] dark:from-gold-neon/[0.04] dark:to-teal-neon/[0.04]" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 dark:bg-teal-neon/10 rounded-full mb-4">
                  <BookOpen className="w-4 h-4 text-teal dark:text-teal-neon" />
                  <span className="text-sm font-semibold text-teal dark:text-teal-neon">Interactive Quiz</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink dark:text-dark-heading mb-2">
                  Uji <span className="gradient-text">Pengetahuan</span> Anda
                </h2>
                <p className="text-stone-text dark:text-dark-body">Pelajari lebih lanjut tentang perjalanan etis produk ini!</p>
              </div>

              {!showQuiz ? (
                <motion.button
                  className="w-full py-4 bg-gradient-to-r from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright text-white dark:text-night font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-gold/30 dark:hover:shadow-gold-neon/30 transition-all duration-300 btn-glow text-lg"
                  onClick={() => setShowQuiz(true)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Mulai Kuis Interaktif →
                </motion.button>
              ) : (
                <QuizCard questions={quizQuestions} />
              )}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  )
}
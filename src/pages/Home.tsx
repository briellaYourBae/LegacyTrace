import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { BackgroundShapes } from '../components/BackgroundShapes'
import { 
  Search, ShieldCheck, QrCode, Users, 
  Palette, Utensils, Hammer, Scissors, 
  Coffee, Leaf, ArrowRight, Map, BookOpen, 
  Heart, Globe 
} from 'lucide-react'

export const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const features = [
    { 
      icon: <Search className="w-10 h-10 text-edu-blue dark:text-neon-edu-blue" />, 
      title: 'Rantai Pasokan Transparan', 
      desc: 'Lihat perjalanan lengkap dari setiap produk dari artisan hingga ke tangan Anda. Transparansi penuh adalah komitmen kami.' 
    },
    { 
      icon: <Users className="w-10 h-10 text-action-orange dark:text-dark-action-orange" />, 
      title: 'Kerajinan Etis', 
      desc: 'Dukung perdagangan adil dan komunitas artisan. Setiap pembelian memberdayakan pengrajin lokal.' 
    },
    { 
      icon: <QrCode className="w-10 h-10 text-growth-green dark:text-glow-green" />, 
      title: 'Paspor Digital', 
      desc: 'Setiap produk memiliki paspor digital interaktif yang menceritakan kisah uniknya.' 
    },
    { 
      icon: <BookOpen className="w-10 h-10 text-purple-500 dark:text-purple-400" />, 
      title: 'Kisah Artisan', 
      desc: 'Temui para pembuat di balik produk. Dengarkan kisah hidup, passion, dan budaya mereka.' 
    }
  ]

  const categories = [
    { icon: <Palette className="w-12 h-12 mb-4 text-edu-blue" />, name: 'Batik', desc: 'Pola batik tulis tradisional' },
    { icon: <Utensils className="w-12 h-12 mb-4 text-action-orange" />, name: 'Makanan', desc: 'Kuliner lokal autentik' },
    { icon: <Hammer className="w-12 h-12 mb-4 text-brown-primary" />, name: 'Kerajinan', desc: 'Artefak budaya buatan tangan' },
    { icon: <Scissors className="w-12 h-12 mb-4 text-purple-500" />, name: 'Tenun', desc: 'Tenunan tekstil rumit' },
    { icon: <Coffee className="w-12 h-12 mb-4 text-growth-green" />, name: 'Gerabah', desc: 'Kreasi keramik artisan' },
    { icon: <Leaf className="w-12 h-12 mb-4 text-green-600" />, name: 'Herbal', desc: 'Produk kesehatan tradisional' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen overflow-x-hidden relative page-transition">
      <BackgroundShapes variant="default" />
      
      {/* ===== HERO SECTION ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl lg:text-7xl font-serif font-bold gradient-text mb-6 leading-tight">
            Setiap Produk Punya Cerita
          </h1>
          <p className="text-xl text-slate-text dark:text-dark-body mb-8 leading-relaxed">
            Temukan perjalanan etis di balik setiap produk UMKM Indonesia. Dari artisan hingga tangan Anda dengan transparansi penuh dan cerita yang menginspirasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-action-orange to-deep-action-orange dark:from-dark-action-orange dark:to-hot-orange text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-action-orange/50 dark:hover:shadow-dark-action-orange/50 transition-all duration-250 flex items-center gap-2 btn-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Jelajahi Cerita <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/edutainment">
              <motion.button
                className="px-8 py-4 border-2 border-edu-blue dark:border-neon-edu-blue text-edu-blue dark:text-neon-edu-blue font-semibold rounded-full hover:bg-gradient-to-r hover:from-sky-soft-blue hover:to-leaf-soft-green dark:hover:from-blue-glow-soft dark:hover:to-deep-green-base transition-all duration-250 glass"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center justify-center min-h-96 bg-gradient-to-br from-sky-soft-blue/30 to-leaf-soft-green/30 dark:from-blue-glow-soft/20 dark:to-deep-green-base/20 rounded-3xl text-9xl relative overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-edu-blue/20 dark:border-neon-edu-blue/20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4 + i * 0.5, 
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                style={{
                  width: `${100 + i * 40}px`,
                  height: `${100 + i * 40}px`,
                  left: `${20 + i * 10}%`,
                  top: `${15 + i * 10}%`
                }}
              />
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative z-10"
          >
            <Globe className="w-40 h-40 text-edu-blue dark:text-neon-edu-blue opacity-80" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== FEATURES SECTION ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-soft-blue/20 dark:bg-blue-glow-soft/10 rounded-3xl rotate-45"></div>
        <div className="absolute -bottom-20 -right-10 w-32 h-32 bg-leaf-soft-green/20 dark:bg-deep-green-base/10 rounded-full"></div>

        <h2 className="text-4xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue text-center mb-16 relative z-10">Mengapa Memilih LegacyTrace?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="glass p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center card-hover border border-soft-border/50 dark:border-soft-dark-border/50 group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-ink-black dark:text-dark-heading mb-2 group-hover:text-edu-blue dark:group-hover:text-neon-edu-blue transition-colors">{feature.title}</h3>
              <p className="text-slate-text dark:text-dark-body text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== CATEGORIES SECTION ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-20 w-24 h-24 bg-sky-soft-blue/20 dark:bg-blue-glow-soft/10 rounded-lg rotate-12"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-leaf-soft-green/20 dark:bg-deep-green-base/10 rounded-full"></div>

        <h2 className="text-4xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue text-center mb-16 relative z-10">Kategori Produk</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-soft-border/50 dark:border-soft-dark-border/50 group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-edu-blue/5 to-growth-green/5 dark:from-neon-edu-blue/10 dark:to-glow-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-ink-black dark:text-dark-heading mb-2 group-hover:text-edu-blue dark:group-hover:text-neon-edu-blue transition-colors">{cat.name}</h3>
                <p className="text-sm text-slate-text dark:text-dark-body">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue text-center mb-16 relative z-10">Bagaimana Cara Kerja?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {[
            { step: '1', title: 'Jelajahi', desc: 'Jelajahi koleksi produk UMKM etis kami', icon: <Search className="w-6 h-6" /> },
            { step: '2', title: 'Temukan', desc: 'Pelajari cerita unik di balik setiap produk', icon: <BookOpen className="w-6 h-6" /> },
            { step: '3', title: 'Belajar', desc: 'Ikuti quiz interaktif tentang supply chain', icon: <ShieldCheck className="w-6 h-6" /> },
            { step: '4', title: 'Dukung', desc: 'Dukung artisan dengan pembelian yang bermakna', icon: <Heart className="w-6 h-6" /> }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="glass rounded-2xl p-8 text-center border border-edu-blue/30 dark:border-neon-edu-blue/30 hover:border-edu-blue dark:hover:border-neon-edu-blue hover:shadow-2xl transition-all duration-300 card-hover group">
                <div className="w-12 h-12 bg-gradient-to-r from-edu-blue to-growth-green dark:from-neon-edu-blue dark:to-glow-green text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-ink-black dark:text-dark-heading mb-2 group-hover:text-edu-blue dark:group-hover:text-neon-edu-blue transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-text dark:text-dark-body">{item.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl text-edu-blue dark:text-neon-edu-blue"
                  >
                    <ArrowRight />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== REGIONS SECTION ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue text-center mb-4 relative z-10 flex items-center justify-center gap-3"><Map className="w-10 h-10" /> Explore by Region</h2>
        <p className="text-lg text-slate-text dark:text-dark-body text-center mb-12 relative z-10">
          Temukan kerajinan tradisional unik dari berbagai pulau di Indonesia
        </p>

        <Link to="/regions">
          <motion.div
            className="relative z-10 bg-mist-gray dark:bg-dark-surface rounded-2xl p-12 text-center border-2 border-edu-blue/20 dark:border-neon-edu-blue/20 hover:border-edu-blue dark:hover:border-neon-edu-blue transition-all duration-250 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-2xl font-bold text-ink-black dark:text-dark-heading mb-6">Jelajahi Produk Berdasarkan Region</p>
            <motion.button
              className="px-8 py-4 bg-action-orange hover:bg-deep-action-orange dark:bg-dark-action-orange dark:hover:bg-hot-orange text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-250 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Semua Region <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </Link>
      </motion.section>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue text-center mb-16 relative z-10">Dari Komunitas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { quote: 'Produk UMKM berkualitas tinggi dengan cerita yang menginspirasi!', author: 'Dewi S.', role: 'Pembeli Setia' },
            { quote: 'Platform ini benar-benar membantu kami jangkau pasar yang lebih luas.', author: 'Pak Santoso', role: 'Artisan Batik' },
            { quote: 'Saya senang belajar tentang proses produksi yang ethical dan sustainable.', author: 'Budi M.', role: 'Conscious Consumer' }
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-growth-green dark:border-glow-green card-hover group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-text dark:text-dark-body italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-ink-black dark:text-dark-heading">{testimonial.author}</p>
              <p className="text-sm text-growth-green dark:text-glow-green">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== CTA SECTION ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 glass rounded-3xl text-center mb-12 relative overflow-hidden border border-edu-blue/30 dark:border-neon-edu-blue/30 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-4">Siap Mengeksplorasi?</h2>
          <p className="text-xl text-slate-text dark:text-dark-body mb-8">
            Bergabunglah dengan komunitas global yang mendukung perdagangan etis dan seni tradisional Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-action-orange to-deep-action-orange dark:from-dark-action-orange dark:to-hot-orange text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-action-orange/50 dark:hover:shadow-dark-action-orange/50 transition-all duration-250 btn-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Jelajah Sekarang
              </motion.button>
            </Link>
            <Link to="/edutainment">
              <motion.button
                className="px-8 py-4 border-2 border-edu-blue dark:border-neon-edu-blue text-edu-blue dark:text-neon-edu-blue font-semibold rounded-full hover:bg-gradient-to-r hover:from-sky-soft-blue hover:to-leaf-soft-green dark:hover:from-blue-glow-soft dark:hover:to-deep-green-base transition-all duration-250 glass"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  )
}

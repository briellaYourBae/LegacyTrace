import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const features = [
    { 
      icon: '🔗', 
      title: 'Rantai Pasokan Transparan', 
      desc: 'Lihat perjalanan lengkap dari setiap produk dari artisan hingga ke tangan Anda. Transparansi penuh adalah komitmen kami.' 
    },
    { 
      icon: '✋', 
      title: 'Kerajinan Etis', 
      desc: 'Dukung perdagangan adil dan komunitas artisan. Setiap pembelian memberdayakan pengrajin lokal.' 
    },
    { 
      icon: '🛂', 
      title: 'Paspor Digital', 
      desc: 'Setiap produk memiliki paspor digital interaktif yang menceritakan kisah uniknya.' 
    },
    { 
      icon: '📖', 
      title: 'Kisah Artisan', 
      desc: 'Temui para pembuat di balik produk. Dengarkan kisah hidup, passion, dan budaya mereka.' 
    }
  ]

  const categories = [
    { icon: '🎨', name: 'Batik', desc: 'Pola batik tulis tradisional' },
    { icon: '🍴', name: 'Makanan', desc: 'Kuliner lokal autentik' },
    { icon: '🎭', name: 'Kerajinan', desc: 'Artefak budaya buatan tangan' },
    { icon: '🧵', name: 'Tenun', desc: 'Tenunan tekstil rumit' },
    { icon: '🏺', name: 'Gerabah', desc: 'Kreasi keramik artisan' },
    { icon: '🌿', name: 'Herbal', desc: 'Produk kesehatan tradisional' }
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
    <div className="min-h-screen overflow-x-hidden">
      
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
          <h1 className="text-6xl lg:text-7xl font-serif font-bold bg-gradient-to-r from-brown-primary to-green-accent bg-clip-text text-transparent mb-6">
            Setiap Produk Punya Cerita
          </h1>
          <p className="text-xl text-brown-light mb-8 leading-relaxed">
            Temukan perjalanan etis di balik setiap produk UMKM Indonesia. Dari artisan hingga tangan Anda dengan transparansi penuh dan cerita yang menginspirasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-brown-primary to-gold text-white font-semibold rounded-full hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                Jelajahi Cerita →
              </motion.button>
            </Link>
            <Link to="/edutainment">
              <motion.button
                className="px-8 py-4 border-2 border-brown-primary text-brown-primary font-semibold rounded-full hover:bg-brown-primary/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center justify-center min-h-96 bg-gradient-to-br from-gold/20 to-green-accent/20 rounded-3xl text-9xl relative overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Background Pattern - Circles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-gold/20"
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
            🎨🧵🏭✨
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== FEATURES SECTION WITH PATTERN ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Background Patterns - Squares */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-3xl rotate-45"></div>
        <div className="absolute -bottom-20 -right-10 w-32 h-32 bg-green-accent/10 rounded-full"></div>

        <h2 className="text-4xl font-serif font-bold text-brown-primary text-center mb-16 relative z-10">Mengapa Memilih LegacyTrace?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center hover:-translate-y-2 border-2 border-transparent hover:border-gold"
              variants={itemVariants}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-bold text-brown-primary mb-2">{feature.title}</h3>
              <p className="text-brown-light text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== CATEGORIES SECTION WITH PATTERN ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Background Patterns - Mixed */}
        <div className="absolute top-0 right-20 w-24 h-24 bg-gold/15 rounded-lg rotate-12"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-green-accent/15 rounded-full"></div>
        <div className="absolute top-20 left-1/2 w-32 h-32 border-2 border-gold/20 rounded-3xl"></div>

        <h2 className="text-4xl font-serif font-bold text-brown-primary text-center mb-16 relative z-10">Kategori Produk</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-cream to-light rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 border-l-4 border-gold"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-6xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-serif font-bold text-brown-primary mb-2">{cat.name}</h3>
              <p className="text-sm text-brown-light">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== HOW IT WORKS SECTION WITH PATTERN ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Patterns */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-gold/20"
              style={{
                width: `${40 + i * 30}px`,
                height: `${40 + i * 30}px`,
                left: `${10 + i * 12}%`,
                top: `${i * 15}%`,
                borderRadius: i % 2 === 0 ? '50%' : '20px'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20 + i * 2, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>

        <h2 className="text-4xl font-serif font-bold text-brown-primary text-center mb-16 relative z-10">Bagaimana Cara Kerja?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {[
            { step: '1', title: 'Jelajahi', desc: 'Jelajahi koleksi produk UMKM etis kami' },
            { step: '2', title: 'Temukan', desc: 'Pelajari cerita unik di balik setiap produk' },
            { step: '3', title: 'Belajar', desc: 'Ikuti quiz interaktif tentang supply chain' },
            { step: '4', title: 'Dukung', desc: 'Dukung artisan dengan pembelian yang bermakna' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gold/15 to-green-accent/15 rounded-2xl p-8 text-center border-2 border-gold/30 hover:border-gold hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-green-accent text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-brown-primary mb-2">{item.title}</h4>
                <p className="text-sm text-brown-light">{item.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    →
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
        {/* Background Patterns */}
        <div className="absolute -top-20 left-1/4 w-40 h-40 bg-gold/10 rounded-full"></div>
        <div className="absolute -bottom-20 right-1/4 w-32 h-32 bg-green-accent/10 rounded-lg rotate-45"></div>

        <h2 className="text-4xl font-serif font-bold text-brown-primary text-center mb-4 relative z-10">🗺️ Explore by Region</h2>
        <p className="text-lg text-brown-light text-center mb-12 relative z-10">
          Temukan kerajinan tradisional unik dari berbagai pulau di Indonesia
        </p>

        <Link to="/regions">
          <motion.div
            className="relative z-10 bg-gradient-to-r from-brown-primary/10 to-green-accent/10 rounded-2xl p-12 text-center border-2 border-gold/20 hover:border-gold transition-all hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-2xl font-bold text-brown-primary mb-6">Jelajahi Produk Berdasarkan Region</p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-gold to-gold/80 text-brown-primary font-semibold rounded-full hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Semua Region →
            </motion.button>
          </motion.div>
        </Link>
      </motion.section>

      {/* ===== TESTIMONIAL SECTION WITH PATTERN ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Patterns */}
        <div className="absolute -top-20 left-1/4 w-40 h-40 bg-gold/10 rounded-full"></div>
        <div className="absolute -bottom-20 right-1/4 w-32 h-32 bg-green-accent/10 rounded-lg rotate-45"></div>

        <h2 className="text-4xl font-serif font-bold text-brown-primary text-center mb-16 relative z-10">Dari Komunitas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { quote: 'Produk UMKM berkualitas tinggi dengan cerita yang menginspirasi!', author: 'Dewi S.', role: 'Pembeli Setia' },
            { quote: 'Platform ini benar-benar membantu kami jangkau pasar yang lebih luas.', author: 'Pak Santoso', role: 'Artisan Batik' },
            { quote: 'Saya senang belajar tentang proses produksi yang ethical dan sustainable.', author: 'Budi M.', role: 'Conscious Consumer' }
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-cream/80 to-light rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border-l-4 border-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>
              <p className="text-brown-light italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-brown-primary">{testimonial.author}</p>
              <p className="text-sm text-gold">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== CTA SECTION WITH PATTERN ===== */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-20 bg-gradient-to-r from-brown-primary/15 via-gold/15 to-green-accent/15 rounded-3xl text-center mb-12 relative overflow-hidden border-2 border-gold/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Pattern Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${50 + i * 20}px`,
                height: `${50 + i * 20}px`,
                left: `${i * 12}%`,
                top: `${i * 10}%`,
                border: '2px solid rgba(212, 165, 116, 0.15)',
                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20px' : '0px'
              }}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 15 + i * 1, 
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold text-brown-primary mb-4">Siap Mengeksplorasi?</h2>
          <p className="text-xl text-brown-light mb-8">
            Bergabunglah dengan komunitas global yang mendukung perdagangan etis dan seni tradisional Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <motion.button
                className="px-8 py-4 bg-brown-primary text-white font-semibold rounded-full hover:bg-brown-primary/90 transition-colors hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Jelajah Sekarang
              </motion.button>
            </Link>
            <Link to="/edutainment">
              <motion.button
                className="px-8 py-4 border-2 border-brown-primary text-brown-primary font-semibold rounded-full hover:bg-brown-primary/10 transition-all"
                whileHover={{ scale: 1.05 }}
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
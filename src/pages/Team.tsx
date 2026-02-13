import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Team = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pb-20">
      {/* Coming Soon Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Main Icon */}
        <motion.div
          className="text-9xl mb-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🚀
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-serif font-bold text-brown-primary mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          COMING SOON
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-2xl text-gold font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          WEB DEV PROSES BUAT
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-brown-light max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Kami sedang mempersiapkan halaman tim yang menakjubkan. Segera hadir dengan profil lengkap dan kisah inspiratif dari setiap anggota tim kami.
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-gold to-gold/80 text-brown-primary font-semibold text-lg rounded-full hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          className="flex justify-center gap-3 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-gold to-green-accent"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}
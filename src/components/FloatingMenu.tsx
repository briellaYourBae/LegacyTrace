import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, ArrowLeft, Plus, Handshake } from 'lucide-react'

export const FloatingMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)

  const isMainPage = ['/', '/products', '/edutainment'].includes(location.pathname)

  // Close menu when route changes
  useEffect(() => {
    setShowMenu(false)
  }, [location.pathname])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setShowMenu(false)
  }

  const goBack = () => {
    if (location.pathname.includes('/passport/')) {
      const searchParams = new URLSearchParams(location.search)
      const category = searchParams.get('category')
      if (category) {
        navigate(`/products?category=${category}`)
      } else {
        navigate('/products')
      }
    } else {
      navigate('/')
    }
  }

  const goToPartnership = () => {
    navigate('/partnership')
  }

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="flex flex-col gap-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {/* Back to Top */}
            <motion.button
              className="w-14 h-14 bg-gradient-to-r from-teal to-teal-deep dark:from-teal-neon dark:to-teal-bright text-white rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(13,148,136,0.5)] dark:hover:shadow-[0_20px_50px_rgba(94,234,212,0.3)] flex items-center justify-center transition-all duration-300"
              onClick={scrollToTop}
              whileHover={{ scale: 1.15, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>

            {/* Back Button */}
            {!isMainPage && (
              <motion.button
                className="w-14 h-14 bg-gradient-to-r from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright text-white dark:text-night rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(184,134,11,0.5)] dark:hover:shadow-[0_20px_50px_rgba(232,197,96,0.3)] flex items-center justify-center transition-all duration-300"
                onClick={goBack}
                whileHover={{ scale: 1.15, x: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>
            )}

            {/* Partnership Button */}
            <motion.button
              className="w-14 h-14 bg-gradient-to-r from-cat-batik to-cat-weave dark:from-cat-batik-dark dark:to-cat-weave-dark text-white rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(124,58,237,0.5)] dark:hover:shadow-[0_20px_50px_rgba(167,139,250,0.3)] flex items-center justify-center transition-all duration-300"
              onClick={goToPartnership}
              whileHover={{ scale: 1.15, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Handshake className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        className="w-16 h-16 bg-gradient-to-r from-gold to-gold-deep dark:from-gold-neon dark:to-gold-bright text-white dark:text-night rounded-full shadow-2xl hover:shadow-[0_25px_60px_rgba(184,134,11,0.5)] dark:hover:shadow-[0_25px_60px_rgba(232,197,96,0.4)] flex items-center justify-center text-3xl transition-all duration-300"
        onClick={() => setShowMenu(!showMenu)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: showMenu ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Plus className="w-8 h-8" />
      </motion.button>
    </div>
  )
}

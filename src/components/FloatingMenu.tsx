import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export const FloatingMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)

  const isMainPage = ['/', '/products', '/edutainment'].includes(location.pathname)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setShowMenu(false)
  }

  const goBack = () => {
    if (location.pathname.includes('/passport/')) {
      navigate('/products')
    } else {
      navigate('/')
    }
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
              className="w-14 h-14 bg-brown-primary text-white rounded-full shadow-xl flex items-center justify-center text-2xl"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ↑
            </motion.button>

            {/* Back Button - Only show if NOT on main pages */}
            {!isMainPage && (
              <motion.button
                className="w-14 h-14 bg-gold text-brown-primary rounded-full shadow-xl flex items-center justify-center text-2xl font-bold"
                onClick={goBack}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ←
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        className="w-16 h-16 bg-gradient-to-r from-brown-primary to-gold text-white rounded-full shadow-2xl flex items-center justify-center text-3xl"
        onClick={() => setShowMenu(!showMenu)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: showMenu ? 45 : 0 }}
      >
        +
      </motion.button>
    </div>
  )
}

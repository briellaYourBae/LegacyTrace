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
              className="w-14 h-14 bg-edu-blue dark:bg-neon-edu-blue text-white rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)] dark:hover:shadow-[0_20px_50px_rgba(96,165,250,0.5)] flex items-center justify-center text-2xl transition-shadow duration-250"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ↑
            </motion.button>

            {/* Back Button - Only show if NOT on main pages */}
            {!isMainPage && (
              <motion.button
                className="w-14 h-14 bg-growth-green dark:bg-glow-green text-white rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(22,163,74,0.5)] dark:hover:shadow-[0_20px_50px_rgba(74,222,128,0.5)] flex items-center justify-center text-2xl font-bold transition-shadow duration-250"
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
        className="w-16 h-16 bg-action-orange hover:bg-deep-action-orange dark:bg-dark-action-orange dark:hover:bg-hot-orange text-white rounded-full shadow-2xl hover:shadow-[0_25px_60px_rgba(249,115,22,0.6)] dark:hover:shadow-[0_25px_60px_rgba(251,146,60,0.6)] flex items-center justify-center text-3xl transition-all duration-250"
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

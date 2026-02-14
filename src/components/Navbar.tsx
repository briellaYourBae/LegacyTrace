import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navItems = [
    { 
      label: 'Beranda', 
      path: '/',
      isActive: (path: string) => path === '/'
    },
    { 
      label: 'Jelajahi', 
      path: '/products',
      isActive: (path: string) => path.startsWith('/products') || path.startsWith('/passport')
    },
    { 
      label: 'Belajar', 
      path: '/edutainment',
      isActive: (path: string) => path.startsWith('/edutainment')
    }
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Inner Container - Centered with Extended Width */}
      <div
        className={`mx-auto my-4 rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-light/95 backdrop-blur-lg shadow-lg border border-brown-primary/10' 
            : 'bg-transparent'
        }`}
        style={{ 
          maxWidth: 'calc(100% - 20px)', 
          width: 'fit-content', 
          margin: '16px auto',
          padding: '12px 48px'
        }}
      >
        <div className="flex justify-between items-center gap-20">
          
          {/* Logo - Kiri */}
          <Link to="/">
            <motion.div
              className="text-2xl md:text-xl font-bold text-brown-primary font-serif flex-shrink-0 tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🏛️ LegacyTrace
            </motion.div>
          </Link>

          {/* Desktop Navigation - Tengah */}
          <div className="hidden md:flex items-center gap-20">
            {navItems.map((item, idx) => {
              const isActive = item.isActive(location.pathname)
              
              return (
                <Link key={idx} to={item.path}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-brown-primary font-bold' 
                        : 'text-brown-light hover:text-brown-primary'
                    }`}>
                      {item.label}
                    </span>

                    {/* Underline Aktif */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-green-accent rounded-full"
                        layoutId="navbar-underline"
                        transition={{ duration: 0.3 }}
                        style={{ width: '100%' }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Team Button - Kanan */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link to="/team">
              <motion.button
                className="hidden md:flex px-6 py-2 bg-gradient-to-r from-gold to-gold/80 text-brown-primary font-semibold text-sm rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Team
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-brown-primary flex-shrink-0 text-3xl"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? '✕' : '☰'}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden border-t border-brown-primary/10 mt-4"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4 pt-6">
            {navItems.map((item, idx) => {
              const isActive = item.isActive(location.pathname)
              
              return (
                <Link key={idx} to={item.path} onClick={() => setIsOpen(false)}>
                  <motion.div
                    className={`px-6 py-4 rounded-lg text-lg font-medium transition-all ${
                      isActive 
                        ? 'bg-brown-primary/10 text-brown-primary font-bold border-l-4 border-gold' 
                        : 'text-brown-light hover:text-brown-primary hover:bg-brown-primary/5'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              )
            })}

            <Link to="/team" onClick={() => setIsOpen(false)}>
              <motion.button
                className="w-full px-6 py-4 bg-gradient-to-r from-gold to-gold/80 text-brown-primary font-semibold text-lg rounded-full mt-2"
                whileHover={{ scale: 1.02 }}
              >
                Team
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
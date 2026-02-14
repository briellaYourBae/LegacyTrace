import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => 
    document.documentElement.classList.contains('dark')
  )
  const location = useLocation()

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto my-4 rounded-2xl transition-all duration-300 px-6 md:px-12 py-3 ${
            isScrolled 
              ? 'glass shadow-xl shadow-edu-blue/10 dark:shadow-neon-edu-blue/20 border border-soft-border/50 dark:border-soft-dark-border/50' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex justify-between items-center gap-8 md:gap-20">
          
            {/* Logo - Kiri */}
            <Link to="/">
              <motion.div
                className="text-xl md:text-2xl font-bold gradient-text font-serif flex-shrink-0 tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LegacyTrace
              </motion.div>
            </Link>

            {/* Desktop Navigation - Tengah */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navItems.map((item, idx) => {
                const isActive = item.isActive(location.pathname)
                
                return (
                  <Link key={idx} to={item.path}>
                    <motion.div
                      className="relative pb-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={`text-sm font-medium transition-colors duration-250 ${
                        isActive 
                          ? 'text-edu-blue dark:text-neon-edu-blue font-bold' 
                          : 'text-slate-text dark:text-dark-body hover:text-edu-blue dark:hover:text-neon-edu-blue'
                      }`}>
                        {item.label}
                      </span>

                      {/* Underline Aktif */}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-edu-blue via-growth-green to-edu-blue dark:from-neon-edu-blue dark:via-glow-green dark:to-neon-edu-blue rounded-full shadow-lg shadow-edu-blue/50 dark:shadow-neon-edu-blue/50"
                          layoutId="navbar-underline"
                          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Team Button & Dark Mode - Kanan */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <motion.button
                onClick={toggleDarkMode}
                className="text-2xl hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-edu-blue" />}
              </motion.button>
              
              <Link to="/team">
                <motion.button
                  className="hidden md:flex px-6 py-2 bg-gradient-to-r from-action-orange to-deep-action-orange dark:from-dark-action-orange dark:to-hot-orange text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl hover:shadow-action-orange/50 dark:hover:shadow-dark-action-orange/50 transition-all duration-250 btn-glow"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Team
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-edu-blue dark:text-neon-edu-blue flex-shrink-0 text-3xl"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className="md:hidden overflow-hidden border-t border-soft-border dark:border-soft-dark-border mt-4"
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
                      className={`px-6 py-4 rounded-lg text-lg font-medium transition-all duration-250 ${
                        isActive 
                          ? 'bg-sky-soft-blue dark:bg-blue-glow-soft text-edu-blue dark:text-neon-edu-blue font-bold border-l-4 border-edu-blue dark:border-neon-edu-blue' 
                          : 'text-slate-text dark:text-dark-body hover:text-edu-blue dark:hover:text-neon-edu-blue hover:bg-mist-gray dark:hover:bg-soft-dark-border'
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
                  className="w-full px-6 py-4 bg-action-orange hover:bg-deep-action-orange dark:bg-dark-action-orange dark:hover:bg-hot-orange text-white font-semibold text-lg rounded-full mt-2 shadow-md"
                  whileHover={{ scale: 1.02 }}
                >
                  Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
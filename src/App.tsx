import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'
import { FloatingMenu } from './components/FloatingMenu'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Passport } from './pages/Passport'
import { Edutainment } from './pages/Edutainment'
import { ArtisanPage } from './pages/Artisan'
import { Team } from './pages/Team'
import { Regions } from './pages/Regions'
import { Partnership } from './pages/Partnership'

export const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      {!loading && (
        <Router>
          <Navbar />
          <main className="pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/passport/:productId" element={<Passport />} />
              <Route path="/edutainment" element={<Edutainment />} />
              <Route path="/artisan/:artisanId" element={<ArtisanPage />} />
              <Route path="/team" element={<Team />} />
              <Route path="/regions" element={<Regions />} />
              <Route path="/partnership" element={<Partnership />} />
            </Routes>
          </main>
          <Footer />
          <FloatingMenu />
        </Router>
      )}
    </>
  )
}

export default App
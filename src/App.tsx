import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'
import { FloatingMenu } from './components/FloatingMenu'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Passport } from './pages/Passport'
import { Edutainment } from './pages/Edutainment'
import { ArtisanPage } from './pages/Artisan'
import { Team } from './pages/Team'
import { Regions } from './pages/Regions'
import { Partnership } from './pages/Partnership'
import { AuthProvider } from './contexts/AuthContext'
import { AdminLayout } from './pages/admin/AdminLayout'
import { AdminDashboard } from './pages/admin/AdminDashboard'
import { AdminProducts } from './pages/admin/AdminProducts'
import { AdminArtisans } from './pages/admin/AdminArtisans'
import { AdminRegions } from './pages/admin/AdminRegions'
import { AdminTeam } from './pages/admin/AdminTeam'
import { AdminQuiz } from './pages/admin/AdminQuiz'

const AppContent = () => {
  const location = useLocation()
  const isAdminPage = location.pathname.startsWith('/admin')

  return (
    <>
      <ScrollToTop />
      {!isAdminPage && <Navbar />}
      <main className={!isAdminPage ? 'pt-24' : ''}>
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/passport/:productId" element={<Passport />} />
          <Route path="/edutainment" element={<Edutainment />} />
          <Route path="/artisan/:artisanId" element={<ArtisanPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/partnership" element={<Partnership />} />

          {/* Admin pages */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="artisans" element={<AdminArtisans />} />
            <Route path="regions" element={<AdminRegions />} />
            <Route path="team" element={<AdminTeam />} />
            <Route path="quiz" element={<AdminQuiz />} />
          </Route>
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <FloatingMenu />}
    </>
  )
}

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
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </Router>
      )}
    </>
  )
}

export default App
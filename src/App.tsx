import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Passport } from './pages/Passport'
import { Edutainment } from './pages/Edutainment'
import { ArtisanPage } from './pages/Artisan'
import { Team } from './pages/Team'
import { Regions } from './pages/Regions'

export const App = () => {
  return (
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
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
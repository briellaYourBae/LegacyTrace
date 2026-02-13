import { motion } from 'framer-motion'
import { Artisan } from '../types/product'

interface ArtisanProfileProps {
  artisan: Artisan
}

export const ArtisanProfile = ({ artisan }: ArtisanProfileProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <motion.img
          src={artisan.photoUrl}
          alt={artisan.name}
          className="w-full h-80 object-cover rounded-lg"
          whileHover={{ scale: 1.05 }}
        />
        
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-serif font-bold text-brown-primary mb-2">{artisan.name}</h2>
          <p className="text-lg text-gold font-semibold mb-4">{artisan.specialty}</p>
          <div className="inline-flex gap-2 bg-brown-primary/10 p-3 rounded-lg w-fit mb-6">
            <span className="text-sm text-brown-light font-medium">Experience</span>
            <span className="text-sm font-bold text-brown-primary">{artisan.yearsExperience}+ years</span>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-serif font-bold text-brown-primary mb-2">Cultural Background</h3>
              <p className="text-dark leading-relaxed">{artisan.culturalBackground}</p>
            </div>

            <blockquote className="border-l-4 border-gold pl-4 italic text-lg text-brown-primary">
              "{artisan.quote}"
              <p className="text-sm text-brown-light font-medium mt-2">— {artisan.name}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
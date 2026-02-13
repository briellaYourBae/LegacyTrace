import { motion } from 'framer-motion'
import { SupplyStep } from '../types/product'

interface TimelineStepProps {
  step: SupplyStep
  index: number
  isVisible: boolean
}

export const TimelineStep = ({ step, index, isVisible }: TimelineStepProps) => {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      className={`flex mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Marker */}
      <div className="flex justify-center w-1/3">
        <motion.div
          className="w-16 h-16 bg-white border-4 border-gold rounded-full shadow-md flex items-center justify-center text-2xl hover:scale-125 transition-transform z-10"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {step.icon}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className={`w-1/3 ${isLeft ? 'pr-12' : 'pl-12'}`}
        whileHover={{ backgroundColor: '#f5f1e8' }}
      >
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h4 className="text-lg font-serif font-bold text-brown-primary mb-2">{step.title}</h4>
          <p className="text-sm text-brown-light font-semibold mb-1">👤 {step.actor}</p>
          <p className="text-sm text-brown-light font-semibold mb-3">📍 {step.location}</p>
          <p className="text-dark leading-relaxed text-sm mb-3">{step.description}</p>
          {step.imageUrl && (
            <motion.img 
              src={step.imageUrl} 
              alt={step.title}
              className="w-full h-48 object-cover rounded-lg mt-3"
              whileHover={{ scale: 1.05 }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
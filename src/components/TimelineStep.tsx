import { motion } from 'framer-motion'
import { SupplyStep } from '../types/product'

interface TimelineStepProps {
  step: SupplyStep
  index: number
  isVisible: boolean
}

export const TimelineStep = ({ step, index, isVisible }: TimelineStepProps) => {
  const isRight = index % 2 === 0

  return (
    <motion.div
      className="relative flex items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
    >
      {/* Left Side - Empty or Content */}
      <div className="w-1/2 pr-4 md:pr-12">
        {!isRight && (
          <motion.div
            className="bg-pure-card dark:bg-dark-surface p-5 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-250 ml-auto max-w-sm md:max-w-lg border border-soft-border dark:border-soft-dark-border"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-right">
              <h4 className="text-base md:text-xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-3">{step.title}</h4>
              <p className="text-xs md:text-base text-slate-text dark:text-dark-body font-semibold mb-2">👤 {step.actor}</p>
              <p className="text-xs md:text-base text-slate-text dark:text-dark-body font-semibold mb-4">📍 {step.location}</p>
              <p className="text-ink-black dark:text-dark-body leading-relaxed text-sm md:text-base mb-4">{step.description}</p>
              {step.imageUrl && (
                <motion.img 
                  src={step.imageUrl} 
                  alt={step.title}
                  className="w-full h-40 md:h-56 object-cover rounded-lg mt-3 shadow-md"
                  whileHover={{ scale: 1.05 }}
                />
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Center Line with Marker */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <motion.div
          className="w-14 h-14 md:w-20 md:h-20 bg-pure-card dark:bg-dark-surface border-4 md:border-[6px] border-edu-blue dark:border-neon-edu-blue rounded-full shadow-xl flex items-center justify-center text-xl md:text-3xl"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {step.icon}
        </motion.div>
      </div>

      {/* Right Side - Empty or Content */}
      <div className="w-1/2 pl-4 md:pl-12">
        {isRight && (
          <motion.div
            className="bg-pure-card dark:bg-dark-surface p-5 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-250 mr-auto max-w-sm md:max-w-lg border border-soft-border dark:border-soft-dark-border"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-base md:text-xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-3">{step.title}</h4>
            <p className="text-xs md:text-base text-slate-text dark:text-dark-body font-semibold mb-2">👤 {step.actor}</p>
            <p className="text-xs md:text-base text-slate-text dark:text-dark-body font-semibold mb-4">📍 {step.location}</p>
            <p className="text-ink-black dark:text-dark-body leading-relaxed text-sm md:text-base mb-4">{step.description}</p>
            {step.imageUrl && (
              <motion.img 
                src={step.imageUrl} 
                alt={step.title}
                className="w-full h-40 md:h-56 object-cover rounded-lg mt-3 shadow-md"
                whileHover={{ scale: 1.05 }}
              />
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
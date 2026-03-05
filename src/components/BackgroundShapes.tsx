import { motion } from 'framer-motion'

interface BackgroundShapesProps {
  variant?: 'default' | 'minimal' | 'dense'
}

export const BackgroundShapes = ({ variant = 'default' }: BackgroundShapesProps) => {
  const shapes = variant === 'minimal' ? 2 : variant === 'dense' ? 5 : 3

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(shapes)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: `${40 + i * 30}px`,
            height: `${40 + i * 30}px`,
            left: `${10 + i * 20}%`,
            top: `${i * 25}%`,
            border: `2px solid ${i % 2 === 0 ? 'rgba(184, 134, 11, 0.08)' : 'rgba(13, 148, 136, 0.08)'}`,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20px' : '0px',
            backgroundColor: i % 2 === 0 ? 'rgba(184, 134, 11, 0.02)' : 'rgba(13, 148, 136, 0.02)',
            willChange: 'transform'
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 30 + i * 5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}

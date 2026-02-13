import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QuizQuestion } from '../types/product'

interface QuizCardProps {
  questions: QuizQuestion[]
}

export const QuizCard = ({ questions }: QuizCardProps) => {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const question = questions[currentQ]

  const handleAnswer = (idx: number) => {
    setSelected(idx)
    setAnswered(true)
    if (idx === question.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQ(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setShowResult(false)
  }

  if (showResult) {
    return (
      <motion.div
        className="bg-gradient-to-br from-gold/10 to-green-accent/10 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-6xl mb-4">
          {score === questions.length ? '🏆' : score >= questions.length * 0.6 ? '⭐' : '📚'}
        </div>
        <h3 className="text-2xl font-serif font-bold text-brown-primary mb-2">Quiz Complete!</h3>
        <p className="text-lg text-gold font-semibold mb-2">
          You scored {score} out of {questions.length}
        </p>
        <p className="text-brown-light mb-6 text-base">
          {score === questions.length 
            ? 'Perfect! You\'re an expert on this product\'s story!'
            : score >= questions.length * 0.6
            ? 'Great job! You understand the supply chain well!'
            : 'Good effort! Learn more about ethical production!'}
        </p>
        <motion.button
          className="px-6 py-3 bg-brown-primary text-white rounded-full font-semibold hover:bg-gold transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetQuiz}
        >
          Retake Quiz
        </motion.button>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md">
      {/* Progress */}
      <div className="mb-8">
        <div className="w-full h-2 bg-brown-primary/10 rounded-full overflow-hidden mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-brown-primary to-gold"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-sm text-brown-light font-medium">
          Question {currentQ + 1} of {questions.length}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-lg font-serif font-bold text-brown-primary mb-6">{question.question}</h4>

          <div className="space-y-3 mb-6">
            {question.options.map((option, idx) => (
              <motion.button
                key={idx}
                className={`w-full flex items-center gap-4 p-4 border-2 rounded-lg transition-all text-left font-medium ${
                  selected === idx 
                    ? idx === question.correct 
                      ? 'border-green-accent bg-green-accent/10 text-dark'
                      : 'border-red-500 bg-red-500/10 text-dark'
                    : 'border-brown-primary/20 hover:border-gold bg-white text-dark'
                }`}
                onClick={() => !answered && handleAnswer(idx)}
                whileHover={!answered ? { scale: 1.02 } : {}}
                whileTap={!answered ? { scale: 0.98 } : {}}
                disabled={answered}
              >
                <span className={`w-8 h-8 rounded-full font-bold flex items-center justify-center ${
                  selected === idx
                    ? idx === question.correct 
                      ? 'bg-green-accent text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-gold text-white'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{option}</span>
                {answered && idx === question.correct && <span className="ml-auto text-xl">✓</span>}
                {answered && selected === idx && selected !== question.correct && <span className="ml-auto text-xl">✗</span>}
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {answered && (
              <motion.div
                className="bg-gold/10 border-l-4 border-gold p-4 rounded mb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p className="text-dark text-sm leading-relaxed">{question.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {answered && (
            <motion.button
              className="w-full py-3 bg-gradient-to-r from-brown-primary to-gold text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              onClick={handleNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {currentQ === questions.length - 1 ? 'See Results' : 'Next Question'}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
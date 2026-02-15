import { motion } from 'framer-motion'

export const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-night-surface via-night to-night-surface"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Warm radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,134,11,0.12)_0%,_transparent_70%)]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      
      {/* Floating accent orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gold/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: '20%', left: '15%' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-teal/5 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: '20%', right: '15%' }}
      />

      <div className="text-center relative z-10">
        {/* Logo */}
        <motion.div
          className="mb-8 flex items-center justify-center"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 10, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src="/assets/logo/golden-gunungan-wayang-design-indonesian-javanese-culture-free-png-removebg-preview.png"
            alt="Gunungan Wayang"
            className="w-32 h-32 object-contain filter drop-shadow-[0_0_30px_rgba(184,134,11,0.3)]"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Title */}
        <motion.h1
          className="text-4xl font-serif font-bold text-gold-neon mb-3 tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          LegacyTrace
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="text-dark-body/90 text-lg font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Telusuri Kisah di Balik Setiap Produk Lokal
        </motion.p>
        
        {/* Loading dots */}
        <motion.div
          className="mt-8 flex gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 bg-gold-neon rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

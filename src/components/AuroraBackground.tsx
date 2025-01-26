import { motion } from 'framer-motion'

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Aurora beams */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-[-10%] left-0 w-full h-[120%] bg-gradient-to-b from-transparent via-violet-500/10 to-transparent transform -rotate-45 blur-3xl" />
        <div className="absolute top-[-10%] right-0 w-full h-[120%] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent transform rotate-45 blur-3xl" />
      </motion.div>

      {/* Additional color layers */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  )
}

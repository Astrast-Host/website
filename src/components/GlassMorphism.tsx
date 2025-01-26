import { motion } from 'framer-motion'

export function GlassMorphism() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Main glass effect */}
      <div className="absolute inset-0 glass-morphism">
        {/* Left spotlight */}
        <motion.div
          className="absolute left-0 top-0 w-full h-full"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(139,92,246,0.3), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Right spotlight */}
        <motion.div
          className="absolute right-0 top-0 w-full h-full"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            delay: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(99,102,241,0.3), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Center glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at center, rgba(139,92,246,0.2) 0%, transparent 50%),
              linear-gradient(to bottom right, rgba(139,92,246,0.1), rgba(99,102,241,0.1))
            `,
            backdropFilter: 'blur(100px)',
          }}
        />
      </div>

      {/* Additional glass layers */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
<div className="absolute inset-0 backdrop-blur-3xl opacity-100" />
    </div>
  )
}

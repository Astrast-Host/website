import { motion } from 'framer-motion'

export function HeroAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className={`absolute border border-white/10 rounded-full
              animate-orbit-${ring} glow-orbit`}
            style={{
              width: `${ring * 30}rem`,
              height: `${ring * 30}rem`,
            }}
          />
        ))}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 bg-gradient-to-tr from-violet-500/40 to-fuchsia-500/40 
            rounded-lg backdrop-blur-3xl border border-white/20 orbital-glow"
          style={{ transform: 'rotate(45deg)' }}
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[20rem] h-[20rem]"
        >
          <div className="absolute -top-4 left-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 
            rounded-lg backdrop-blur-xl border border-white/20 orbital-glow"
            style={{ transform: 'rotate(45deg)' }}
          />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[40rem] h-[40rem]"
        >
          <div className="absolute top-1/2 -right-4 w-12 h-12 bg-gradient-to-r from-orange-500/50 to-amber-500/50 
            rounded-lg backdrop-blur-xl border border-white/20 orbital-glow"
            style={{ transform: 'rotate(45deg)' }}
          />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute w-[60rem] h-[60rem]"
        >
          <div className="absolute -bottom-6 left-1/2 w-16 h-16 bg-gradient-to-r from-emerald-500/50 to-teal-500/50 
            rounded-lg backdrop-blur-xl border border-white/20 orbital-glow"
            style={{ transform: 'rotate(45deg)' }}
          />
        </motion.div>
      </div>
    </div>
  )
}

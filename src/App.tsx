import { motion } from 'motion/react'
import { DiaTextReveal } from '@/components/ui/dia-text-reveal'

const SWEEP_COLORS = ['#e8b86d', '#f0d5a8', '#fff6e8', '#c4784a', '#8a4f2e']

export default function App() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6">
      <div className="atmosphere" aria-hidden="true" />
      <div className="haze" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <DiaTextReveal
          className="font-display text-[clamp(2.75rem,10vw,6.5rem)] font-semibold tracking-[-0.04em]"
          text="Coming Soon"
          colors={SWEEP_COLORS}
          textColor="#f3ebe1"
          duration={2}
          delay={0.2}
        />

        <motion.p
          className="font-brand mt-6 text-[clamp(1.15rem,3.5vw,1.75rem)] font-medium tracking-[0.55em] text-[#c4b5a4] uppercase"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Smokers
        </motion.p>
      </div>
    </main>
  )
}

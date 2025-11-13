import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-fuchsia-200 ring-1 ring-white/20 w-max">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Futuristic Portfolio
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Building with data, code, and imagination
          </h1>

          <TypingSubtitle />

          <p className="mt-6 text-slate-300 max-w-xl">
            Short bio goes here. Passionate about AI, full‑stack development, and crafting immersive experiences powered by data.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="rounded-xl bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-5 py-3 text-sm font-semibold shadow-[0_0_30px_-10px_#e879f9] transition">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 px-5 py-3 text-sm font-semibold ring-1 ring-cyan-400/30 transition">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-cyan-400/30 blur-2xl" />
            <div className="relative rounded-[2rem] p-1 bg-gradient-to-br from-fuchsia-500 to-cyan-400">
              <div className="rounded-[1.7rem] bg-slate-950 p-4 flex items-center justify-center">
                <div className="h-56 w-56 sm:h-64 sm:w-64 rounded-3xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 ring-1 ring-white/10 flex items-center justify-center text-slate-300">
                  Your Photo
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* subtle parallax glow elements */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
    </section>
  )
}

function TypingSubtitle() {
  return (
    <div className="mt-3 text-lg sm:text-xl text-slate-300 font-mono">
      <span className="after:content-['▌'] after:ml-1 after:animate-pulse">AI/ML Engineer · Data Viz · Full‑Stack Developer</span>
    </div>
  )
}

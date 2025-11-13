import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <GradientBackground />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Sections />
      </main>
    </div>
  )
}

function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-0">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,_rgba(168,85,247,0.12),_transparent_60%),radial-gradient(60%_60%_at_100%_100%,_rgba(34,211,238,0.08),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-soft-light" />
    </div>
  )
}

export default App

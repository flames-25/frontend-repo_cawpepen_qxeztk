import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'ml', label: 'ML Projects' },
  { id: 'viz', label: 'Data Visualizations' },
  { id: 'certs', label: 'Certificates' },
  { id: 'resume', label: 'Resume' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 shadow-[0_0_40px_-10px_#a855f7]" />
            <span className="text-slate-100 font-semibold tracking-wide">NeoPortfolio</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="text-slate-300 hover:text-white">
              <Github size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Email" className="text-slate-300 hover:text-white">
              <Mail size={18} />
            </a>
          </div>

          <button
            className="md:hidden text-slate-100"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90">
          <div className="px-4 py-4 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-slate-300 hover:text-white text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

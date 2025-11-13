import { motion } from 'framer-motion'
import { Github, ExternalLink, FileText, Image as ImageIcon, Mail, Award, BarChart3, Database, Cpu, Brain } from 'lucide-react'

const sectionClass = 'relative scroll-mt-20 py-20'
const titleClass = 'text-2xl sm:text-3xl font-bold text-white mb-8'
const cardClass = 'group rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5 hover:ring-fuchsia-400/40 transition-all backdrop-blur'

export default function Sections() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <MLProjects />
      <Visualizations />
      <Certificates />
      <Resume />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

function About() {
  return (
    <section id="about" className={sectionClass}>
      <Container>
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={titleClass}>About</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-slate-300 max-w-3xl">
          I blend machine intelligence with delightful interfaces. This space showcases selected work across software engineering, machine learning, and data storytelling. Replace this with your biography, focus areas, and what you are exploring now.
        </motion.p>
      </Container>
    </section>
  )
}

function Skills() {
  const stacks = [
    { label: 'Languages', items: ['Python','TypeScript','SQL','Rust'], icon: <Cpu className="text-fuchsia-300" size={18}/> },
    { label: 'AI/ML', items: ['PyTorch','TensorFlow','Sklearn','LlamaIndex'], icon: <Brain className="text-cyan-300" size={18}/> },
    { label: 'Data', items: ['Pandas','Polars','DuckDB','Apache Arrow'], icon: <Database className="text-purple-300" size={18}/> },
    { label: 'Frontend', items: ['React','Vite','Tailwind','Framer Motion'], icon: <ExternalLink className="text-pink-300" size={18}/> },
  ]
  return (
    <section id="skills" className={sectionClass}>
      <Container>
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={titleClass}>Technical Skills</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stacks.map((s) => (
            <motion.div key={s.label} whileHover={{y:-4}} className={cardClass}>
              <div className="flex items-center gap-2 text-slate-200 mb-2">
                {s.icon}
                <span className="font-semibold">{s.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                    {i}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Projects() {
  const items = [
    { title: 'Holographic UI Kit', desc: 'A neon‑glow component library with accessibility baked in.', tech: ['React','Tailwind','Framer'], img: 'https://images.unsplash.com/photo-1557264322-b44d383a290b?q=80&w=1200&auto=format&fit=crop', link: '#', repo: '#' },
    { title: 'Realtime Analytics', desc: 'Stream processing with vector search for anomaly detection.', tech: ['Python','DuckDB','Faiss'], img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop', link: '#', repo: '#' },
    { title: 'Edge ML Vision', desc: 'On‑device inference with quantized CNNs.', tech: ['PyTorch','ONNX','Rust'], img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop', link: '#', repo: '#' },
  ]
  return (
    <section id="projects" className={sectionClass}>
      <Container>
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={titleClass}>Projects</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <motion.article key={p.title} whileHover={{y:-6}} className={cardClass}>
              <div className="overflow-hidden rounded-xl mb-4">
                <img src={p.img} alt="project" className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <h3 className="text-slate-100 font-semibold text-lg">{p.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="rounded-full bg-fuchsia-500/10 text-fuchsia-200 px-2.5 py-1 text-xs ring-1 ring-fuchsia-400/30">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <a href={p.link} className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"><ExternalLink size={16}/> Live</a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-slate-300 hover:text-white"><Github size={16}/> Code</a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function MLProjects() {
  const items = [
    { title: 'LLM Retrieval', score: 0.92 },
    { title: 'Time‑series Forecast', score: 0.87 },
    { title: 'Vision Classifier', score: 0.95 },
  ]
  return (
    <section id="ml" className={sectionClass}>
      <Container>
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={titleClass}>Machine Learning Projects</motion.h2>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((m, idx) => (
            <motion.div key={m.title} whileHover={{y:-4}} className={cardClass}>
              <div className="flex items-center justify-between">
                <h3 className="text-slate-100 font-semibold">{m.title}</h3>
                <span className="text-cyan-300 font-mono">Score {m.score}</span>
              </div>
              <div className="mt-4 h-24 w-full rounded-xl bg-slate-800/60 overflow-hidden ring-1 ring-white/10">
                <AnimatedBars delay={idx * 0.2} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Visualizations() {
  return (
    <section id="viz" className={sectionClass}>
      <Container>
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={titleClass}>Data Visualizations</motion.h2>
        <motion.div whileHover={{y:-4}} className={cardClass}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 p-4">
              <div className="flex items-center gap-2 text-slate-200 mb-3"><BarChart3 size={18} className="text-cyan-300"/> Chart A</div>
              <AnimatedLine />
            </div>
            <div className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 p-4">
              <div className="flex items-center gap-2 text-slate-200 mb-3"><BarChart3 size={18} className="text-fuchsia-300"/> Chart B</div>
              <AnimatedLine reverse />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

function Certificates() {
  const certs = [
    { name: 'Deep Learning Specialization', org: 'Coursera', year: '2023' },
    { name: 'Data Engineering', org: 'Google', year: '2022' },
  ]
  return (
    <section id="certs" className={sectionClass}>
      <Container>
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={titleClass}>Certificates</motion.h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((c) => (
            <motion.div key={c.name} whileHover={{y:-3}} className={cardClass}>
              <div className="flex items-center gap-2 text-slate-200"><Award size={18} className="text-yellow-300"/> {c.name}</div>
              <p className="text-slate-400 text-sm mt-1">{c.org} · {c.year}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Resume() {
  return (
    <section id="resume" className={sectionClass}>
      <Container>
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={titleClass}>Resume</motion.h2>
        <motion.div whileHover={{y:-4}} className={cardClass + ' flex items-center justify-between'}>
          <div>
            <p className="text-slate-300">Download a copy of my resume.</p>
          </div>
          <a href="#" className="rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 px-4 py-2 text-sm font-semibold ring-1 ring-cyan-400/30 inline-flex items-center gap-2"><FileText size={16}/> Download</a>
        </motion.div>
      </Container>
    </section>
  )
}

function Gallery() {
  const items = new Array(6).fill(0).map((_,i)=>`https://images.unsplash.com/photo-152${i+10}97938-6${i}d${i}83${i}c6b?q=80&w=1200&auto=format&fit=crop`)
  return (
    <section id="gallery" className={sectionClass}>
      <Container>
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={titleClass}>Gallery</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((src,idx)=> (
            <motion.div key={idx} whileHover={{y:-4}} className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900/60">
              <img src={src} alt="gallery" className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"/>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className={sectionClass}>
      <Container>
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={titleClass}>Contact</motion.h2>
        <motion.form whileHover={{y:-2}} className={cardClass + ' grid sm:grid-cols-2 gap-4'} onSubmit={(e)=>e.preventDefault()}>
          <input placeholder="Your name" className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-200 outline-none focus:ring-fuchsia-400/50"/>
          <input placeholder="Email" className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-200 outline-none focus:ring-fuchsia-400/50"/>
          <textarea placeholder="Message" rows={4} className="sm:col-span-2 rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-3 text-slate-200 outline-none focus:ring-fuchsia-400/50"/>
          <button className="sm:col-span-2 rounded-xl bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-5 py-3 text-sm font-semibold shadow-[0_0_30px_-10px_#e879f9] transition inline-flex items-center gap-2"><Mail size={16}/> Send</button>
        </motion.form>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-1 hover:text-white"><Github size={16}/> GitHub</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-white"><ImageIcon size={16}/> Dribbble</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-white"><ExternalLink size={16}/> Portfolio</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function Container({ children }) {
  return <div className="mx-auto max-w-7xl px-6">{children}</div>
}

function AnimatedBars({ delay = 0 }) {
  const bars = new Array(12).fill(0)
  return (
    <div className="h-full w-full grid grid-cols-12 items-end gap-1 p-3">
      {bars.map((_,i)=> (
        <motion.div key={i} initial={{scaleY:0.3}} animate={{scaleY:[0.3,1,0.5,0.8,0.4]}} transition={{duration:2, repeat:Infinity, delay: delay + i*0.05, ease:'easeInOut'}} className="origin-bottom rounded-md bg-gradient-to-t from-fuchsia-500/60 via-purple-500/60 to-cyan-400/60" style={{height: '100%'}} />
      ))}
    </div>
  )
}

function AnimatedLine({ reverse=false }) {
  return (
    <svg viewBox="0 0 400 120" className="w-full h-32">
      <motion.path
        d="M0 80 C 80 20, 120 120, 200 60 S 320 100, 400 40"
        fill="none"
        stroke={reverse ? 'url(#g2)' : 'url(#g1)'}
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
      />
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e879f9"/>
          <stop offset="100%" stopColor="#22d3ee"/>
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee"/>
          <stop offset="100%" stopColor="#e879f9"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

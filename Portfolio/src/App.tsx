import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero.tsx'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import backgroundVideo from './assets/background-viddd4mb.mp4'

function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        {/* Video de fondo fijo — no se mueve al hacer scroll */}
        <video
          className="fixed inset-0 -z-10 h-full w-full object-cover opacity-40"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="fixed inset-0 -z-10 bg-background/45" />

        <main className="relative z-10 text-white font-main">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App

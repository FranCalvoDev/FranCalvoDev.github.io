import { useEffect, useRef } from 'react'
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
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Safari (desktop & iOS) requires `muted` to be set as a real DOM
    // property/attribute before play() is called, otherwise autoplay is
    // silently blocked. React's `muted` JSX prop alone isn't reliable there.
    video.muted = true
    video.defaultMuted = true

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was prevented; ignore, video will just stay paused.
      })
    }
  }, [])

  return (
    <LanguageProvider>
      <div className="relative">
        {/* Video de fondo fijo — no se mueve al hacer scroll */}
        <video
          ref={videoRef}
          className="fixed inset-0 -z-10 h-full w-full object-cover opacity-40"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          // eslint-disable-next-line react/no-unknown-property
          webkit-playsinline="true"
          preload="auto"
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

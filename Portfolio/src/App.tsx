import { HashRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WorkPage from './pages/WorkPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        {/*
          Fondo estilo Apple: sin vídeo, sin imágenes pesadas.
          Base sólida oscura + "glows" radiales animados en CSS puro.
          Coste real: 0 KB de red, solo CSS -> mejora drástica de LCP/FCP.
        */}
        <div className="fixed inset-0 -z-10 bg-background" aria-hidden="true">
          <div className="apple-glow apple-glow--primary" />
          <div className="apple-glow apple-glow--secondary" />
          <div className="apple-glow-noise" />
        </div>

        <HashRouter>
          <main className="relative z-10 text-white font-main">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </main>
        </HashRouter>
      </div>
    </LanguageProvider>
  )
}

export default App

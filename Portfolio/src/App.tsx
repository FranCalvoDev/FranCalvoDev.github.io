import { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { domAnimation, LazyMotion } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollIndicator from './components/ScrollIndicator'
import Home from './pages/Home'

// Home va en el bundle inicial (es la landing); el resto de páginas se descarga
// recién al navegar, así la primera carga no paga por el cuestionario, el blog, etc.
const WorkPage = lazy(() => import('./pages/WorkPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const SpecsPage = lazy(() => import('./pages/SpecsPage'))
const SpecItemPage = lazy(() => import('./pages/SpecItemPage'))

function App() {
  return (
    <LanguageProvider>
      {/* Los componentes usan `m.*` en lugar de `motion.*`: solo cargan las features de domAnimation
          (sin layout/drag), bastante más livianas. `strict` avisa si alguien vuelve a usar `motion.*`. */}
      <LazyMotion features={domAnimation} strict>
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
              {/* El fallback ocupa la pantalla para que el footer no salte hacia arriba mientras carga el chunk */}
              <Suspense fallback={<div className="min-h-screen" />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<WorkPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/specs" element={<SpecsPage />} />
                  <Route path="/specs/:itemId" element={<SpecItemPage />} />
                </Routes>
              </Suspense>
              <Footer />
              <ScrollIndicator />
            </main>
          </HashRouter>
        </div>
      </LazyMotion>
    </LanguageProvider>
  )
}

export default App

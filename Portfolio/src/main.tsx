import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Tipografías autoalojadas (Fontsource): cumplen con la CSP font-src 'self'
import '@fontsource-variable/archivo/standard.css' // títulos: ejes de peso + ancho
import '@fontsource-variable/jetbrains-mono'                  // texto: variable 100–800, un solo archivo para todos los pesos
import '@fontsource-variable/jetbrains-mono/wght-italic.css'
import '@fontsource/special-elite/400.css'          // detalles: fecha, Ref., sello
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

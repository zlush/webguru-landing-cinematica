import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Calculadora from './Calculadora.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SobreNosotros from './pages/SobreNosotros.jsx'
import Partners from './pages/Partners.jsx'
import Terminos from './pages/Terminos.jsx'
import Privacidad from './pages/Privacidad.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

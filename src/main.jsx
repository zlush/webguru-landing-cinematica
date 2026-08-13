import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Calculadora from './Calculadora.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SobreNosotros from './pages/SobreNosotros.jsx'
import Clinicas from './pages/Clinicas.jsx'
import Partners from './pages/Partners.jsx'
import Terminos from './pages/Terminos.jsx'
import Privacidad from './pages/Privacidad.jsx'
import NotFound from './pages/NotFound.jsx'
import Blog from './pages/Blog.jsx'
import QueEsUnCrm from './pages/articles/QueEsUnCrm.jsx'
import AutomatizarWhatsapp from './pages/articles/AutomatizarWhatsapp.jsx'
import GlosarioMarketing from './pages/articles/GlosarioMarketing.jsx'
import EstrategiasMarketing from './pages/articles/EstrategiasMarketing.jsx'
import TiposAnuncios from './pages/articles/TiposAnuncios.jsx'
import QueEsElEngagement from './pages/articles/QueEsElEngagement.jsx'
import SegmentacionClientes from './pages/articles/SegmentacionClientes.jsx'
import QueEsUnCopywriter from './pages/articles/QueEsUnCopywriter.jsx'
import QueEsUnWebinar from './pages/articles/QueEsUnWebinar.jsx'
import PlaneacionEstrategica from './pages/articles/PlaneacionEstrategica.jsx'
import EstudioDeMercado from './pages/articles/EstudioDeMercado.jsx'
import EncuestaWhatsapp from './pages/articles/EncuestaWhatsapp.jsx'
import CerradoPorVacaciones from './pages/articles/CerradoPorVacaciones.jsx'
import PieDeFirma from './pages/articles/PieDeFirma.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/clinicas" element={<Clinicas />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/que-es-un-crm" element={<QueEsUnCrm />} />
        <Route path="/blog/automatizar-whatsapp-business-agendar-citas" element={<AutomatizarWhatsapp />} />
        <Route path="/blog/glosario-marketing-digital" element={<GlosarioMarketing />} />
        <Route path="/blog/estrategias-de-marketing-digital-para-pymes" element={<EstrategiasMarketing />} />
        <Route path="/blog/tipos-de-anuncios-publicitarios" element={<TiposAnuncios />} />
        <Route path="/blog/que-es-el-engagement" element={<QueEsElEngagement />} />
        <Route path="/blog/que-es-la-segmentacion-de-clientes" element={<SegmentacionClientes />} />
        <Route path="/blog/que-es-un-copywriter" element={<QueEsUnCopywriter />} />
        <Route path="/blog/que-es-un-webinar" element={<QueEsUnWebinar />} />
        <Route path="/blog/que-es-la-planeacion-estrategica" element={<PlaneacionEstrategica />} />
        <Route path="/blog/como-hacer-un-estudio-de-mercado" element={<EstudioDeMercado />} />
        <Route path="/blog/como-hacer-una-encuesta-en-whatsapp" element={<EncuestaWhatsapp />} />
        <Route path="/blog/mensaje-cerrado-por-vacaciones-whatsapp-business" element={<CerradoPorVacaciones />} />
        <Route path="/blog/como-crear-un-pie-de-firma-profesional" element={<PieDeFirma />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

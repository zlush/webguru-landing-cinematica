import { Link } from 'react-router-dom'
import { Navbar, Footer, WhatsAppFab } from '../components/Chrome'
import { useSeo } from '../hooks/useSeo'

/* vercel.json rewrites every path to index.html, so an unknown URL still answers
   HTTP 200. Google reads that as a soft 404 and may index junk URLs, so this
   route at least serves a real "not found" page and marks itself noindex. */

export default function NotFound() {
  useSeo({
    title: 'Página no encontrada | WebGuru',
    description: 'La página que buscas no existe o cambió de dirección.',
    path: '/404',
    noindex: true,
  })

  return (
    <>
      <Navbar />
      <main className="px-6 md:px-12 pt-40 pb-28 min-h-[70vh] grid place-items-center">
        <div className="max-w-xl text-center">
          <span className="section-label mb-5 block">Error 404</span>
          <h1 className="font-sans font-extrabold tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.05 }}>
            Esta página no existe.
          </h1>
          <p className="text-wg-muted leading-relaxed mb-9">
            Puede que el enlace esté mal escrito o que la página haya cambiado de
            dirección. Desde el inicio puedes llegar a todo lo demás.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn btn-primary text-base px-8 py-4 justify-center">
              Volver al inicio
            </Link>
            <Link to="/#contacto" className="btn btn-outline text-base px-8 py-4 justify-center">
              Contacto
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

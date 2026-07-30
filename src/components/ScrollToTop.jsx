import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* React Router keeps the scroll position when the path changes, which lands you
   mid-page on a freshly opened document. Reset it — unless the URL carries a
   hash, where the browser's own anchor jump is what we want. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

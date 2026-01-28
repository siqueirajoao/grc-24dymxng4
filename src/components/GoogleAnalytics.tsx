import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export const GoogleAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Check if gtag exists to avoid errors if script blocked
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-YQY1RS6JYL', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  return null
}

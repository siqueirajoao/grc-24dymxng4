import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export const GoogleAnalytics = () => {
  const location = useLocation()
  const isFirstRun = useRef(true)

  useEffect(() => {
    // Skip the first execution as index.html already handles the initial page view
    // This prevents duplicate page_view events on the first load
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    // Check if gtag exists to avoid errors if script blocked
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-YQY1RS6JYL', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  return null
}

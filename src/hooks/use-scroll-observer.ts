import { useEffect, useState, useRef } from 'react'

interface ScrollObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean
}

export function useScrollObserver({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  triggerOnce = true,
}: ScrollObserverOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, triggerOnce])

  return { ref, isVisible }
}

import { useEffect, useState } from 'react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

export function CountUp({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className,
  decimals = 0,
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollObserver()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number | null = null

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        // Easing function: easeOutExpo
        const easeOut = (x: number): number => {
          return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
        }

        setCount(progress * end)

        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(step)
    }
  }, [isVisible, end, duration, hasAnimated])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

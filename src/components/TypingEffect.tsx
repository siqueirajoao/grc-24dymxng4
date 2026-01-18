import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TypingEffectProps {
  text: string
  speed?: number
  startDelay?: number
  className?: string
  cursorClassName?: string
}

export function TypingEffect({
  text,
  speed = 50,
  startDelay = 0,
  className,
  cursorClassName,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, startDelay)

    return () => clearTimeout(startTimeout)
  }, [startDelay])

  useEffect(() => {
    if (!started) return

    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, speed)

    return () => clearInterval(intervalId)
  }, [text, speed, started])

  return (
    <span className={cn('inline-block', className)}>
      {displayedText}
      <span
        className={cn(
          'animate-pulse inline-block w-[0.1em] h-[1em] bg-blue-500 ml-1 align-middle',
          cursorClassName,
          displayedText.length === text.length && 'opacity-0',
        )}
      />
    </span>
  )
}

import { useEffect, useRef } from 'react'

export function MouseFollower() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blob = blobRef.current
    if (!blob) return

    let animationFrameId: number

    // Initial position at center of screen
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const render = () => {
      // Smooth tracking with Lerp (0.08 factor creates a fluid, organic delay)
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08

      // Update Blob Position
      if (blob) {
        // Offset by 400px to center the 800px blob
        blob.style.transform = `translate3d(${currentX - 400}px, ${currentY - 400}px, 0)`
      }

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Smooth Royal Blue Glow Blob */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[100px] mix-blend-screen opacity-80 will-change-transform"
        style={{
          // Deep Royal Blue Gradient
          background: `radial-gradient(circle at center, 
            rgba(65, 105, 225, 0.45) 0%, 
            rgba(65, 105, 225, 0.25) 30%, 
            rgba(65, 105, 225, 0.05) 60%, 
            transparent 80%)`,
          transform: 'translate3d(-1000px, -1000px, 0)', // Initially off-screen
        }}
      />
    </div>
  )
}

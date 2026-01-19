import { useEffect, useRef } from 'react'

export function MouseFollower() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number
    let mouseX = -1000
    let mouseY = -1000

    const updatePosition = () => {
      if (blobRef.current) {
        // Center the 600px blob on the cursor
        const x = mouseX - 300
        const y = mouseY - 300
        blobRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
      animationFrameId = requestAnimationFrame(updatePosition)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <div
        ref={blobRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[80px] opacity-30 mix-blend-screen will-change-transform"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(100,149,237,0.5) 35%, rgba(59,130,246,0) 70%)',
          transform: 'translate3d(-1000px, -1000px, 0)',
        }}
      />
    </div>
  )
}

import { useEffect, useRef } from 'react'

export function MouseFollower() {
  const blobRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const blob = blobRef.current
    const canvas = canvasRef.current
    if (!blob || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let animationFrameId: number

    // Initial position
    let mouseX = width / 2
    let mouseY = height / 2
    let currentX = width / 2
    let currentY = height / 2

    // Particle system for glitter effect
    const particles: Particle[] = []
    const MAX_PARTICLES = 120 // Density of glitter

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      life: number
      maxLife: number
      opacity: number

      constructor(originX: number, originY: number) {
        // Spawn particles within the glow area (clustered near center)
        const angle = Math.random() * Math.PI * 2
        // Bias radius towards center for core glitter
        const radius = Math.random() * 250 * Math.pow(Math.random(), 2)

        this.x = originX + Math.cos(angle) * radius
        this.y = originY + Math.sin(angle) * radius

        // Subtle organic movement (floating dust)
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4

        this.size = Math.random() * 1.5 + 0.5 // Small distinct points
        this.maxLife = Math.random() * 40 + 20 // Short life for twinkling
        this.life = this.maxLife
        this.opacity = Math.random() * 0.6 + 0.4
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life--
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Fade out logic
        const lifeRatio = this.life / this.maxLife
        const currentOpacity = this.opacity * lifeRatio

        ctx.fillStyle = `rgba(230, 240, 255, ${currentOpacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const render = () => {
      // Smooth tracking (Lerp for premium feel)
      // 0.12 creates a nice delayed follow effect
      currentX += (mouseX - currentX) * 0.12
      currentY += (mouseY - currentY) * 0.12

      // Update Blob Position
      if (blob) {
        // Offset by 300 to center the 600px blob
        blob.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`
      }

      // Update Canvas
      ctx.clearRect(0, 0, width, height)

      // Spawn new particles near the current smooth position
      // Constant stream to maintain glitter density
      if (particles.length < MAX_PARTICLES) {
        const toAdd = 4
        for (let i = 0; i < toAdd; i++) {
          particles.push(new Particle(currentX, currentY))
        }
      }

      // Update & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.update()
        p.draw(ctx)
        if (p.life <= 0) {
          particles.splice(i, 1)
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Royal Blue Glow Gradient Blob */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[90px] opacity-60 mix-blend-screen will-change-transform"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(120, 160, 255, 0.9) 0%, 
            rgba(65, 105, 225, 0.6) 30%, 
            rgba(65, 105, 225, 0.1) 60%, 
            transparent 70%)`,
          transform: 'translate3d(-1000px, -1000px, 0)',
        }}
      />
      {/* Glitter/Sparkle Texture Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-90"
      />
    </div>
  )
}

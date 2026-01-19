import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'
import { Building2 } from 'lucide-react'

interface EcosystemGraphProps {
  activeModuleId: string | null
  onModuleSelect: (id: string) => void
}

export function EcosystemGraph({
  activeModuleId,
  onModuleSelect,
}: EcosystemGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [hoveredModuleId, setHoveredModuleId] = useState<string | null>(null)

  // Responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 640) {
        setScale(0.55)
      } else if (w < 1024) {
        setScale(0.75)
      } else {
        setScale(1) // Base scale for desktop
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Orbit Configuration
  // Distributing 9 modules across 3 orbits
  const orbits = [
    { radius: 170, duration: 45, reverse: false, moduleIndices: [0, 1, 2] },
    { radius: 280, duration: 70, reverse: true, moduleIndices: [3, 4, 5] },
    { radius: 390, duration: 95, reverse: false, moduleIndices: [6, 7, 8] },
  ]

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[550px] md:h-[750px] flex items-center justify-center select-none overflow-visible perspective-1000"
    >
      {/* Container for the Solar System, scaled */}
      <div
        className="relative flex items-center justify-center transition-transform duration-500 ease-out"
        style={{
          transform: `scale(${scale})`,
          width: '800px',
          height: '800px',
        }}
      >
        {/* Orbital Paths (Visual Lines) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {orbits.map((orbit, i) => (
            <div
              key={`orbit-line-${i}`}
              className="absolute rounded-full border border-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.05)]"
              style={{
                width: orbit.radius * 2,
                height: orbit.radius * 2,
              }}
            />
          ))}
        </div>

        {/* Central Hub (Sun) */}
        <div className="absolute z-10 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-32 h-32 bg-black rounded-full border border-blue-500/50 shadow-[0_0_60px_rgba(37,99,235,0.5)] z-20 group cursor-default transition-all duration-500 hover:scale-105 hover:shadow-[0_0_80px_rgba(37,99,235,0.7)]">
            {/* Animated Aura */}
            <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-pulse-glow" />
            <div className="absolute -inset-1 rounded-full border border-blue-500/20 animate-spin-slow" />
            <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-xl animate-pulse" />

            {/* Icon */}
            <div className="bg-gradient-to-tr from-blue-700 to-blue-500 p-3.5 rounded-xl shadow-lg shadow-blue-900/50 relative z-10">
              <Building2 className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Hub Label */}
          <div className="absolute top-full mt-4 flex flex-col items-center gap-1 z-20">
            <span className="text-white font-bold tracking-[0.2em] text-sm text-shadow-sm">
              LAWYN
            </span>
            <span className="text-blue-400 text-[10px] font-bold tracking-widest uppercase bg-blue-950/30 px-2 py-0.5 rounded-full border border-blue-500/20 backdrop-blur-sm">
              Regulatory Hub
            </span>
          </div>
        </div>

        {/* Modules (Planets) */}
        {orbits.map((orbit, orbitIndex) =>
          orbit.moduleIndices.map((modIndex, i) => {
            const module = modules[modIndex]
            if (!module) return null

            const itemCount = orbit.moduleIndices.length
            // Distribute evenly along the orbit
            const angleOffset = (360 / itemCount) * i
            // Calculate delay to position them at the correct angle initially
            // animation-delay is negative time.
            // Full circle is 'duration'. angle/360 * duration = time offset
            const delay = -(angleOffset / 360) * orbit.duration

            const isActive = activeModuleId === module.id
            const isHovered = hoveredModuleId === module.id
            const isPaused = isActive || isHovered

            return (
              <div
                key={module.id}
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                  width: orbit.radius * 2,
                  height: orbit.radius * 2,
                  marginLeft: -orbit.radius,
                  marginTop: -orbit.radius,
                  animation: `spin ${orbit.duration}s linear infinite`,
                  animationDirection: orbit.reverse ? 'reverse' : 'normal',
                  animationDelay: `${delay}s`,
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              >
                {/* The Planet Wrapper - Positioned at 12 o'clock (top center) of the ring */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-auto"
                  style={{
                    top: -24, // Offset by half height (approx) to center on line
                    // Counter-rotate to keep upright
                    animation: `spin ${orbit.duration}s linear infinite`,
                    animationDirection: orbit.reverse ? 'normal' : 'reverse',
                    animationDelay: `${delay}s`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                >
                  <div
                    className="group relative flex flex-col items-center gap-2 cursor-pointer"
                    onMouseEnter={() => setHoveredModuleId(module.id)}
                    onMouseLeave={() => setHoveredModuleId(null)}
                    onClick={() => onModuleSelect(module.id)}
                  >
                    {/* Module Bubble */}
                    <div
                      className={cn(
                        'relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border transition-all duration-300 z-30',
                        isActive
                          ? 'bg-blue-600 border-white shadow-[0_0_30px_rgba(37,99,235,0.6)] scale-110'
                          : isHovered
                            ? 'bg-zinc-900 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-110'
                            : 'bg-black/60 border-white/20 hover:border-blue-400/50 backdrop-blur-md',
                      )}
                    >
                      <module.icon
                        className={cn(
                          'w-5 h-5 md:w-6 md:h-6 transition-colors duration-300',
                          isActive || isHovered ? 'text-white' : module.color,
                        )}
                      />

                      {/* Ripple effect when active */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-20" />
                      )}
                    </div>

                    {/* Module Label */}
                    <div
                      className={cn(
                        'px-3 py-1 rounded-full border backdrop-blur-md transition-all duration-300 max-w-[150px] text-center',
                        isActive || isHovered
                          ? 'bg-blue-950/90 border-blue-500/50 translate-y-0 opacity-100'
                          : 'bg-black/40 border-white/10 translate-y-1 opacity-70 group-hover:opacity-100 group-hover:translate-y-0',
                      )}
                    >
                      <span
                        className={cn(
                          'text-[10px] md:text-xs font-bold tracking-wide uppercase whitespace-nowrap',
                          isActive || isHovered
                            ? 'text-white'
                            : 'text-gray-300',
                        )}
                      >
                        {module.title}
                      </span>
                    </div>

                    {/* Connecting Line to Center (Optional visual flair only visible on hover) */}
                    {isHovered && !isActive && (
                      <div
                        className="absolute top-1/2 left-1/2 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 -z-10"
                        style={{
                          height: orbit.radius,
                          transformOrigin: 'top center',
                          transform: `rotate(${orbit.reverse ? '180deg' : '0deg'})`, // Simplified, purely decorative
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          }),
        )}
      </div>
    </div>
  )
}

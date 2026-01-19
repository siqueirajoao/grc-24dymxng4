import { useState, useEffect, useRef, useMemo } from 'react'
import { Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'

interface OrbitConfig {
  id: number
  speed: number
  moduleIds: string[]
  direction: 1 | -1
}

export function EcosystemGraph() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const [hoveredOrbit, setHoveredOrbit] = useState<number | null>(null)
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  // Responsive radii state
  // Default (Desktop): 120, 200, 280
  const [radii, setRadii] = useState([120, 200, 280])
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      setIsSmallScreen(w < 768)
      if (w < 480) {
        setRadii([90, 160, 220]) // Small Mobile
      } else if (w < 768) {
        setRadii([100, 180, 250]) // Mobile/Tablet
      } else {
        setRadii([140, 220, 300]) // Desktop (Clean spacing)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Angle state (refs for performance to avoid re-renders on every frame)
  const anglesRef = useRef<{ [key: number]: number }>({
    1: 0,
    2: 2.5, // Offset to prevent initial line alignment looking too stiff
    3: 5,
  })

  // Configuration for the 3 orbits
  const orbits: OrbitConfig[] = useMemo(
    () => [
      {
        id: 1, // Governance Core
        speed: 0.0015,
        moduleIds: ['risks', 'controls', 'audit'],
        direction: 1,
      },
      {
        id: 2, // Regulation & Governance
        speed: 0.002,
        moduleIds: ['policies', 'regulatory', 'cadocs', 'lgpd'],
        direction: -1,
      },
      {
        id: 3, // Sustainability & Resilience
        speed: 0.0003, // Nearly static
        moduleIds: ['third-party', 'bia'],
        direction: 1,
      },
    ],
    [],
  )

  // Refs for direct DOM manipulation
  const moduleRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const coreLineRefs = useRef<{ [key: string]: SVGLineElement | null }>({})

  useEffect(() => {
    const animate = () => {
      // 1. Update Angles (Pause if orbit is hovered)
      orbits.forEach((orbit) => {
        if (hoveredOrbit !== orbit.id) {
          anglesRef.current[orbit.id] += orbit.speed * orbit.direction
        }
      })

      // 2. Calculate Positions & Update DOM
      orbits.forEach((orbit, orbitIndex) => {
        // Hide outermost orbit on small screens
        if (isSmallScreen && orbit.id === 3) return

        const radius = radii[orbitIndex]
        const { moduleIds, id: orbitId } = orbit
        const currentOrbitAngle = anglesRef.current[orbitId]

        moduleIds.forEach((modId, index) => {
          const element = moduleRefs.current[modId]
          if (!element) return

          // Even spacing to prevent overlap
          const spacing = (Math.PI * 2) / moduleIds.length
          const angle = currentOrbitAngle + spacing * index

          // Polar coordinates with elliptical projection for depth (3D effect)
          const tilt = 0.6 // Squish Y axis to simulate perspective
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle) * tilt

          // Calculate Depth factor based on Y position (sin(angle))
          const sin = Math.sin(angle)
          const zIndex = Math.floor((sin + 1) * 50) + 10 // range ~10-110

          // Visual Depth Effects
          const scale = 0.85 + ((sin + 1) / 2) * 0.3 // 0.85 to 1.15
          const opacity = 0.6 + ((sin + 1) / 2) * 0.4 // 0.6 to 1.0

          // Hover State
          const isHovered = hoveredModule === modId
          const finalScale = isHovered ? 1.2 : scale
          const finalOpacity = isHovered ? 1 : opacity
          const finalZIndex = isHovered ? 200 : zIndex

          // Update Module Style
          element.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${finalScale})`
          element.style.opacity = finalOpacity.toFixed(2)
          element.style.zIndex = finalZIndex.toString()

          // Update Core Line (from 0,0 to module)
          const coreLine = coreLineRefs.current[modId]
          if (coreLine) {
            coreLine.setAttribute('x2', x.toString())
            coreLine.setAttribute('y2', y.toString())
            coreLine.setAttribute(
              'opacity',
              Math.max(0.1, finalOpacity * 0.3).toFixed(2),
            )
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [orbits, radii, hoveredOrbit, hoveredModule, isSmallScreen])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center select-none perspective-1000 overflow-visible"
    >
      {/* SVG Layer for Lines - Behind Everything */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        <g className="translate-[50%_50%]">
          {/* Core Connections */}
          {modules.map((mod) =>
            !isSmallScreen || !['third-party', 'bia'].includes(mod.id) ? (
              <line
                key={`core-${mod.id}`}
                ref={(el) => {
                  coreLineRefs.current[mod.id] = el
                }}
                x1="0"
                y1="0"
                stroke="url(#core-gradient)"
                strokeWidth="1"
              />
            ) : null,
          )}
          <defs>
            <linearGradient
              id="core-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </g>
      </svg>

      {/* Orbit Paths (Background Rings) */}
      {orbits.map((orbit, index) => {
        if (isSmallScreen && orbit.id === 3) return null
        const radius = radii[index]
        return (
          <div
            key={orbit.id}
            className={cn(
              'absolute rounded-full border border-white/5 pointer-events-none transition-all duration-500',
              hoveredOrbit === orbit.id
                ? 'border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.15)]'
                : '',
            )}
            style={{
              width: radius * 2,
              height: radius * 2 * 0.6, // Match elliptical tilt
              transform: 'rotateX(0deg)',
            }}
          />
        )
      })}

      {/* Central Core */}
      <div className="absolute z-[150] flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-black rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-pulse-slow" />
        <div className="absolute inset-[-4px] rounded-full border border-blue-500/10" />
        <Building2 className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10" />
        <div className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase text-center mt-1 relative z-10">
          CORE
        </div>
      </div>

      {/* Modules */}
      {orbits.map((orbit) => {
        if (isSmallScreen && orbit.id === 3) return null

        return (
          <div
            key={orbit.id}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {orbit.moduleIds.map((modId) => {
              const module = modules.find((m) => m.id === modId)
              if (!module) return null

              const isHovered = hoveredModule === modId

              return (
                <div
                  key={modId}
                  ref={(el) => {
                    moduleRefs.current[modId] = el
                  }}
                  className="absolute w-auto h-auto cursor-pointer pointer-events-auto will-change-transform group"
                  onMouseEnter={() => {
                    setHoveredOrbit(orbit.id)
                    setHoveredModule(modId)
                  }}
                  onMouseLeave={() => {
                    setHoveredOrbit(null)
                    setHoveredModule(null)
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    {/* Module Icon Circle */}
                    <div
                      className={cn(
                        'w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border bg-black transition-all duration-300 relative',
                        module.borderColor,
                        isHovered
                          ? 'shadow-[0_0_20px_rgba(255,255,255,0.2)] border-white scale-110 bg-zinc-900'
                          : 'shadow-lg shadow-black/80',
                      )}
                    >
                      <module.icon
                        className={cn(
                          'w-5 h-5 md:w-6 md:h-6 transition-colors duration-300',
                          isHovered ? 'text-white' : module.color,
                        )}
                      />
                    </div>

                    {/* Module Titles */}
                    <div
                      className={cn(
                        'mt-3 flex flex-col items-center text-center transition-all duration-300 min-w-[120px]',
                        isHovered
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-90 translate-y-0',
                      )}
                    >
                      <span className="text-white font-bold text-xs md:text-sm tracking-tight leading-none mb-1 drop-shadow-md">
                        {module.title}
                      </span>
                      <span
                        className={cn(
                          'text-[8px] md:text-[9px] font-bold tracking-widest uppercase',
                          module.color,
                        )}
                      >
                        {module.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

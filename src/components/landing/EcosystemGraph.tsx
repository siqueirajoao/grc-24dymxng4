import { useState, useEffect, useRef, useMemo } from 'react'
import { Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'

interface EcosystemGraphProps {
  onModuleClick: (id: string) => void
}

interface OrbitConfig {
  id: number
  speed: number
  moduleIds: string[]
  direction: 1 | -1
}

export function EcosystemGraph({ onModuleClick }: EcosystemGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const [hoveredOrbit, setHoveredOrbit] = useState<number | null>(null)
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  // Responsive radii state
  const [radii, setRadii] = useState([130, 220, 310])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      setIsMobile(w < 640)
      if (w < 380) {
        setRadii([70, 110, 150]) // Small Mobile
      } else if (w < 768) {
        setRadii([90, 150, 210]) // Mobile
      } else {
        setRadii([140, 240, 340]) // Desktop
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Angle state (refs for performance to avoid re-renders on every frame)
  const anglesRef = useRef<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0,
  })

  // Configuration for the 3 orbits as per User Story
  const orbits: OrbitConfig[] = useMemo(
    () => [
      {
        id: 1,
        speed: 0.003,
        moduleIds: ['risks', 'controls', 'audit'],
        direction: 1,
      },
      {
        id: 2,
        speed: 0.002,
        moduleIds: ['policies', 'regulatory', 'cadocs', 'lgpd'],
        direction: -1,
      },
      {
        id: 3,
        speed: 0.001,
        moduleIds: ['third-party', 'bia'],
        direction: 1,
      },
    ],
    [],
  )

  // Refs for direct DOM manipulation
  const moduleRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const coreLineRefs = useRef<{ [key: string]: SVGLineElement | null }>({})
  const connectionLineRefs = useRef<{ [key: string]: SVGLineElement | null }>(
    {},
  )

  // Cache positions to update connection lines
  const positionsRef = useRef<{ [key: string]: { x: number; y: number } }>({})

  useEffect(() => {
    const animate = () => {
      // 1. Update Angles (Pause if hovered)
      if (!hoveredModule) {
        orbits.forEach((orbit) => {
          anglesRef.current[orbit.id] += orbit.speed * orbit.direction
        })
      }

      // 2. Calculate Positions & Update DOM
      orbits.forEach((orbit, orbitIndex) => {
        const radius = radii[orbitIndex]
        const { moduleIds, id: orbitId } = orbit
        const currentOrbitAngle = anglesRef.current[orbitId]

        moduleIds.forEach((modId, index) => {
          const element = moduleRefs.current[modId]
          if (!element) return

          // Even spacing
          const spacing = (Math.PI * 2) / moduleIds.length
          const angle = currentOrbitAngle + spacing * index

          // Polar coordinates with elliptical projection for depth (3D effect)
          const tilt = 0.4 // Squish Y axis to simulate perspective
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle) * tilt

          // Calculate Depth factor based on Y position (sin(angle))
          // We assume positive Y (down) is "near" and negative Y (up) is "far" in this perspective
          const sin = Math.sin(angle)
          const zIndex = Math.floor((sin + 1) * 50) + 10 // range ~10-110

          // Visual Depth Effects
          const scale = 0.7 + ((sin + 1) / 2) * 0.4 // 0.7 to 1.1
          const opacity = 0.4 + ((sin + 1) / 2) * 0.6 // 0.4 to 1.0

          // Update Module Style
          element.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
          element.style.opacity = opacity.toFixed(2)
          element.style.zIndex = zIndex.toString()

          // Store position for lines
          positionsRef.current[modId] = { x, y }

          // Update Core Line (from 0,0 to module)
          const coreLine = coreLineRefs.current[modId]
          if (coreLine) {
            coreLine.setAttribute('x2', x.toString())
            coreLine.setAttribute('y2', y.toString())
            // Fade line with module
            coreLine.setAttribute('opacity', (opacity * 0.3).toFixed(2))
          }
        })
      })

      // 3. Update Inter-Module Connection Lines
      modules.forEach((mod) => {
        if (!mod.relatedIds) return
        mod.relatedIds.forEach((relatedId) => {
          // Unique key for the line (alphabetical sort to avoid duplicates if bidirectional)
          const key = [mod.id, relatedId].sort().join('-')
          const line = connectionLineRefs.current[key]
          const pos1 = positionsRef.current[mod.id]
          const pos2 = positionsRef.current[relatedId]

          if (line && pos1 && pos2) {
            line.setAttribute('x1', pos1.x.toString())
            line.setAttribute('y1', pos1.y.toString())
            line.setAttribute('x2', pos2.x.toString())
            line.setAttribute('y2', pos2.y.toString())
            // Dynamic opacity based on distance or node opacity?
            // Use simplified constant opacity for stability
            line.setAttribute('stroke-opacity', '0.1')
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [orbits, radii, hoveredModule])

  // Generate unique connection keys for rendering SVG lines
  const uniqueConnections = useMemo(() => {
    const conns = new Set<string>()
    const result: { id: string; from: string; to: string }[] = []

    modules.forEach((mod) => {
      mod.relatedIds?.forEach((relId) => {
        // Only if both exist in current orbits (safety)
        const targetExists = modules.find((m) => m.id === relId)
        if (targetExists) {
          const key = [mod.id, relId].sort().join('-')
          if (!conns.has(key)) {
            conns.add(key)
            result.push({ id: key, from: mod.id, to: relId })
          }
        }
      })
    })
    return result
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[800px] flex items-center justify-center select-none perspective-1000"
    >
      {/* SVG Layer for Lines - Behind Everything */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        <g className="translate-[50%_50%]">
          {/* Core Connections */}
          {modules.map((mod) => (
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
          ))}
          {/* Module Interconnections */}
          {uniqueConnections.map((conn) => (
            <line
              key={conn.id}
              ref={(el) => {
                connectionLineRefs.current[conn.id] = el
              }}
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
          <defs>
            <linearGradient
              id="core-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </g>
      </svg>

      {/* Orbit Paths (Background Rings) */}
      {orbits.map((orbit, index) => {
        // Hide Orbit 3 on very small screens if needed, but scaling usually handles it
        const radius = radii[index]
        return (
          <div
            key={orbit.id}
            className={cn(
              'absolute rounded-full border border-white/5 pointer-events-none transition-all duration-500',
              hoveredOrbit === orbit.id ? 'border-white/20' : '',
            )}
            style={{
              width: radius * 2,
              height: radius * 2 * 0.4, // Match elliptical tilt
              transform: 'rotateX(0deg)', // If we wanted real 3D CSS
            }}
          />
        )
      })}

      {/* Central Core */}
      <div className="absolute z-[100] flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-black rounded-full border border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
        <div className="absolute inset-0 bg-blue-950/20 rounded-full animate-pulse" />
        <Building2 className="w-8 h-8 md:w-10 md:h-10 text-blue-500 relative z-10" />
        <div className="text-[10px] md:text-xs font-bold tracking-widest text-blue-400 uppercase text-center mt-2 relative z-10">
          Governança
        </div>
      </div>

      {/* Modules */}
      {orbits.map((orbit) => (
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
                className="absolute w-auto h-auto cursor-pointer pointer-events-auto will-change-transform"
                onMouseEnter={() => {
                  setHoveredOrbit(orbit.id)
                  setHoveredModule(modId)
                }}
                onMouseLeave={() => {
                  setHoveredOrbit(null)
                  setHoveredModule(null)
                }}
                onClick={() => onModuleClick(modId)}
              >
                {/* Module Node */}
                <div
                  className={cn(
                    'flex flex-col items-center justify-center transition-all duration-300',
                    isHovered ? 'scale-110' : '',
                  )}
                >
                  <div
                    className={cn(
                      'w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center border bg-black transition-all duration-300 relative',
                      module.borderColor,
                      module.bg,
                      isHovered
                        ? 'shadow-[0_0_30px_rgba(255,255,255,0.2)] border-white'
                        : module.glow,
                    )}
                  >
                    <module.icon
                      className={cn(
                        'w-5 h-5 md:w-7 md:h-7 transition-colors',
                        isHovered ? 'text-white' : module.color,
                      )}
                    />
                  </div>

                  {/* Label - Only show for inner orbits or desktop to avoid clutter on mobile */}
                  {(!isMobile || orbit.id < 3) && (
                    <div
                      className={cn(
                        'mt-2 px-2 py-0.5 bg-black/80 rounded-full border border-white/10 backdrop-blur-md transition-opacity duration-300',
                        isHovered
                          ? 'opacity-100 border-white/40'
                          : 'opacity-70',
                      )}
                    >
                      <span className="text-[9px] md:text-[10px] font-bold text-gray-300 whitespace-nowrap block">
                        {module.title}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

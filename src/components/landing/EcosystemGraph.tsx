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

  // Responsive radii state
  const [radii, setRadii] = useState([130, 220, 310])

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 380) {
        setRadii([65, 105, 145]) // Small Mobile
      } else if (w < 768) {
        setRadii([80, 135, 190]) // Mobile
      } else {
        setRadii([130, 220, 310]) // Desktop
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

  // Configuration for the 3 orbits
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

  // Refs for module elements to update styles directly
  const moduleRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const animate = () => {
      // Update angles
      orbits.forEach((orbit) => {
        if (hoveredOrbit !== orbit.id) {
          anglesRef.current[orbit.id] += orbit.speed * orbit.direction
        }
      })

      // Update positions
      orbits.forEach((orbit, orbitIndex) => {
        const radius = radii[orbitIndex]
        const { moduleIds, id: orbitId } = orbit
        const currentOrbitAngle = anglesRef.current[orbitId]

        moduleIds.forEach((modId, index) => {
          const element = moduleRefs.current[modId]
          if (!element) return

          // Calculate angle for this specific module
          // Evenly spaced: 2PI / count * index
          const spacing = (Math.PI * 2) / moduleIds.length
          const angle = currentOrbitAngle + spacing * index

          // Polar coordinates
          // x = r * cos(theta)
          // y = r * sin(theta)
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)

          // 3D Depth Simulation
          // "Front" is Y > 0 (Bottom of screen in this context), "Back" is Y < 0
          // We use sin(angle) which is Y normalized. 1 = Front, -1 = Back.
          const sin = Math.sin(angle) // -1 to 1

          const scale = 0.85 + sin * 0.15 // 0.7 to 1.0
          const opacity = 0.5 + ((sin + 1) / 2) * 0.5 // 0.5 to 1.0

          // Z-Index:
          // Base z-index for orbit to stack them correctly? No, depth is purely Y-based.
          // Items "lower" on screen (Front) should overlap items "higher" (Back).
          // Standard painter's algorithm: sort by depth.
          // CSS z-index is integer.
          // We map Y (-R to +R) to Z-index.
          // Normalize Y/sin to roughly 0-100.
          const zIndex = Math.floor((sin + 1) * 50) + 10

          // Apply styles
          element.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
          element.style.opacity = opacity.toFixed(2)
          element.style.zIndex = zIndex.toString()
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [orbits, radii, hoveredOrbit])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[800px] flex items-center justify-center overflow-hidden select-none"
    >
      {/* Central Core */}
      <div className="absolute z-[1000] flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-black rounded-full border border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] backdrop-blur-sm z-50">
        <Building2 className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mb-2" />
        <div className="text-[10px] md:text-xs font-bold tracking-widest text-blue-400 uppercase text-center">
          Governança
        </div>
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping opacity-20 pointer-events-none" />
      </div>

      {/* Orbit Rings (Visual Only) */}
      {orbits.map((orbit, index) => {
        const radius = radii[index]
        // Hide outermost orbit on very small screens if it doesn't fit
        if (orbit.id === 3 && radius * 2 > window.innerWidth) return null

        return (
          <div
            key={orbit.id}
            className={cn(
              'absolute rounded-full border border-white/5 pointer-events-none transition-all duration-500',
              hoveredOrbit === orbit.id ? 'border-white/10' : '',
            )}
            style={{
              width: radius * 2,
              height: radius * 2,
            }}
          />
        )
      })}

      {/* Modules */}
      {orbits.map((orbit) => (
        <div
          key={orbit.id}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {orbit.moduleIds.map((modId) => {
            const module = modules.find((m) => m.id === modId)
            if (!module) return null

            return (
              <div
                key={modId}
                ref={(el) => {
                  moduleRefs.current[modId] = el
                }}
                className="absolute w-auto h-auto cursor-pointer pointer-events-auto group will-change-transform"
                onMouseEnter={() => setHoveredOrbit(orbit.id)}
                onMouseLeave={() => setHoveredOrbit(null)}
                onClick={() => onModuleClick(modId)}
              >
                {/* Module Node */}
                <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110">
                  <div
                    className={cn(
                      'w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border bg-black shadow-lg transition-colors duration-300',
                      module.borderColor,
                      'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white',
                    )}
                  >
                    <module.icon
                      className={cn('w-6 h-6 md:w-8 md:h-8', module.color)}
                    />
                  </div>

                  {/* Label Badge */}
                  <div className="mt-2 md:mt-3 px-2 md:px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-center shadow-xl">
                    <span
                      className={cn(
                        'text-[10px] md:text-xs font-bold whitespace-nowrap text-gray-200 block',
                      )}
                    >
                      {module.title}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ))}

      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black pointer-events-none z-[2000]" />
    </div>
  )
}

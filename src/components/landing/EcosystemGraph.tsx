import { useState, useEffect, useRef, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'

interface OrbitConfig {
  id: number
  speed: number
  moduleIds: string[]
  direction: 1 | -1
}

interface EcosystemGraphProps {
  activeModuleId: string
  onModuleSelect: (id: string) => void
}

export function EcosystemGraph({
  activeModuleId,
  onModuleSelect,
}: EcosystemGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  // Scale Factors
  const [scale, setScale] = useState(0.85)
  // Adjusted radii to accommodate larger icons and prevent overlap
  const [radii, setRadii] = useState([130, 210, 290])

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 768) {
        setScale(0.75) // Mobile Scale
        // Increased mobile radii to prevent core overlap with larger icons
        setRadii([95, 160, 225])
      } else {
        setScale(0.85) // Desktop Scale
        setRadii([130, 210, 290])
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Store angles per module for independent movement
  const moduleAnglesRef = useRef<{ [key: string]: number }>({})

  // Configuration for Orbits
  const orbits: OrbitConfig[] = useMemo(
    () => [
      {
        id: 1, // Core
        speed: 0.001,
        moduleIds: ['risks', 'controls', 'audit', 'policies'],
        direction: 1,
      },
      {
        id: 2, // Mid
        speed: 0.0015,
        moduleIds: ['regulatory', 'cadocs', 'lgpd'],
        direction: -1,
      },
      {
        id: 3, // Outer
        speed: 0.0005,
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
      // 1. Update Angles & Position Modules
      orbits.forEach((orbit, orbitIndex) => {
        const radius = radii[orbitIndex] * scale
        const { moduleIds, id: orbitId, speed, direction } = orbit

        // Base spacing for initialization
        const spacing = (Math.PI * 2) / moduleIds.length
        // Initial phase offset based on orbit ID
        const startPhase = { 1: 0, 2: 1.5, 3: 3.0 }[orbitId] || 0

        moduleIds.forEach((modId, index) => {
          // Initialize angle if needed
          if (typeof moduleAnglesRef.current[modId] === 'undefined') {
            moduleAnglesRef.current[modId] = startPhase + spacing * index
          }

          // Check if we should pause this specific module
          // Pauses if module is hovered OR selected (active)
          const isPaused = modId === hoveredModule || modId === activeModuleId

          // Update angle if not paused
          if (!isPaused) {
            moduleAnglesRef.current[modId] += speed * direction
          }

          // Get current angle
          const angle = moduleAnglesRef.current[modId]
          const element = moduleRefs.current[modId]
          if (!element) return

          // Polar to Cartesian with tilt
          const tilt = 0.6
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle) * tilt

          // Depth calculations
          const sin = Math.sin(angle)
          const zIndex = Math.floor((sin + 1) * 50) + 10

          // Visual Scale based on Depth and Hover/Active
          const depthScale = 0.85 + ((sin + 1) / 2) * 0.3
          const isActive = modId === activeModuleId
          const isHovered = modId === hoveredModule

          let finalScale = depthScale
          if (isActive) finalScale = 1.3
          if (isHovered) finalScale = 1.2

          // Opacity
          let opacity = 0.5 + ((sin + 1) / 2) * 0.5
          if (isActive || isHovered) opacity = 1

          // Apply Styles
          element.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${finalScale})`
          element.style.opacity = opacity.toFixed(2)
          element.style.zIndex = (
            isActive || isHovered ? 200 : zIndex
          ).toString()

          // Update Lines
          const coreLine = coreLineRefs.current[modId]
          if (coreLine) {
            coreLine.setAttribute('x2', x.toString())
            coreLine.setAttribute('y2', y.toString())
            coreLine.setAttribute(
              'opacity',
              Math.max(0.1, opacity * 0.3).toFixed(2),
            )
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [orbits, radii, scale, hoveredModule, activeModuleId])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center select-none perspective-1000 overflow-visible"
    >
      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        <g className="translate-[50%_50%]">
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
          <defs>
            <linearGradient
              id="core-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </g>
      </svg>

      {/* Orbit Rings */}
      {orbits.map((orbit, index) => {
        const radius = radii[index] * scale
        return (
          <div
            key={orbit.id}
            className="absolute rounded-full border border-white/5 pointer-events-none transition-all duration-500"
            style={{
              width: radius * 2,
              height: radius * 2 * 0.6,
              boxShadow:
                orbit.id === 1 ? '0 0 40px rgba(59, 130, 246, 0.05)' : 'none',
            }}
          />
        )
      })}

      {/* Center Core Branding */}
      <div
        className="absolute z-[50] flex flex-col items-center justify-center bg-black rounded-full border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)] backdrop-blur-sm"
        style={{
          width: 100 * scale,
          height: 100 * scale,
        }}
      >
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse-slow" />
        <div className="absolute inset-[-1px] rounded-full border border-blue-500/10" />

        {/* L Monogram */}
        <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-white font-bold text-lg mb-1 shadow-lg shadow-blue-900/50">
          L
        </div>

        {/* Brand Name */}
        <div className="text-[10px] font-bold tracking-[0.2em] text-white uppercase text-center relative z-10">
          LAWYN
        </div>
        {/* Micro Subtitle */}
        <div className="text-[6px] font-medium text-blue-400/80 uppercase tracking-wider text-center mt-0.5">
          REGULATORY OS
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

            const isActive = activeModuleId === modId
            const isHovered = hoveredModule === modId

            return (
              <div
                key={modId}
                ref={(el) => {
                  moduleRefs.current[modId] = el
                }}
                className="absolute w-auto h-auto cursor-pointer pointer-events-auto will-change-transform group"
                onClick={() => onModuleSelect(modId)}
                onMouseEnter={() => setHoveredModule(modId)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <div className="flex flex-col items-center justify-center">
                  {/* Module Icon Circle */}
                  <div
                    className={cn(
                      'rounded-full flex items-center justify-center border bg-black transition-all duration-300 relative',
                      isActive
                        ? 'border-white shadow-[0_0_30px_rgba(59,130,246,0.5)] bg-zinc-900'
                        : module.borderColor,
                      isHovered && !isActive
                        ? 'border-white scale-105 bg-zinc-900'
                        : 'shadow-lg shadow-black/80',
                    )}
                    style={{
                      // Increased size for visibility (was 48)
                      width: 64 * scale,
                      height: 64 * scale,
                    }}
                  >
                    <module.icon
                      className={cn(
                        'transition-colors duration-300',
                        isActive || isHovered ? 'text-white' : module.color,
                      )}
                      style={{
                        // Significantly larger icon (was 20)
                        width: 32 * scale,
                        height: 32 * scale,
                      }}
                    />
                  </div>

                  {/* Module Label - Upright & Responsive */}
                  <div
                    className={cn(
                      'absolute top-full mt-3 flex flex-col items-center text-center transition-all duration-300 min-w-[100px]',
                      isActive || isHovered
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-60 translate-y-1 scale-90',
                    )}
                  >
                    <span className="text-white font-bold text-[10px] md:text-xs tracking-tight leading-none mb-1 drop-shadow-md whitespace-nowrap bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                      {module.title}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

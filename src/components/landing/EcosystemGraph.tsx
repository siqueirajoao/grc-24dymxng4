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
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)
  const [radius, setRadius] = useState(260)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 640) {
        setRadius(130)
        setScale(0.7)
      } else if (w < 1024) {
        setRadius(200)
        setScale(0.85)
      } else {
        setRadius(280)
        setScale(1)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center select-none overflow-visible"
    >
      {/* Background Decorative Rings (The Circuit Base) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="rounded-full border border-blue-900/20"
          style={{ width: radius * 2.8, height: radius * 2.8 }}
        />
        <div
          className="absolute rounded-full border border-dashed border-blue-900/30 animate-spin-slow"
          style={{ width: radius * 2.2, height: radius * 2.2 }}
        />
        <div
          className="absolute rounded-full border border-blue-900/10"
          style={{ width: radius * 1.5, height: radius * 1.5 }}
        />
      </div>

      {/* Connection Lines (Circuit Traces) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full overflow-visible"
          style={{ transform: 'rotate(0deg)' }}
        >
          <g className="translate-[50%_50%]">
            {modules.map((mod, index) => {
              const angle = (index / modules.length) * 2 * Math.PI - Math.PI / 2
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              const isActive = activeModuleId === mod.id
              const isHovered = hoveredModule === mod.id
              const isHighlighted = isActive || isHovered

              return (
                <g key={`connection-${mod.id}`}>
                  {/* Base Line */}
                  <line
                    x1="0"
                    y1="0"
                    x2={x}
                    y2={y}
                    className={cn(
                      'transition-all duration-500',
                      isHighlighted
                        ? 'stroke-blue-400 stroke-[2px] opacity-100'
                        : 'stroke-blue-800/30 stroke-[1px] opacity-50',
                    )}
                  />

                  {/* Active Data Flow Pulse (Animated Circle) */}
                  {(isHighlighted || !activeModuleId) && (
                    <circle r="3" fill="#60A5FA">
                      <animateMotion
                        dur={isHighlighted ? '1.5s' : '4s'}
                        repeatCount="indefinite"
                        path={`M 0 0 L ${x} ${y}`}
                        keyPoints="0;1"
                        keyTimes="0;1"
                      />
                    </circle>
                  )}

                  {/* Node Connector Dot at the hub */}
                  <circle
                    cx="0"
                    cy="0"
                    r="4"
                    className="fill-blue-950 stroke-blue-500 stroke-1"
                  />
                  {/* Node Connector Dot at the module */}
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    className={cn(
                      'transition-colors duration-300',
                      isHighlighted
                        ? 'fill-blue-400 stroke-white'
                        : 'fill-black stroke-blue-800',
                    )}
                  />
                </g>
              )
            })}
          </g>
        </svg>
      </div>

      {/* Central Hub (Lawyn Core) */}
      <div
        className="absolute z-20 flex flex-col items-center justify-center bg-black rounded-full border border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.3)] backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-blue-400/50 group"
        style={{ width: 120 * scale, height: 120 * scale }}
      >
        <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse-glow" />
        <div className="absolute -inset-2 rounded-full border border-blue-500/10 animate-spin-slow" />

        {/* Logo/Icon */}
        <div className="bg-gradient-to-tr from-blue-700 to-blue-500 p-3 rounded-xl shadow-lg shadow-blue-900/50 mb-1 relative z-10">
          <Building2
            className="text-white"
            style={{ width: 32 * scale, height: 32 * scale }}
          />
        </div>

        {/* Brand Name */}
        <div className="text-white font-bold tracking-widest text-[10px] md:text-xs mt-1">
          LAWYN
        </div>
        <div className="text-blue-400 text-[8px] font-medium tracking-wider uppercase">
          Regulatory Hub
        </div>
      </div>

      {/* Module Nodes */}
      {modules.map((mod, index) => {
        const angle = (index / modules.length) * 2 * Math.PI - Math.PI / 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        const isActive = activeModuleId === mod.id
        const isHovered = hoveredModule === mod.id

        return (
          <div
            key={mod.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <div
              className="group cursor-pointer flex flex-col items-center justify-center relative"
              onClick={() => onModuleSelect(mod.id)}
              onMouseEnter={() => setHoveredModule(mod.id)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              {/* Icon Circle */}
              <div
                className={cn(
                  'rounded-full flex items-center justify-center border transition-all duration-300 relative bg-black z-10',
                  isActive
                    ? 'border-white shadow-[0_0_30px_rgba(59,130,246,0.6)] scale-110'
                    : isHovered
                      ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-110'
                      : 'border-white/10 hover:border-white/30',
                )}
                style={{
                  width: 64 * scale,
                  height: 64 * scale,
                }}
              >
                <mod.icon
                  className={cn(
                    'transition-all duration-300',
                    isActive || isHovered ? 'text-white' : mod.color,
                  )}
                  style={{
                    width: 28 * scale,
                    height: 28 * scale,
                  }}
                />
              </div>

              {/* Label */}
              <div
                className={cn(
                  'absolute top-full mt-3 px-3 py-1 rounded-full border backdrop-blur-md transition-all duration-300 whitespace-nowrap pointer-events-none z-20',
                  isActive || isHovered
                    ? 'bg-blue-950/80 border-blue-500/50 opacity-100 translate-y-0'
                    : 'bg-black/50 border-white/5 opacity-70 translate-y-[-5px]',
                )}
              >
                <span
                  className={cn(
                    'text-[10px] md:text-xs font-bold tracking-wide uppercase',
                    isActive || isHovered ? 'text-white' : 'text-gray-400',
                  )}
                >
                  {mod.title}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

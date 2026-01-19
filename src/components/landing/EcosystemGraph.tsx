import { useMemo, useState } from 'react'
import { Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'

interface EcosystemGraphProps {
  activeId: string
  onSelect: (id: string) => void
}

export function EcosystemGraph({ activeId, onSelect }: EcosystemGraphProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Configuration for layout
  const radius = 42 // Percentage 0-50
  const center = 50

  // Calculate node positions securely to prevent overlap
  const nodes = useMemo(() => {
    return modules.map((module, index) => {
      // Offset angle to start from top (-90 degrees)
      const angleDeg = (index * 360) / modules.length - 90
      const angleRad = (angleDeg * Math.PI) / 180

      const x = center + radius * Math.cos(angleRad)
      const y = center + radius * Math.sin(angleRad)

      return {
        ...module,
        x,
        y,
        angleDeg,
      }
    })
  }, [])

  const currentFocusId = hoveredId || activeId

  // Determine label position based on angle to push them outwards
  const getLabelPosition = (angle: number) => {
    // Normalize angle to 0-360 positive
    const normalized = (angle + 360) % 360

    if (normalized >= 300 || normalized <= 60)
      return 'left-8 md:left-10 origin-left' // Right side
    if (normalized >= 120 && normalized <= 240)
      return 'right-8 md:right-10 origin-right' // Left side
    if (normalized > 60 && normalized < 120)
      return 'top-8 md:top-10 -translate-x-1/2 origin-top' // Bottom
    return 'bottom-8 md:bottom-10 -translate-x-1/2 origin-bottom' // Top
  }

  // Get alignment classes for text inside the label container
  const getLabelAlignment = (angle: number) => {
    const normalized = (angle + 360) % 360
    if (normalized >= 300 || normalized <= 60) return 'items-start text-left'
    if (normalized >= 120 && normalized <= 240) return 'items-end text-right'
    return 'items-center text-center'
  }

  return (
    <div className="relative w-full h-full select-none">
      {/* Background Rings - Static */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60%] h-[60%] rounded-full border border-white/5" />
        <div className="w-[84%] h-[84%] rounded-full border border-white/5 border-dashed opacity-50" />
      </div>

      {/* SVG Layer for Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
        <defs>
          <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.0)" />
          </linearGradient>
          <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Inter-module connections */}
        {nodes.map((node) => {
          return node.relatedIds.map((targetId) => {
            const targetNode = nodes.find((n) => n.id === targetId)
            if (!targetNode || node.id > targetId) return null

            const isRelatedActive =
              (currentFocusId === node.id &&
                node.relatedIds.includes(targetId)) ||
              (currentFocusId === targetId &&
                targetNode.relatedIds.includes(node.id))

            // Use straight lines for clean look, crossing behind center
            return (
              <g key={`${node.id}-${targetId}`}>
                <line
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  stroke={
                    isRelatedActive
                      ? 'url(#lineGradient)'
                      : 'rgba(255,255,255,0.03)'
                  }
                  strokeWidth={isRelatedActive ? '1.5' : '1'}
                  className={cn(
                    'transition-all duration-500',
                    isRelatedActive ? 'opacity-100' : 'opacity-0', // Hide non-active lines to reduce clutter
                  )}
                />
                {/* Data flow particle for active connections */}
                {isRelatedActive && (
                  <circle r="1.5" fill="#60A5FA" filter="url(#glow-line)">
                    <animateMotion
                      dur="1.5s"
                      repeatCount="indefinite"
                      path={`M ${node.x * 5} ${node.y * 5} L ${targetNode.x * 5} ${targetNode.y * 5}`} // Assuming 500px coordinate system scaling for SVG ease
                      // Actually for % coordinates we can't use path directly in some browsers easily without viewBox match
                      // So we use standard calcMode linear
                    >
                      <mpath />
                    </animateMotion>
                    {/* SVG animateMotion with percentage coords is tricky. Let's use CSS on the line or just simple JS. 
                        Actually simpler: Draw a second path on top with stroke-dasharray animation */}
                  </circle>
                )}
              </g>
            )
          })
        })}

        {/* 2. Center connections (Star Topology) */}
        {nodes.map((node) => {
          const isActive = node.id === currentFocusId
          const isRelated = nodes
            .find((n) => n.id === currentFocusId)
            ?.relatedIds.includes(node.id)
          const isHighlight = isActive || (currentFocusId && isRelated)

          return (
            <line
              key={`center-${node.id}`}
              x1="50%"
              y1="50%"
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke={
                isHighlight
                  ? 'rgba(96, 165, 250, 0.4)'
                  : 'rgba(255,255,255,0.05)'
              }
              strokeWidth={isHighlight ? '1.5' : '1'}
              className={cn(
                'transition-all duration-500',
                isHighlight ? 'opacity-100' : 'opacity-30',
              )}
            />
          )
        })}
      </svg>

      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative flex items-center justify-center">
          {/* Pulsing Core Effects */}
          <div className="absolute w-32 h-32 bg-blue-600/10 blur-2xl rounded-full animate-pulse-glow" />
          <div className="absolute w-24 h-24 border border-blue-500/20 rounded-full animate-spin-slow" />
          <div className="absolute w-20 h-20 border border-blue-400/10 rounded-full animate-reverse-spin-slow" />

          {/* Core Content */}
          <div className="relative w-16 h-16 bg-black border border-white/10 rounded-full flex flex-col items-center justify-center shadow-2xl z-10">
            <Building2 className="w-5 h-5 text-blue-500 mb-0.5" />
            <span className="text-[8px] font-bold text-white tracking-widest">
              CORE
            </span>
          </div>
        </div>
      </div>

      {/* Module Nodes */}
      {nodes.map((node) => {
        const isActive = node.id === activeId
        const isHovered = node.id === hoveredId
        const isRelated = nodes
          .find((n) => n.id === currentFocusId)
          ?.relatedIds.includes(node.id)

        // Visual states
        const isFocus = isActive || isHovered
        const isDimmed = currentFocusId && !isFocus && !isRelated

        return (
          <button
            key={node.id}
            onClick={() => onSelect(node.id)}
            onMouseEnter={() => setHoveredId(node.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={cn(
              'absolute z-30 flex items-center justify-center outline-none transition-all duration-500 group',
              isDimmed
                ? 'opacity-30 scale-90 blur-[0.5px]'
                : 'opacity-100 scale-100',
            )}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Icon Circle */}
            <div
              className={cn(
                'relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 border backdrop-blur-md overflow-hidden',
                isFocus
                  ? `bg-zinc-900 border-${node.color.split('-')[1]}-500/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] scale-110`
                  : 'bg-black border-white/10 hover:border-white/30 hover:bg-zinc-900',
              )}
            >
              {/* Internal Glow on Active */}
              <div
                className={cn(
                  'absolute inset-0 opacity-0 transition-opacity duration-300',
                  isFocus &&
                    `bg-gradient-to-tr from-transparent to-${node.color.split('-')[1]}-500/20 opacity-100`,
                )}
              />

              <node.icon
                className={cn(
                  'w-5 h-5 md:w-6 md:h-6 transition-all duration-300 relative z-10',
                  isFocus
                    ? node.color
                    : 'text-zinc-500 group-hover:text-zinc-300',
                )}
              />
            </div>

            {/* Floating Label */}
            <div
              className={cn(
                'absolute flex flex-col min-w-[120px] pointer-events-none transition-all duration-300 z-40',
                getLabelPosition(node.angleDeg),
                getLabelAlignment(node.angleDeg),
                isFocus
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-2 scale-95',
              )}
            >
              <span className="text-xs md:text-sm font-bold text-white whitespace-nowrap drop-shadow-md">
                {node.title}
              </span>
              <span
                className={cn(
                  'text-[10px] uppercase tracking-wider font-medium mt-0.5',
                  node.color,
                )}
              >
                {node.subtitle}
              </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}

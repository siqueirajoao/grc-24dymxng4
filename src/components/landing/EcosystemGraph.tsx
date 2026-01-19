import { useMemo, useState } from 'react'
import { Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'
import { useIsMobile } from '@/hooks/use-mobile'

interface EcosystemGraphProps {
  activeId: string
  onSelect: (id: string) => void
}

export function EcosystemGraph({ activeId, onSelect }: EcosystemGraphProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const isMobile = useIsMobile()

  // Layout Configuration
  // Desktop: Wider radius for labels. Mobile: Tighter radius, labels only on active.
  const radius = isMobile ? 36 : 40
  const center = 50

  // Fixed angular positions for 6 modules to ensure symmetry
  // -90 is top (12 o'clock). 60 degree increments.
  const nodeAngles = [-90, -30, 30, 90, 150, 210]

  const nodes = useMemo(() => {
    return modules.map((module, index) => {
      // Use fixed angles if available, otherwise calculate
      const angleDeg = nodeAngles[index] ?? (index * 360) / modules.length - 90
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
  }, [radius])

  const currentFocusId = hoveredId || activeId

  // Determine label styles based on angle
  const getLabelStyles = (angle: number) => {
    // Normalize angle to 0-360
    const norm = (angle + 360) % 360

    // Top (around 270/-90)
    if (norm > 240 && norm < 300) {
      return {
        container:
          'bottom-full mb-4 left-1/2 -translate-x-1/2 items-center text-center origin-bottom',
        animation: 'slide-up',
      }
    }
    // Bottom (around 90)
    if (norm > 60 && norm < 120) {
      return {
        container:
          'top-full mt-4 left-1/2 -translate-x-1/2 items-center text-center origin-top',
        animation: 'slide-down',
      }
    }
    // Right Side (around 0)
    if (norm >= 300 || norm <= 60) {
      return {
        container:
          'left-full ml-4 top-1/2 -translate-y-1/2 items-start text-left origin-left',
        animation: 'slide-right',
      }
    }
    // Left Side (around 180)
    return {
      container:
        'right-full mr-4 top-1/2 -translate-y-1/2 items-end text-right origin-right',
      animation: 'slide-left',
    }
  }

  return (
    <div className="relative w-full h-full select-none aspect-square">
      {/* Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Ring */}
        <div className="w-[85%] h-[85%] rounded-full border border-white/5 opacity-50" />
        {/* Inner Ring */}
        <div className="w-[55%] h-[55%] rounded-full border border-white/5 border-dashed opacity-30" />
        {/* Core Glow */}
        <div className="absolute w-[30%] h-[30%] bg-blue-900/10 blur-3xl rounded-full animate-pulse-slow" />
      </div>

      {/* Connection Lines Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
        <defs>
          <linearGradient
            id="activeLineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
          </linearGradient>
        </defs>

        {/* Center to Node Connections */}
        {nodes.map((node) => {
          const isActive = node.id === currentFocusId
          const isRelated = nodes
            .find((n) => n.id === currentFocusId)
            ?.relatedIds.includes(node.id)
          const isHighlight = isActive || (currentFocusId && isRelated)

          return (
            <g key={`connection-${node.id}`}>
              <line
                x1="50%"
                y1="50%"
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke={
                  isHighlight
                    ? 'url(#activeLineGradient)'
                    : 'rgba(255, 255, 255, 0.05)'
                }
                strokeWidth={isHighlight ? '1.5' : '1'}
                className={cn(
                  'transition-all duration-500',
                  isHighlight ? 'opacity-100' : 'opacity-20',
                )}
              />
              {isActive && (
                <circle
                  cx="50%"
                  cy="50%"
                  r="2"
                  fill="#60A5FA"
                  className="animate-ping"
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* Central Core Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative group cursor-default">
          <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full group-hover:bg-blue-600/30 transition-all duration-500" />
          <div className="relative w-16 h-16 md:w-20 md:h-20 bg-black border border-white/10 rounded-full flex flex-col items-center justify-center shadow-2xl z-10 transition-transform duration-500 hover:scale-105 hover:border-blue-500/50">
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-1" />
            <span className="text-[9px] md:text-[10px] font-bold text-white tracking-widest">
              CORE
            </span>
          </div>
          {/* Orbit rings around core */}
          <div className="absolute inset-[-10px] border border-blue-500/10 rounded-full animate-spin-slow pointer-events-none" />
          <div className="absolute inset-[-6px] border border-blue-400/10 rounded-full animate-reverse-spin-slow pointer-events-none" />
        </div>
      </div>

      {/* Module Nodes */}
      {nodes.map((node) => {
        const isActive = node.id === activeId
        const isHovered = node.id === hoveredId
        const isFocus = isActive || isHovered

        // Label logic
        const labelStyle = getLabelStyles(node.angleDeg)
        // On mobile, show label only if active/hovered to prevent clutter
        const showLabel = isMobile ? isFocus : true

        // Dim logic: if something is focused, dim others unless related
        const isRelated = nodes
          .find((n) => n.id === currentFocusId)
          ?.relatedIds.includes(node.id)
        const isDimmed = currentFocusId && !isFocus && !isRelated

        return (
          <button
            key={node.id}
            onClick={() => onSelect(node.id)}
            onMouseEnter={() => setHoveredId(node.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={cn(
              'absolute z-30 group outline-none',
              isDimmed
                ? 'opacity-40 scale-95 blur-[0.5px]'
                : 'opacity-100 scale-100',
            )}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)', // Center the button on the coordinate
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Icon Container */}
            <div
              className={cn(
                'relative flex items-center justify-center rounded-full transition-all duration-300 border backdrop-blur-md',
                isFocus
                  ? `w-14 h-14 md:w-16 md:h-16 bg-zinc-950 border-${node.color.split('-')[1]}-500 shadow-[0_0_30px_rgba(0,0,0,0.6)] scale-110`
                  : 'w-12 h-12 md:w-14 md:h-14 bg-black border-white/10 hover:border-white/30 hover:bg-zinc-900',
              )}
            >
              {/* Inner Glow for Active State */}
              <div
                className={cn(
                  'absolute inset-0 rounded-full opacity-0 transition-opacity duration-500',
                  isFocus &&
                    `opacity-100 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-${node.color.split('-')[1]}-500/20 to-transparent`,
                )}
              />

              <node.icon
                className={cn(
                  'relative z-10 transition-all duration-300',
                  isFocus
                    ? `w-6 h-6 md:w-7 md:h-7 ${node.color}`
                    : 'w-5 h-5 md:w-6 md:h-6 text-zinc-500 group-hover:text-zinc-300',
                )}
              />
            </div>

            {/* Smart Label Positioning */}
            <div
              className={cn(
                'absolute flex flex-col min-w-max pointer-events-none transition-all duration-300 z-40',
                labelStyle.container,
                showLabel
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-2',
              )}
            >
              <span
                className={cn(
                  'text-sm font-bold text-white whitespace-nowrap drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]',
                  isFocus ? 'text-white' : 'text-zinc-300',
                )}
              >
                {node.title}
              </span>
              <span
                className={cn(
                  'text-[10px] uppercase tracking-wider font-semibold',
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

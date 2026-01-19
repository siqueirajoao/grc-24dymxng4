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

  // Adjusted radius to prevent overlap on smaller screens
  const radius = 38 // percentage
  const total = modules.length

  // Calculate node positions
  const nodes = useMemo(() => {
    return modules.map((module, index) => {
      const angleDeg = (index * 360) / total - 90
      const angleRad = angleDeg * (Math.PI / 180)
      const x = 50 + radius * Math.cos(angleRad)
      const y = 50 + radius * Math.sin(angleRad)
      return { ...module, x, y }
    })
  }, [total])

  // Determine which node is currently the "focus" (hovered takes precedence over active)
  const currentFocusId = hoveredId || activeId

  return (
    <div className="relative w-full aspect-square max-w-[400px] lg:max-w-[480px] mx-auto select-none p-4">
      {/* Background Decor: Rotating Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[65%] h-[65%] border border-dashed border-blue-500/50 rounded-full animate-spin-slow" />
        <div className="absolute w-[45%] h-[45%] border border-dotted border-white/50 rounded-full animate-reverse-spin-slow" />
        <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full" />
      </div>

      {/* Connection Lines Layer (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        <defs>
          <linearGradient
            id="activeLineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Draw connections between nodes (The web) */}
        {nodes.map((node) => {
          return node.relatedIds.map((targetId) => {
            const targetNode = nodes.find((n) => n.id === targetId)
            if (!targetNode) return null
            // Ensure unique key for connection
            if (node.id > targetId) return null

            const isRelatedActive =
              (currentFocusId === node.id &&
                node.relatedIds.includes(targetId)) ||
              (currentFocusId === targetId &&
                targetNode.relatedIds.includes(node.id))

            return (
              <line
                key={`rel-${node.id}-${targetId}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${targetNode.x}%`}
                y2={`${targetNode.y}%`}
                stroke={
                  isRelatedActive
                    ? 'url(#activeLineGradient)'
                    : 'rgba(255,255,255,0.03)'
                }
                strokeWidth={isRelatedActive ? '1.5' : '0.5'}
                className={cn(
                  'transition-all duration-500',
                  isRelatedActive && 'opacity-100',
                )}
              />
            )
          })
        })}

        {/* 2. Draw connections to Center */}
        {nodes.map((node) => {
          const isFocused = node.id === currentFocusId
          const isRelatedToFocus = nodes
            .find((n) => n.id === currentFocusId)
            ?.relatedIds.includes(node.id)

          const isActiveLine =
            isFocused || (isRelatedToFocus && currentFocusId !== null)

          return (
            <g key={`center-${node.id}`}>
              <line
                x1="50%"
                y1="50%"
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke={
                  isActiveLine
                    ? 'url(#activeLineGradient)'
                    : 'rgba(255,255,255,0.05)'
                }
                strokeWidth={isFocused ? '2' : '1'}
                className={cn('transition-all duration-500')}
              />
              {/* Particle flow animation on active lines */}
              {isFocused && (
                <circle r="3" fill="#60A5FA" filter="url(#glow)">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    // Simple path approximation for SVG coordinate system
                    path={`M 50 50 L ${node.x} ${node.y}`}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </circle>
              )}
            </g>
          )
        })}
      </svg>

      {/* Central Core Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative group cursor-default">
          <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full animate-pulse-slow" />
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-black border border-blue-500/30 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.15)] z-10 transition-transform duration-500 hover:scale-105">
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-1" />
            <span className="text-[9px] md:text-[10px] font-bold text-white tracking-widest">
              LAWYN
            </span>
            <span className="text-[7px] md:text-[8px] text-blue-400 font-medium">
              GRC CORE
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Nodes */}
      {nodes.map((node) => {
        const isActive = node.id === activeId
        const isHovered = node.id === hoveredId
        const isRelated = nodes
          .find((n) => n.id === currentFocusId)
          ?.relatedIds.includes(node.id)

        // Calculate opacity/dimming for non-focused items
        const isDimmed =
          hoveredId && !isHovered && !isRelated && hoveredId !== node.id

        return (
          <button
            key={node.id}
            onClick={() => onSelect(node.id)}
            onMouseEnter={() => setHoveredId(node.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={cn(
              'absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 outline-none',
              isActive || isHovered
                ? 'scale-110 z-40'
                : 'scale-100 hover:scale-105',
              isDimmed ? 'opacity-40 blur-[1px] scale-90' : 'opacity-100',
            )}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            aria-label={`Select ${node.title} module`}
          >
            <div className="relative flex flex-col items-center group">
              {/* Glow Effect */}
              <div
                className={cn(
                  'absolute inset-0 blur-xl rounded-full transition-all duration-500',
                  isActive || isHovered
                    ? `opacity-60 ${node.color.replace('text-', 'bg-')}`
                    : 'opacity-0',
                )}
              />

              {/* Icon Container */}
              <div
                className={cn(
                  'w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-lg',
                  isActive || isHovered
                    ? `bg-black border-${node.color.split('-')[1]}-500/50 ${node.color} shadow-[0_0_25px_rgba(0,0,0,0.5)] ring-1 ring-${node.color.split('-')[1]}-500/30`
                    : `bg-zinc-950/80 border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300`,
                )}
              >
                <node.icon
                  className={cn(
                    'w-5 h-5 md:w-7 md:h-7 transition-transform duration-300',
                    (isActive || isHovered) && 'scale-110',
                  )}
                />
              </div>

              {/* Label */}
              <div
                className={cn(
                  'absolute top-full mt-2 md:mt-3 whitespace-nowrap text-[10px] md:text-xs font-semibold px-2 md:px-3 py-1 rounded-full border backdrop-blur-md transition-all duration-300 pointer-events-none',
                  isActive || isHovered
                    ? 'bg-zinc-900/90 border-white/20 text-white opacity-100 translate-y-0 shadow-xl'
                    : 'bg-black/40 border-transparent text-gray-500 opacity-0 -translate-y-2',
                )}
              >
                {node.title}
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}

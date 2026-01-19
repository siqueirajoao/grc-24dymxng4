import { useMemo, useState } from 'react'
import { Building2, Landmark, Scale, Shield, ArrowUpRight } from 'lucide-react'
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
  const currentId = hoveredId || activeId

  // --- Configuration ---
  const VIEWBOX_SIZE = 600
  const CENTER = VIEWBOX_SIZE / 2
  const RADIUS = 180 // Radius for modules
  const REGULATOR_RADIUS = 260 // Radius for regulators

  // --- Regulator Nodes Data ---
  const regulators = [
    {
      id: 'reg-bacen',
      label: 'BACEN',
      icon: Landmark,
      angle: 225, // Top-Leftish
      connectsTo: ['risks', 'third-party', 'regulatory'],
      color: 'text-blue-400',
    },
    {
      id: 'reg-cvm',
      label: 'CVM / Aud',
      icon: Scale,
      angle: 315, // Top-Rightish
      connectsTo: ['controls', 'audit', 'regulatory'],
      color: 'text-emerald-400',
    },
    {
      id: 'reg-lgpd',
      label: 'ANPD',
      icon: Shield,
      angle: 90, // Bottom
      connectsTo: ['lgpd', 'third-party'],
      color: 'text-purple-400',
    },
  ]

  // --- Calculate Positions ---
  const moduleNodes = useMemo(() => {
    return modules.map((module, index) => {
      // Start from -90deg (Top) and go clockwise
      const angleDeg = -90 + index * (360 / modules.length)
      const angleRad = (angleDeg * Math.PI) / 180
      return {
        ...module,
        x: CENTER + RADIUS * Math.cos(angleRad),
        y: CENTER + RADIUS * Math.sin(angleRad),
        angleDeg,
      }
    })
  }, [])

  const regulatorNodes = useMemo(() => {
    return regulators.map((reg) => {
      const angleRad = (reg.angle * Math.PI) / 180
      return {
        ...reg,
        x: CENTER + REGULATOR_RADIUS * Math.cos(angleRad),
        y: CENTER + REGULATOR_RADIUS * Math.sin(angleRad),
      }
    })
  }, [])

  // --- Helper for Label Position ---
  const getLabelStyle = (angle: number) => {
    // Normalize angle
    const norm = (angle + 360) % 360

    // Determine quadrant for transform origin
    let className =
      'absolute whitespace-nowrap text-sm font-medium transition-all duration-300 pointer-events-none '
    const offset = 40 // distance from node center

    if (norm > 315 || norm <= 45) {
      // Top/Right-ish -> Push Right
      return {
        className: cn(className, 'left-1/2 ml-10 origin-left'),
        style: { transform: 'translateY(-50%)' },
      }
    } else if (norm > 45 && norm <= 135) {
      // Bottom -> Push Down
      return {
        className: cn(
          className,
          'top-1/2 mt-10 origin-top text-center left-1/2',
        ),
        style: { transform: 'translateX(-50%)' },
      }
    } else if (norm > 135 && norm <= 225) {
      // Left -> Push Left
      return {
        className: cn(className, 'right-1/2 mr-10 origin-right text-right'),
        style: { transform: 'translateY(-50%)' },
      }
    } else {
      // Top -> Push Up
      return {
        className: cn(
          className,
          'bottom-1/2 mb-10 origin-bottom text-center left-1/2',
        ),
        style: { transform: 'translateX(-50%)' },
      }
    }
  }

  // --- Mobile Layout Render ---
  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center py-8 relative">
        {/* Mobile Core */}
        <div className="relative z-10 mb-8 p-4 rounded-full bg-blue-950/30 border border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
          <Building2 className="w-8 h-8 text-blue-400" />
        </div>

        {/* Connecting Line Spine */}
        <div className="absolute top-16 bottom-10 left-[2.25rem] w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent" />

        {/* Modules List */}
        <div className="w-full space-y-6 pl-16 pr-4">
          {modules.map((module) => {
            const isActive = module.id === activeId
            return (
              <button
                key={module.id}
                onClick={() => onSelect(module.id)}
                className={cn(
                  'w-full text-left relative group transition-all duration-300 rounded-xl border p-4 flex items-center gap-4',
                  isActive
                    ? 'bg-zinc-900 border-blue-500/50 shadow-lg shadow-blue-900/10 translate-x-2'
                    : 'bg-black border-white/10 hover:border-white/20',
                )}
              >
                {/* Horizontal Connector */}
                <div
                  className={cn(
                    'absolute top-1/2 -left-12 h-px w-8 transition-colors',
                    isActive ? 'bg-blue-500' : 'bg-white/10',
                  )}
                />
                <div
                  className={cn(
                    'absolute top-1/2 -left-[3.25rem] w-2 h-2 rounded-full border transition-colors',
                    isActive
                      ? 'bg-blue-500 border-blue-400'
                      : 'bg-black border-white/20',
                  )}
                />

                <div
                  className={cn(
                    'p-2 rounded-lg transition-colors',
                    isActive ? 'bg-blue-500/10' : 'bg-white/5',
                  )}
                >
                  <module.icon className={cn('w-5 h-5', module.color)} />
                </div>
                <div>
                  <div
                    className={cn(
                      'font-bold text-sm',
                      isActive ? 'text-white' : 'text-zinc-400',
                    )}
                  >
                    {module.title}
                  </div>
                  <div className="text-[10px] text-zinc-600 uppercase tracking-wider font-semibold">
                    {module.subtitle}
                  </div>
                </div>

                {isActive && (
                  <ArrowUpRight className="ml-auto w-4 h-4 text-blue-500 animate-pulse" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // --- Desktop Layout Render ---
  return (
    <div className="w-full h-full relative aspect-square max-w-[600px] mx-auto select-none">
      {/* SVG Container for Lines */}
      <svg
        viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <radialGradient id="core-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
          <linearGradient id="line-active" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
        </defs>

        {/* Core Glow */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS * 0.8}
          fill="url(#core-glow)"
          className="opacity-50 animate-pulse-slow"
        />

        {/* Rings */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeDasharray="4 4"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={REGULATOR_RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        />

        {/* 1. Core to Modules Connections */}
        {moduleNodes.map((node) => {
          const isActive = node.id === currentId
          return (
            <line
              key={`core-${node.id}`}
              x1={CENTER}
              y1={CENTER}
              x2={node.x}
              y2={node.y}
              stroke={isActive ? 'url(#line-active)' : 'rgba(255,255,255,0.05)'}
              strokeWidth={isActive ? 2 : 1}
              className="transition-all duration-500"
            />
          )
        })}

        {/* 2. Module to Module Connections (Chords) */}
        {moduleNodes.map((source) => {
          return source.relatedIds.map((targetId) => {
            const target = moduleNodes.find((m) => m.id === targetId)
            if (!target) return null
            // Avoid duplicate lines (draw only if source index < target index)
            // But here we want to highlight if either is active
            const isRelatedActive =
              source.id === currentId || target.id === currentId

            return (
              <line
                key={`link-${source.id}-${target.id}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={
                  isRelatedActive
                    ? 'rgba(59, 130, 246, 0.4)'
                    : 'rgba(255,255,255,0.03)'
                }
                strokeWidth={1}
                className="transition-all duration-500"
              />
            )
          })
        })}

        {/* 3. Module to Regulator Connections */}
        {regulatorNodes.map((reg) => {
          return reg.connectsTo.map((modId) => {
            const mod = moduleNodes.find((m) => m.id === modId)
            if (!mod) return null
            const isActive = mod.id === currentId

            return (
              <path
                key={`reg-${reg.id}-${modId}`}
                d={`M ${reg.x} ${reg.y} L ${mod.x} ${mod.y}`}
                stroke={
                  isActive ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.05)'
                }
                strokeDasharray={isActive ? '2 2' : 'none'}
                className={cn(
                  'transition-all duration-500',
                  isActive && 'animate-pulse',
                )}
                fill="none"
              />
            )
          })
        })}
      </svg>

      {/* HTML Layer for Nodes (Accessibility & Interaction) */}

      {/* Core Node */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ width: 80, height: 80 }}
      >
        <div className="w-full h-full rounded-full bg-black border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center relative group cursor-default">
          <Building2 className="w-8 h-8 text-blue-500" />
          <div className="absolute -bottom-6 text-[10px] font-bold tracking-widest text-blue-500/80">
            CORE
          </div>
        </div>
      </div>

      {/* Module Nodes */}
      {moduleNodes.map((node) => {
        const isActive = node.id === activeId
        const isHovered = node.id === hoveredId
        const isFocus = isActive || isHovered
        const labelStyle = getLabelStyle(node.angleDeg)

        return (
          <div
            key={node.id}
            className="absolute z-30"
            style={{
              left: node.x / (VIEWBOX_SIZE / 100) + '%',
              top: node.y / (VIEWBOX_SIZE / 100) + '%',
            }}
          >
            <button
              onClick={() => onSelect(node.id)}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 outline-none group"
            >
              <div
                className={cn(
                  'rounded-full border flex items-center justify-center transition-all duration-300 relative',
                  isFocus
                    ? 'w-16 h-16 bg-zinc-900 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-110'
                    : 'w-12 h-12 bg-black border-white/20 hover:border-white/50 hover:bg-zinc-900',
                )}
              >
                {/* Ping animation for active */}
                {isActive && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20 animate-ping"></span>
                )}
                <node.icon
                  className={cn(
                    'transition-all duration-300',
                    isFocus
                      ? 'w-7 h-7 text-white'
                      : cn('w-5 h-5 opacity-70', node.color),
                  )}
                />
              </div>
            </button>

            {/* Label */}
            <div
              className={cn(
                labelStyle.className,
                isFocus ? 'opacity-100 scale-100' : 'opacity-60 scale-90',
              )}
              style={labelStyle.style}
            >
              <div
                className={cn(
                  'text-base font-bold',
                  isFocus ? 'text-white' : 'text-zinc-400',
                )}
              >
                {node.title}
              </div>
              <div
                className={cn(
                  'text-[10px] uppercase tracking-wider',
                  node.color,
                )}
              >
                {node.subtitle}
              </div>
            </div>
          </div>
        )
      })}

      {/* Regulator Nodes (Satellite) */}
      {regulatorNodes.map((reg) => (
        <div
          key={reg.id}
          className="absolute z-10"
          style={{
            left: reg.x / (VIEWBOX_SIZE / 100) + '%',
            top: reg.y / (VIEWBOX_SIZE / 100) + '%',
          }}
        >
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-help"
            title="Regulador / Entidade Externa"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 bg-black flex items-center justify-center">
              <reg.icon className={cn('w-4 h-4', reg.color)} />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 font-bold">
              {reg.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

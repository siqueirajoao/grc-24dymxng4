import { useState } from 'react'
import {
  Building2,
  Landmark,
  Scale,
  Shield,
  ArrowUpRight,
  Maximize2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'
import { useIsMobile } from '@/hooks/use-mobile'

interface EcosystemGraphProps {
  activeId: string
  onSelect: (id: string) => void
}

export function EcosystemGraph({ activeId, onSelect }: EcosystemGraphProps) {
  const isMobile = useIsMobile()
  const [isHovered, setIsHovered] = useState(false)

  // --- Regulator Nodes Data ---
  const regulators = [
    {
      id: 'reg-bacen',
      label: 'BACEN',
      icon: Landmark,
      color: 'text-blue-400',
      angle: 0,
    },
    {
      id: 'reg-cvm',
      label: 'CVM',
      icon: Scale,
      color: 'text-emerald-400',
      angle: 120,
    },
    {
      id: 'reg-lgpd',
      label: 'ANPD',
      icon: Shield,
      color: 'text-purple-400',
      angle: 240,
    },
  ]

  // --- Mobile Layout ---
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

  // --- Desktop Orbital Layout ---
  return (
    <div
      className="relative w-full aspect-square max-w-[650px] mx-auto flex items-center justify-center select-none group/orbit-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Core Node (Static Center) */}
      <div className="absolute z-30 w-24 h-24 rounded-full bg-black border border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.2)] flex flex-col items-center justify-center backdrop-blur-sm group-hover/orbit-container:border-blue-400 transition-colors duration-500">
        <Building2 className="w-8 h-8 text-blue-500 mb-1" />
        <div className="text-[10px] font-bold tracking-widest text-blue-500/80">
          CORE
        </div>
        {/* Core pulse effect */}
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping opacity-20" />
      </div>

      {/* 2. Inner Orbit Ring (Modules) */}
      <div
        className={cn(
          'absolute w-[70%] h-[70%] rounded-full border border-dashed border-white/10 animate-orbit transition-all duration-700',
          isHovered ? 'animation-paused border-white/20' : '',
        )}
      >
        {/* Modules on the Ring */}
        {modules.map((module, index) => {
          const isActive = module.id === activeId
          // Calculate rotation angle for placement
          const angle = (index * 360) / modules.length

          return (
            <div
              key={module.id}
              className="absolute top-0 left-1/2 w-0 h-0"
              style={{
                transform: `rotate(${angle}deg) translateY(-50%)`, // Position on ring
              }}
            >
              {/* Counter-rotating container for the node to keep it upright */}
              <div
                className={cn(
                  'absolute -top-6 -left-20 w-40 h-12 flex flex-col items-center justify-center cursor-pointer animate-orbit-reverse',
                  isHovered ? 'animation-paused' : '',
                )}
                onClick={(e) => {
                  e.stopPropagation()
                  onSelect(module.id)
                }}
              >
                {/* Node Icon Circle */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 relative bg-black z-20',
                    isActive
                      ? 'border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110'
                      : 'border-white/20 hover:border-white/50 hover:bg-zinc-900',
                  )}
                >
                  <module.icon
                    className={cn(
                      'w-5 h-5 transition-all duration-300',
                      isActive ? 'text-white' : cn('opacity-70', module.color),
                    )}
                  />
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" />
                  )}

                  {/* Connection Line to Center (Visual only, rotates with ring) */}
                  <div
                    className={cn(
                      'absolute top-1/2 left-1/2 w-0.5 h-[50vh] origin-top -translate-x-1/2 -z-10 bg-gradient-to-b from-blue-500/20 to-transparent transition-opacity duration-300 pointer-events-none',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                    style={{ transform: `rotate(${180}deg)` }}
                  />
                </div>

                {/* Node Label */}
                <div
                  className={cn(
                    'mt-3 text-center transition-all duration-300',
                    isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-90',
                  )}
                >
                  <div
                    className={cn(
                      'text-sm font-bold whitespace-nowrap',
                      isActive ? 'text-white' : 'text-zinc-400',
                    )}
                  >
                    {module.title}
                  </div>
                  <div
                    className={cn(
                      'text-[9px] uppercase tracking-wider font-semibold',
                      module.color,
                    )}
                  >
                    {module.subtitle}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 3. Outer Orbit Ring (Regulators) */}
      <div
        className={cn(
          'absolute w-[98%] h-[98%] rounded-full border border-white/5 animate-orbit-slow-reverse transition-all duration-1000',
          isHovered ? 'animation-paused opacity-40' : 'opacity-100',
        )}
      >
        {regulators.map((reg) => (
          <div
            key={reg.id}
            className="absolute top-0 left-1/2 w-0 h-0"
            style={{
              transform: `rotate(${reg.angle}deg) translateY(-50%)`,
            }}
          >
            {/* Counter-rotate regulator to stay upright */}
            <div className="absolute -top-5 -left-8 w-16 flex flex-col items-center animate-orbit-slow">
              <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center mb-2 shadow-lg">
                <reg.icon className={cn('w-4 h-4', reg.color)} />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                {reg.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 rounded-full bg-radial-gradient from-transparent to-black/20 pointer-events-none z-0" />
    </div>
  )
}

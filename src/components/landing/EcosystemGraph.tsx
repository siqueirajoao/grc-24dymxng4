import { useMemo } from 'react'
import { Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'

interface EcosystemGraphProps {
  activeId: string
  onSelect: (id: string) => void
}

export function EcosystemGraph({ activeId, onSelect }: EcosystemGraphProps) {
  const radius = 42 // percentage
  const total = modules.length

  const nodes = useMemo(() => {
    return modules.map((module, index) => {
      // Start from top (-90 degrees)
      const angleDeg = (index * 360) / total - 90
      const angleRad = angleDeg * (Math.PI / 180)
      const x = 50 + radius * Math.cos(angleRad)
      const y = 50 + radius * Math.sin(angleRad)
      return { ...module, x, y }
    })
  }, [total])

  const activeNode = nodes.find((n) => n.id === activeId) || nodes[0]

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto select-none">
      {/* Decorative Rotating Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[70%] h-[70%] border border-dashed border-blue-500 rounded-full animate-spin-slow" />
        <div className="absolute w-[50%] h-[50%] border border-dotted border-white rounded-full animate-reverse-spin-slow" />
        <div className="absolute w-[85%] h-[85%] border border-white/5 rounded-full" />
      </div>

      {/* Connection Lines Layer (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
        </defs>
        {nodes.map((node) => {
          const isActive = node.id === activeId
          return (
            <g key={node.id}>
              {/* Line to Center */}
              <line
                x1="50%"
                y1="50%"
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke={
                  isActive ? 'url(#lineGradient)' : 'rgba(255,255,255,0.05)'
                }
                strokeWidth={isActive ? '2' : '1'}
                className={cn('transition-all duration-500')}
              />
              {/* Active Pulse on Line */}
              {isActive && (
                <circle r="3" fill="#60A5FA">
                  <animateMotion
                    dur="1.5s"
                    repeatCount="indefinite"
                    path={`M 50 ${50 * (500 / 100)} L ${node.x * (500 / 100)} ${node.y * (500 / 100)}`} // Approximate conversion for simple SVG scaling
                    calcMode="linear"
                  />
                </circle>
              )}
            </g>
          )
        })}
      </svg>

      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative group cursor-default">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse-slow" />
          <div className="relative w-24 h-24 bg-black border border-blue-500/30 rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)] z-10">
            <Building2 className="w-8 h-8 text-blue-500 mb-1" />
            <span className="text-[10px] font-bold text-white tracking-wider">
              LAWYN
            </span>
            <span className="text-[8px] text-blue-400">GRC CORE</span>
          </div>
        </div>
      </div>

      {/* Satellite Nodes */}
      {nodes.map((node) => {
        const isActive = node.id === activeId
        return (
          <button
            key={node.id}
            onClick={() => onSelect(node.id)}
            className={cn(
              'absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group',
              isActive ? 'scale-110' : 'scale-100 hover:scale-105',
            )}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="relative">
              {/* Node Glow */}
              <div
                className={cn(
                  'absolute inset-0 blur-md rounded-full transition-all duration-300',
                  isActive
                    ? `opacity-100 bg-current ${node.color}`
                    : 'opacity-0',
                )}
              />
              {/* Node Circle */}
              <div
                className={cn(
                  'w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-xl',
                  isActive
                    ? `bg-black ${node.borderColor} ${node.color} shadow-[0_0_20px_rgba(0,0,0,0.5)]`
                    : 'bg-black/80 border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300',
                )}
              >
                <node.icon className="w-6 h-6" />
              </div>

              {/* Label below node */}
              <div
                className={cn(
                  'absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs font-medium px-2 py-0.5 rounded-full border transition-all duration-300',
                  isActive
                    ? 'bg-black/90 border-white/20 text-white opacity-100 translate-y-0'
                    : 'bg-black/50 border-transparent text-gray-400 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0',
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

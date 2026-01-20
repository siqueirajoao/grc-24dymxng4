import { useState, useEffect } from 'react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'
import { Building2, Cpu, Globe, Shield, Sparkles } from 'lucide-react'

const segments = [
  {
    id: 'regulated',
    title: 'Instituições Reguladas',
    desc: 'Bancos, Fintechs, Seguradoras e empresas de capital aberto sujeitas a regulações rigorosas (BACEN, CVM, SUSEP).',
    icon: Building2,
    gradient: 'from-blue-600 to-indigo-600',
    borderEffect: 'group-hover:border-blue-500/50',
    glowColor: 'group-hover:shadow-blue-900/40',
    syncId: 'REG_ENV_SYNC',
  },
  {
    id: 'tech',
    title: 'Empresas de Tecnologia',
    desc: 'Startups e Scale-ups que precisam estruturar governança e compliance para crescimento sustentável e IPO.',
    icon: Cpu,
    gradient: 'from-violet-600 to-purple-600',
    borderEffect: 'group-hover:border-violet-500/50',
    glowColor: 'group-hover:shadow-violet-900/40',
    syncId: 'TECH_CORE_SYNC',
  },
  {
    id: 'industry',
    title: 'Indústria e Serviços',
    desc: 'Grandes corporações com complexidade operacional, riscos de cadeia de suprimentos e requisitos de auditoria.',
    icon: Globe,
    gradient: 'from-indigo-600 to-cyan-600',
    borderEffect: 'group-hover:border-indigo-500/50',
    glowColor: 'group-hover:shadow-indigo-900/40',
    syncId: 'IND_SVC_SYNC',
  },
]

export function SegmentsSection() {
  const { ref, isVisible } = useScrollObserver({ threshold: 0.15 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [linesActive, setLinesActive] = useState(false)

  // Delay the line animation slightly after the section appears
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setLinesActive(true), 600)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <section
      id="segments"
      className="py-24 border-t border-white/5 relative z-10 bg-black overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-950/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <div
          className={cn(
            'text-center mb-10 transition-all duration-700',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
            <Sparkles className="w-3 h-3" />
            <span>Ecossistema Integrado</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Para Ambientes de Alta Complexidade
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma arquitetura robusta desenhada para escalar conformidade em
            qualquer setor.
          </p>
        </div>

        {/* The Core & Connections Layout */}
        <div className="relative flex flex-col items-center">
          {/* Central Core Node */}
          <div
            className={cn(
              'relative z-20 mb-8 md:mb-0 transition-all duration-700 delay-200',
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-10 scale-95',
            )}
          >
            <div className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 transition-all duration-500 animate-subtle-glow">
              <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-xl group-hover:bg-blue-600/10 transition-all" />
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-inner">
                <Shield className="w-4 h-4 text-white fill-white/20" />
              </div>
              <div>
                <span className="block text-xs text-gray-400 font-medium tracking-wider">
                  POWERED BY
                </span>
                <span className="block text-sm font-bold text-white tracking-wide">
                  LAWYN CORE
                </span>
              </div>
            </div>
          </div>

          {/* Connection Lines Layer (Desktop Only) */}
          {/* Spans from bottom of Core to top of Cards */}
          <div className="hidden md:block w-full h-24 relative overflow-visible -my-1 z-0">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
                  <stop offset="100%" stopColor="#8b5cf6" /> {/* violet-500 */}
                </linearGradient>
              </defs>

              {/* Path 1: To Left Card (Approx 16.66% center) - Orthogonal */}
              <path
                d="M 50 0 L 50 50 L 16.66 50 L 16.66 100"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="0.5"
                pathLength="1"
                className={cn(
                  'transition-all duration-500',
                  linesActive ? 'animate-stroke-draw' : 'opacity-0',
                  hoveredIndex === 0
                    ? 'opacity-100 stroke-[1.5px] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]'
                    : hoveredIndex !== null
                      ? 'opacity-10'
                      : 'opacity-30',
                )}
              />

              {/* Path 2: To Center Card (50% center) - Straight */}
              <path
                d="M 50 0 L 50 100"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="0.5"
                pathLength="1"
                className={cn(
                  'transition-all duration-500',
                  linesActive ? 'animate-stroke-draw' : 'opacity-0',
                  hoveredIndex === 1
                    ? 'opacity-100 stroke-[1.5px] drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]'
                    : hoveredIndex !== null
                      ? 'opacity-10'
                      : 'opacity-30',
                )}
                style={{ animationDelay: '100ms' }}
              />

              {/* Path 3: To Right Card (Approx 83.33% center) - Orthogonal */}
              <path
                d="M 50 0 L 50 50 L 83.33 50 L 83.33 100"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="0.5"
                pathLength="1"
                className={cn(
                  'transition-all duration-500',
                  linesActive ? 'animate-stroke-draw' : 'opacity-0',
                  hoveredIndex === 2
                    ? 'opacity-100 stroke-[1.5px] drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]'
                    : hoveredIndex !== null
                      ? 'opacity-10'
                      : 'opacity-30',
                )}
                style={{ animationDelay: '200ms' }}
              />

              {/* Connection Dots on Ends */}
              {linesActive && (
                <>
                  <circle
                    cx="16.66"
                    cy="100"
                    r="1.5"
                    className="fill-blue-500 animate-fade-in"
                  />
                  <circle
                    cx="50"
                    cy="100"
                    r="1.5"
                    className="fill-violet-500 animate-fade-in delay-75"
                  />
                  <circle
                    cx="83.33"
                    cy="100"
                    r="1.5"
                    className="fill-indigo-500 animate-fade-in delay-150"
                  />
                </>
              )}
            </svg>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 w-full relative z-20">
            {segments.map((seg, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  'group relative overflow-hidden p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-900/60',
                  seg.borderEffect,
                  seg.glowColor,
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20',
                )}
                style={{
                  transitionDelay: `${300 + i * 150}ms`,
                  boxShadow:
                    hoveredIndex === i
                      ? '0 20px 40px -10px rgba(0,0,0,0.5)'
                      : '',
                }}
              >
                {/* Gradient Top Line */}
                <div
                  className={cn(
                    'absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity duration-500',
                    seg.gradient,
                  )}
                />

                {/* Hover Ambient Light */}
                <div
                  className={cn(
                    'absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br opacity-0 group-hover:opacity-20 blur-[60px] transition-all duration-700 rounded-full pointer-events-none',
                    seg.gradient,
                  )}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
                    <seg.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                    {seg.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {seg.desc}
                  </p>

                  {/* Tech Details (Decorations) */}
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5 opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                      {seg.syncId}
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-green-500 transition-colors" />
                      <div className="w-1 h-1 rounded-full bg-gray-600" />
                      <div className="w-1 h-1 rounded-full bg-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

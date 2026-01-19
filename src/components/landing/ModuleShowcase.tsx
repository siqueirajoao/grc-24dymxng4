import { Cpu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { EcosystemGraph } from './EcosystemGraph'

export function ModuleShowcase() {
  const { ref, isVisible } = useScrollObserver({ threshold: 0.1 })

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-black relative overflow-hidden flex flex-col justify-center min-h-[900px]"
    >
      {/* True Black Aesthetic - No strong gradients */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Very subtle ambient glow - Deep Space Blue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-950/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Overlay - Very Faint */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-8 transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-6 backdrop-blur-sm">
            <Cpu className="w-3 h-3" />
            <span>Ecossistema Vivo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
            Arquitetura Integrada
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-600">
              Governança em Órbita
            </span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Uma visão sistêmica onde cada módulo orbita para garantir
            conformidade contínua. Navegue pelo ecossistema Lawyn.
          </p>
        </div>

        {/* Interactive Orbital Graph */}
        <div
          className={cn(
            'flex justify-center items-center relative transition-all duration-1000 delay-200 w-full',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          )}
        >
          <EcosystemGraph />
        </div>
      </div>
    </section>
  )
}

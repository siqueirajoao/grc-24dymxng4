import { useState } from 'react'
import { Cpu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { EcosystemGraph } from './EcosystemGraph'
import { ModuleDetail } from './ModuleDetail'
import { modules } from './modules-data'

export function ModuleShowcase() {
  const [activeTab, setActiveTab] = useState(modules[0].id)
  const { ref, isVisible } = useScrollObserver({ threshold: 0.1 })

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />

      {/* Subtle Glows */}
      <div className="absolute -left-[10%] top-[20%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -right-[10%] bottom-[20%] w-[40%] h-[40%] bg-indigo-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-20 transition-all duration-700',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-blue-400 text-sm font-medium mb-6 hover:border-blue-500/30 transition-colors cursor-default">
            <Cpu className="w-4 h-4" />
            <span>Ecossistema Integrado</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Uma Plataforma, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Conexões Infinitas
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Navegue pelo nosso ecossistema regulatório. Cada módulo é uma peça
            fundamental que se conecta para formar uma governança robusta.
          </p>
        </div>

        {/* Interactive Area */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Interactive Graph */}
          <div
            className={cn(
              'lg:col-span-5 flex justify-center lg:justify-end pr-0 lg:pr-4 transition-all duration-1000 delay-100 sticky top-24',
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10',
            )}
          >
            <EcosystemGraph activeId={activeTab} onSelect={setActiveTab} />
          </div>

          {/* Right Column: Detailed View */}
          <div
            className={cn(
              'lg:col-span-7 transition-all duration-1000 delay-300 min-h-[600px]',
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10',
            )}
          >
            <ModuleDetail moduleId={activeTab} />
          </div>
        </div>
      </div>
    </section>
  )
}

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
    <section
      id="features"
      className="py-16 md:py-24 bg-black relative overflow-hidden flex flex-col justify-center min-h-[800px]"
    >
      {/* Global Background Elements for True Black Aesthetic */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

      {/* Subtle Ambient Glows - reduced opacity for cleaner black look */}
      <div className="absolute -left-[20%] top-[10%] w-[600px] h-[600px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -right-[20%] bottom-[10%] w-[600px] h-[600px] bg-indigo-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-12 md:mb-20 transition-all duration-1000 ease-out',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium mb-6 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecossistema Integrado</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Uma Plataforma, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-400">
              Conexões Inteligentes
            </span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Navegue pelo nosso ecossistema regulatório. Cada módulo atua como um
            nó inteligente que processa, conecta e fortalece sua governança.
          </p>
        </div>

        {/* Interactive Area */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Graph */}
          {/* Adjusted sizing and spacing for responsive layouts */}
          <div
            className={cn(
              'lg:col-span-7 flex justify-center items-center relative min-h-[400px] md:min-h-[500px] transition-all duration-1000 delay-200',
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10',
            )}
          >
            {/* Aspect Ratio Container to maintain circular shape properly */}
            <div className="w-full max-w-[400px] md:max-w-[550px] aspect-square relative">
              <EcosystemGraph activeId={activeTab} onSelect={setActiveTab} />
            </div>
          </div>

          {/* Right Column: Detailed View */}
          <div
            className={cn(
              'lg:col-span-5 transition-all duration-1000 delay-400 min-h-[400px] md:min-h-[500px] flex flex-col justify-center',
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

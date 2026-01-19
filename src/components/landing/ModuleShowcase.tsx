import { useState } from 'react'
import { Cpu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { EcosystemGraph } from './EcosystemGraph'
import { ModuleDetail } from './ModuleDetail'
import { Sheet, SheetContent } from '@/components/ui/sheet'

export function ModuleShowcase() {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null)
  const { ref, isVisible } = useScrollObserver({ threshold: 0.1 })

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-black relative overflow-hidden flex flex-col justify-center min-h-[800px]"
    >
      {/* True Black Aesthetic - No strong gradients */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Very subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium mb-6 backdrop-blur-sm">
            <Cpu className="w-3 h-3" />
            <span>Ecossistema Vivo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
            Interconexão Total <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600">
              Governança em Órbita
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Uma visão unificada onde riscos, controles e obrigações regulatórias
            orbitam em torno de uma governança central sólida.
          </p>
        </div>

        {/* Interactive Orbital Graph */}
        <div
          className={cn(
            'flex justify-center items-center relative transition-all duration-1000 delay-200 w-full',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          )}
        >
          <EcosystemGraph onModuleClick={setSelectedModuleId} />
        </div>
      </div>

      {/* Detail Sheet */}
      <Sheet
        open={!!selectedModuleId}
        onOpenChange={(open) => !open && setSelectedModuleId(null)}
      >
        <SheetContent className="bg-black border-l border-white/10 text-white p-0 sm:max-w-md w-full overflow-y-auto shadow-2xl shadow-blue-900/10">
          {selectedModuleId && (
            <div className="p-6 h-full">
              <div className="mt-8">
                <ModuleDetail moduleId={selectedModuleId} />
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  )
}

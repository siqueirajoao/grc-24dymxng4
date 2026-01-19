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
      {/* True Black Aesthetic - Minimal Ambient Light */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Very subtle gradient spots to give depth without breaking blackness */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-10 transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1',
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecossistema Integrado</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Inteligência Regulatória <br />
            <span className="text-zinc-500">Conectada ao Core</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Nossa plataforma unifica os pilares de GRC em uma estrutura viva.
            Clique nos módulos para explorar.
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
        <SheetContent className="bg-zinc-950 border-zinc-800 text-white p-0 sm:max-w-md w-full overflow-y-auto">
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

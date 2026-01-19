import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { EcosystemGraph } from './EcosystemGraph'
import { ModuleDetail } from './ModuleDetail'

export function ModuleShowcase() {
  const { ref, isVisible } = useScrollObserver({ threshold: 0.1 })
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null)

  return (
    <section
      id="ecosystem"
      className="py-12 md:py-20 bg-black relative overflow-hidden flex flex-col min-h-screen"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-950/20 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-950/20 blur-[120px] rounded-full pointer-events-none opacity-30" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

      <div
        className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col justify-center"
        ref={ref}
      >
        <div
          className={cn(
            'flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 transition-all duration-1000',
            isVisible ? 'opacity-100' : 'opacity-0',
          )}
        >
          {/* Interactive Graph (Left/Top or Center when nothing selected) */}
          <div
            className={cn(
              'order-2 lg:order-1 relative transition-all duration-700 ease-in-out',
              selectedModuleId ? 'w-full lg:w-[60%]' : 'w-full lg:w-full',
            )}
          >
            <div
              className={cn(
                'relative transition-all duration-1000 delay-200',
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
              )}
            >
              <EcosystemGraph
                activeModuleId={selectedModuleId}
                onModuleSelect={setSelectedModuleId}
              />
            </div>

            {!selectedModuleId && (
              <div className="text-center mt-8 animate-fade-in-up delay-500">
                <p className="text-gray-400 text-sm">
                  Clique em um módulo para ver detalhes
                </p>
              </div>
            )}
          </div>

          {/* Detail Panel (Right/Bottom) - Only visible when selected */}
          <div
            className={cn(
              'w-full lg:w-[40%] order-1 lg:order-2 overflow-hidden transition-all duration-700 ease-in-out',
              selectedModuleId
                ? 'opacity-100 translate-x-0 max-h-[800px]'
                : 'opacity-0 translate-x-10 max-h-0 lg:max-h-full lg:w-0',
            )}
          >
            {selectedModuleId && (
              <div
                className={cn(
                  'transition-all duration-1000 delay-300',
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10',
                )}
              >
                <ModuleDetail moduleId={selectedModuleId} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { modules } from './modules-data'
import { ModuleDetail } from './ModuleDetail'
import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useTranslation } from 'react-i18next'

interface ModuleShowcaseProps {
  onOpenDemo: () => void
}

export function ModuleShowcase({ onOpenDemo }: ModuleShowcaseProps) {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id)
  const { t } = useTranslation()

  return (
    <section
      id="ecosystem"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('module_showcase.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('module_showcase.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Module Navigation List */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <ScrollArea className="w-full whitespace-nowrap lg:h-[600px] rounded-xl border border-white/5 bg-black/20 p-2">
              <div className="flex lg:flex-col gap-2 p-2">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModuleId(module.id)}
                    className={cn(
                      'flex items-center gap-3 p-4 rounded-lg text-left transition-all duration-300 w-full hover:bg-white/5',
                      activeModuleId === module.id
                        ? 'bg-white/10 border border-white/10 shadow-lg'
                        : 'opacity-60 hover:opacity-100',
                    )}
                  >
                    <div
                      className={cn(
                        'w-8 h-8 rounded flex items-center justify-center transition-colors',
                        activeModuleId === module.id
                          ? 'text-white'
                          : 'text-gray-500',
                      )}
                    >
                      <module.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span
                        className={cn(
                          'block font-semibold text-sm transition-colors',
                          activeModuleId === module.id
                            ? 'text-white'
                            : 'text-gray-400',
                        )}
                      >
                        {t(`module_showcase.modules.${module.id}.title`)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="lg:hidden" />
            </ScrollArea>
          </div>

          {/* Module Detail View */}
          <div className="lg:col-span-8 min-h-[500px]">
            <ModuleDetail moduleId={activeModuleId} onOpenDemo={onOpenDemo} />
          </div>
        </div>
      </div>
    </section>
  )
}

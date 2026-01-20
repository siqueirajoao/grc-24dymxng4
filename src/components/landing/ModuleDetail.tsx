import { ArrowRight, CheckCircle2, FileText, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'

interface ModuleDetailProps {
  moduleId: string
}

export function ModuleDetail({ moduleId }: ModuleDetailProps) {
  const module = modules.find((m) => m.id === moduleId) || modules[0]

  // Identify modules in the second orbit (indices 3, 4, 5 in modules-data.ts)
  // These modules are Policies, Regulatory, and Cadocs
  const secondOrbitModuleIds = ['policies', 'regulatory', 'cadocs']
  const isSecondOrbit = secondOrbitModuleIds.includes(module.id)

  return (
    <div className="flex flex-col h-full justify-center lg:pl-4 relative z-20">
      {/* Detail Card */}
      <div key={module.id} className="animate-fade-in space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span
              className={cn(
                'text-[10px] font-bold tracking-widest uppercase',
                module.color,
              )}
            >
              MOD-{module.id.toUpperCase()}
            </span>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-2">
              {module.title}
            </h3>
            <div className="flex items-center gap-3">
              <p className="text-lg text-zinc-400 font-medium">
                {module.subtitle}
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-6" />

          <p className="text-zinc-300 text-lg leading-relaxed max-w-xl">
            {module.description}
          </p>
        </div>

        {/* Normativos */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" />
            <span>Normativos Relacionados</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {module.regulation.map((reg, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors cursor-default"
              >
                {reg}
              </span>
            ))}
          </div>
        </div>

        {/* Funcionalidades */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Funcionalidades</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
            {module.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2
                  className={cn('w-4 h-4 shrink-0 mt-0.5', module.color)}
                />
                <span className="text-zinc-400 text-sm leading-tight">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white rounded-lg h-12 px-8 font-semibold shadow-lg shadow-blue-900/20 transition-all hover:scale-105">
            {isSecondOrbit ? 'Fale com um Especialista' : 'Explorar Módulo'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          {!isSecondOrbit && (
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white rounded-lg h-12 px-8"
            >
              Ver Requisitos
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

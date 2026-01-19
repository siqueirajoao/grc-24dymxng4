import { ArrowRight, Check, ShieldCheck, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'

interface ModuleDetailProps {
  moduleId: string
}

export function ModuleDetail({ moduleId }: ModuleDetailProps) {
  const module = modules.find((m) => m.id === moduleId) || modules[0]

  return (
    <div className="flex flex-col h-full justify-between">
      <div key={module.id} className="animate-fade-in space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-black/50 backdrop-blur-md',
                module.color,
              )}
            >
              <module.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {module.title}
              </h3>
              <p className={cn('text-sm font-medium', module.color)}>
                {module.subtitle}
              </p>
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            {module.description}
          </p>
        </div>

        {/* Regulations */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
            Normativos & Regulação
          </h4>
          <div className="flex flex-wrap gap-2">
            {module.regulation.map((reg, i) => (
              <div
                key={i}
                className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 flex items-center gap-1.5 hover:bg-white/10 transition-colors cursor-default"
              >
                <ShieldCheck className="w-3 h-3 text-zinc-500" />
                {reg}
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
            Funcionalidades Chave
          </h4>
          <div className="grid gap-2">
            {module.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 group/item">
                <div
                  className={cn(
                    'mt-0.5 w-4 h-4 rounded-full flex items-center justify-center border border-white/10 bg-black/50 shrink-0',
                    module.color.replace('text-', 'text-'),
                  )}
                >
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span className="text-zinc-300 text-sm group-hover/item:text-white transition-colors">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3">
        <Button className="bg-white text-black hover:bg-zinc-200 border-0 rounded-lg font-semibold flex-1 shadow-lg shadow-white/5">
          Explorar
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          className="border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg flex-1 bg-transparent"
        >
          Documentação
          <ExternalLink className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'

interface ModuleDetailProps {
  moduleId: string
}

export function ModuleDetail({ moduleId }: ModuleDetailProps) {
  const module = modules.find((m) => m.id === moduleId) || modules[0]

  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-0">
      <div key={module.id} className="animate-fade-in group">
        {/* Module ID Badge */}
        <div className="mb-6 inline-flex items-center gap-2">
          <div
            className={cn(
              'w-1.5 h-6 rounded-full shadow-[0_0_10px_currentColor]',
              module.color.replace('text-', 'bg-'),
            )}
          />
          <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
            MOD-{module.id.toUpperCase()}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
          {module.title}
        </h3>
        <p
          className={cn(
            'text-lg font-medium mb-6 flex items-center gap-3',
            module.color,
          )}
        >
          {module.subtitle}
        </p>

        {/* Description */}
        <p className="text-zinc-400 leading-relaxed text-base md:text-lg mb-8 max-w-xl">
          {module.description}
        </p>

        {/* Regulations Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {module.regulation.map((reg, i) => (
            <div
              key={i}
              className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-xs font-medium text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-default"
            >
              {reg}
            </div>
          ))}
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 gap-3 mb-10">
          {module.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-3 group/item">
              <div
                className={cn(
                  'w-5 h-5 rounded-full flex items-center justify-center border border-white/10 bg-black transition-all group-hover/item:border-white/20 group-hover/item:bg-white/5',
                  module.color.replace('text-', 'text-').replace('400', '500'),
                )}
              >
                <Check className="w-3 h-3" />
              </div>
              <span className="text-zinc-300 text-sm md:text-base group-hover/item:text-white transition-colors">
                {feat}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-zinc-200 border-0 rounded-full font-semibold px-8 h-12 transition-all hover:scale-105 hover:-translate-y-0.5 shadow-lg shadow-white/10"
          >
            Explorar Módulo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/10 text-white hover:bg-white/5 rounded-full h-12 px-8 bg-transparent transition-all hover:border-white/20"
          >
            <ShieldCheck className="mr-2 w-4 h-4" />
            Ver Requisitos
          </Button>
        </div>
      </div>
    </div>
  )
}

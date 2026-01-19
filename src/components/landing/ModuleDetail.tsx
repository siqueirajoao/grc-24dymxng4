import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'

interface ModuleDetailProps {
  moduleId: string
}

export function ModuleDetail({ moduleId }: ModuleDetailProps) {
  const module = modules.find((m) => m.id === moduleId) || modules[0]

  return (
    <div className="h-full flex flex-col justify-center">
      <div
        key={module.id}
        className="relative bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl overflow-hidden animate-fade-in group"
      >
        {/* Subtle dynamic background gradient based on module color */}
        <div
          className={cn(
            'absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 pointer-events-none transition-colors duration-700',
            module.color.replace('text-', 'bg-'),
          )}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap gap-2">
                {module.regulation.map((reg, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-white/5 border-white/10 text-gray-400 font-medium px-3 py-1 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {reg}
                  </Badge>
                ))}
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                  {module.title}
                </h3>
                <p
                  className={cn(
                    'text-lg md:text-xl font-medium flex items-center gap-2',
                    module.color,
                  )}
                >
                  {module.subtitle}
                  <span className="block w-8 h-[1px] bg-current opacity-50" />
                </p>
              </div>
            </div>

            <div
              className={cn(
                'hidden md:flex items-center justify-center p-4 rounded-2xl border bg-black/40 backdrop-blur-sm shadow-xl shrink-0 transition-all duration-500',
                module.borderColor,
                module.color,
                'group-hover:scale-105',
              )}
            >
              <module.icon className="w-10 h-10" />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-lg mb-10 max-w-2xl border-l-2 border-white/5 pl-6">
            {module.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {module.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300 group/feature"
              >
                <div
                  className={cn(
                    'p-1.5 rounded-full bg-black/50',
                    module.color
                      .replace('text-', 'bg-')
                      .replace('400', '900/30'),
                  )}
                >
                  <CheckCircle2 className={cn('w-4 h-4', module.color)} />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover/feature:text-white transition-colors">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto pt-6 flex flex-wrap gap-4 border-t border-white/5">
            <Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-zinc-200 border-0 font-bold px-8 h-12 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Explorar Solução
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/10 text-white bg-transparent hover:bg-white/5 h-12 px-8"
            >
              Agendar Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

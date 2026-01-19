import { CheckCircle2, ArrowRight } from 'lucide-react'
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
    <div
      key={module.id} // Forces re-render for animation
      className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden h-full flex flex-col animate-fade-in"
    >
      {/* Background Decor */}
      <div
        className={cn(
          'absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none',
          module.color.replace('text-', 'bg-'),
        )}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {module.regulation.map((reg, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 font-normal"
                >
                  {reg}
                </Badge>
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {module.title}
            </h3>
            <p className={cn('text-lg font-medium', module.color)}>
              {module.subtitle}
            </p>
          </div>
          <div
            className={cn(
              'hidden md:flex p-3 rounded-xl border bg-black/50',
              module.borderColor,
              module.color,
            )}
          >
            <module.icon className="w-8 h-8" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-2xl">
          {module.description}
        </p>

        {/* Features List */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {module.features.map((feat, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
            >
              <CheckCircle2
                className={cn('w-5 h-5 shrink-0 mt-0.5', module.color)}
              />
              <span className="text-sm text-gray-300">{feat}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 flex flex-wrap gap-4 border-t border-white/5">
          <Button
            size="lg"
            className="rounded-full bg-white text-black hover:bg-gray-200 border-0 font-semibold px-8"
          >
            Explorar Módulo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white/10 text-white hover:bg-white/5 hover:text-white"
          >
            Agendar Demo
          </Button>
        </div>
      </div>
    </div>
  )
}

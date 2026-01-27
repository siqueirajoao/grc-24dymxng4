import { ArrowRight, CheckCircle2, FileText, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { modules } from './modules-data'
import { useTranslation } from 'react-i18next'

interface ModuleDetailProps {
  moduleId: string
  onOpenDemo: () => void
}

export function ModuleDetail({ moduleId, onOpenDemo }: ModuleDetailProps) {
  const { t } = useTranslation()
  const module = modules.find((m) => m.id === moduleId) || modules[0]

  // Retrieve localized data
  const title = t(`module_showcase.modules.${moduleId}.title`)
  const subtitle = t(`module_showcase.modules.${moduleId}.subtitle`)
  const description = t(`module_showcase.modules.${moduleId}.description`)
  const features = t(`module_showcase.modules.${moduleId}.features`, {
    returnObjects: true,
  }) as string[]
  const regulation = t(`module_showcase.modules.${moduleId}.regulation`, {
    returnObjects: true,
  }) as string[]
  const regulationTitle = t(
    `module_showcase.modules.${moduleId}.regulation_title`,
    {
      defaultValue: t('module_showcase.common.related_normatives'),
    },
  )

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
              {title}
            </h3>
            <div className="flex items-center gap-3">
              <p className="text-lg text-zinc-400 font-medium">{subtitle}</p>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-6" />

          <p className="text-zinc-300 text-lg leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* Normativos / Reguladores */}
        {regulation.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
              <FileText className="w-3.5 h-3.5" />
              <span>{regulationTitle}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {regulation.map((reg, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors cursor-default"
                >
                  {reg}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Funcionalidades */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{t('module_showcase.common.features')}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
            {features.map((feat, i) => (
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
          <Button
            onClick={onOpenDemo}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white rounded-lg h-12 px-8 font-semibold shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
          >
            {t('module_showcase.common.talk_specialist')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

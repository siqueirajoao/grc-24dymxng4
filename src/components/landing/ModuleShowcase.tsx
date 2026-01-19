import { useState } from 'react'
import {
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  BookOpen,
  Lock,
  Users,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useScrollObserver } from '@/hooks/use-scroll-observer'

const modules = [
  {
    id: 'risks',
    title: 'Gestão de Riscos',
    subtitle: 'Enterprise Risk Management',
    description:
      'Estrutura completa para identificação, avaliação e mitigação de riscos corporativos. Utilize matrizes dinâmicas 5x5 e heatmaps interativos para priorizar o que realmente importa.',
    features: [
      'Matrizes de Risco e Controles (RCSA) dinâmicas',
      'Indicadores Chave de Risco (KRIs) automatizados',
      'Cálculo de exposição e capital regulatório',
      'Integração nativa com perdas operacionais',
    ],
    regulation: ['BACEN 4.557', 'Basileia III', 'ISO 31000'],
    icon: ShieldAlert,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20',
  },
  {
    id: 'controls',
    title: 'Controles Internos',
    subtitle: 'Internal Controls System',
    description:
      'Garanta a efetividade operacional com um catálogo robusto de controles preventivos e detectivos. Monitore testes de desenho (TDE) e efetividade (TOE) em tempo real.',
    features: [
      'Biblioteca de controles e testes padronizada',
      'Workflow de remediação de apontamentos',
      'Certificação de controles (SOX/Compliance)',
      'Rastreabilidade total de evidências',
    ],
    regulation: ['COSO 2013', 'SOX', 'ISO 37301'],
    icon: ShieldCheck,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    id: 'audit',
    title: 'Auditoria Interna',
    subtitle: 'Internal Audit Management',
    description:
      'Digitalize todo o ciclo de auditoria, do planejamento anual ao follow-up dos planos de ação. Elimine planilhas e centralize papéis de trabalho.',
    features: [
      'Universo de auditoria baseado em riscos',
      'Papéis de trabalho eletrônicos integrados',
      'Geração automática de relatórios de auditoria',
      'Monitoramento contínuo de recomendações',
    ],
    regulation: ['IPPF (IIA)', 'Res. CMN 4.879'],
    icon: FileCheck,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
  {
    id: 'regulatory',
    title: 'Regulatório & CADOCs',
    subtitle: 'Regulatory Compliance',
    description:
      'Automação inteligente para captura de normas e geração de arquivos regulatórios. Mantenha-se em conformidade com as exigências do BACEN e CVM.',
    features: [
      'Feed regulatório com IA para classificação',
      'Geração de CADOCs (2061, 4010, 5011)',
      'Controle de prazos e obrigações',
      'Inventário de normas e políticas',
    ],
    regulation: ['BACEN', 'CVM', 'ANBIMA'],
    icon: BookOpen,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    id: 'lgpd',
    title: 'LGPD & Privacidade',
    subtitle: 'Data Privacy',
    description:
      'Gestão completa do ciclo de vida dos dados pessoais. Mapeie processos (ROPA), avalie riscos (DPIA) e atenda aos direitos dos titulares com agilidade.',
    features: [
      'Data Mapping e ROPA automatizados',
      'Avaliação de Impacto (RIPD/DPIA)',
      'Portal de atendimento ao titular (DSAR)',
      'Gestão de incidentes de privacidade',
    ],
    regulation: ['Lei 13.709 (LGPD)', 'GDPR'],
    icon: Lock,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    id: 'third-party',
    title: 'Gestão de Terceiros',
    subtitle: 'Third Party Risk (TPR)',
    description:
      'Avalie e monitore riscos na sua cadeia de suprimentos. Due diligence, onboarding e monitoramento contínuo de fornecedores críticos.',
    features: [
      'Questionários de avaliação automatizados',
      'Score de risco de fornecedores',
      'Monitoramento de certidões e mídias',
      'Gestão de contratos e níveis de serviço',
    ],
    regulation: ['Res. CMN 4.658', 'Res. BCB 85'],
    icon: Users,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
  },
]

export function ModuleShowcase() {
  const [activeTab, setActiveTab] = useState(modules[0].id)
  const { ref, isVisible } = useScrollObserver({ threshold: 0.1 })

  const activeModule = modules.find((m) => m.id === activeTab) || modules[0]

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent" />
      <div className="absolute -left-[10%] top-[20%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 transition-all duration-700',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            Módulos Integrados
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Uma Plataforma, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Múltiplas Soluções
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Navegue pelos módulos da plataforma Lawyn GRC e descubra como
            centralizamos toda a governança da sua instituição financeira.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">
          {/* Navigation */}
          <div
            className={cn(
              'lg:col-span-4 flex flex-col gap-2 transition-all duration-700 delay-100',
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10',
            )}
          >
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={cn(
                  'group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border',
                  activeTab === module.id
                    ? 'bg-white/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5 text-gray-400',
                )}
              >
                <div
                  className={cn(
                    'p-2.5 rounded-lg transition-colors',
                    activeTab === module.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 group-hover:bg-white/10 group-hover:text-white',
                  )}
                >
                  <module.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span
                    className={cn(
                      'block font-semibold text-lg transition-colors',
                      activeTab === module.id
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-white',
                    )}
                  >
                    {module.title}
                  </span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400">
                    {module.subtitle}
                  </span>
                </div>
                <ArrowRight
                  className={cn(
                    'w-4 h-4 transition-all',
                    activeTab === module.id
                      ? 'text-blue-400 opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0',
                  )}
                />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div
            className={cn(
              'lg:col-span-8 transition-all duration-700 delay-200',
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10',
            )}
          >
            <div className="relative h-full">
              {modules.map((module) => {
                if (module.id !== activeTab) return null
                return (
                  <div
                    key={module.id}
                    className="h-full animate-fade-in flex flex-col"
                  >
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden flex-1">
                      {/* Decorative Background inside card */}
                      <div
                        className={cn(
                          'absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none',
                          module.bg.replace('/10', '/30'),
                        )}
                      />

                      <div className="relative z-10 grid lg:grid-cols-2 gap-12 h-full">
                        {/* Text Content */}
                        <div className="flex flex-col justify-center">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {module.regulation.map((reg, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                              >
                                {reg}
                              </Badge>
                            ))}
                          </div>

                          <h3 className="text-3xl font-bold text-white mb-4">
                            {module.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                            {module.description}
                          </p>

                          <ul className="space-y-4 mb-8">
                            {module.features.map((feat, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-gray-300"
                              >
                                <div
                                  className={cn(
                                    'mt-1 p-0.5 rounded-full bg-black/50 border',
                                    module.border,
                                  )}
                                >
                                  <CheckCircle2
                                    className={cn('w-4 h-4', module.color)}
                                  />
                                </div>
                                <span className="text-sm md:text-base">
                                  {feat}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-auto pt-4">
                            <Button
                              className={cn(
                                'rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-105',
                                module.bg.replace('/10', ''), // Use solid color if possible, or mapping needed.
                                'bg-white text-black hover:bg-gray-200 border-0',
                              )}
                            >
                              Explorar Módulo
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Visual / Mockup Area */}
                        <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-0">
                          <ModuleVisual module={module} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ModuleVisual({ module }: { module: any }) {
  // Generic abstract visuals based on module type
  return (
    <div className="w-full aspect-square max-w-[400px] relative">
      {/* Container Frame */}
      <div className="absolute inset-0 bg-black/40 border border-white/10 rounded-xl backdrop-blur-sm p-4 flex flex-col shadow-2xl">
        {/* Fake Window Header */}
        <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>

        {/* Dynamic Content based on Module ID */}
        <div className="flex-1 relative overflow-hidden rounded-lg bg-black/20 border border-white/5">
          {module.id === 'risks' && (
            <div className="p-4 grid grid-cols-5 gap-2 h-full content-center opacity-80">
              {Array.from({ length: 25 }).map((_, i) => {
                const riskLevel = Math.random()
                let bg = 'bg-emerald-500/20 border-emerald-500/30'
                if (riskLevel > 0.7) bg = 'bg-red-500/20 border-red-500/30'
                else if (riskLevel > 0.4)
                  bg = 'bg-amber-500/20 border-amber-500/30'
                return (
                  <div
                    key={i}
                    className={cn(
                      'aspect-square rounded border animate-pulse',
                      bg,
                    )}
                    style={{ animationDelay: `${i * 50}ms` }}
                  />
                )
              })}
            </div>
          )}

          {module.id === 'controls' && (
            <div className="p-4 space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5 animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-8 h-8 rounded-full border-2 border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-24 bg-white/20 rounded" />
                    <div className="h-1.5 w-16 bg-white/10 rounded" />
                  </div>
                  <div className="h-6 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20" />
                </div>
              ))}
            </div>
          )}

          {module.id === 'audit' && (
            <div className="p-6 relative h-full flex flex-col">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-amber-500/20 border-t-amber-500 animate-spin" />
              <div className="space-y-4 mt-8">
                <div className="h-2 w-3/4 bg-amber-500/30 rounded animate-pulse" />
                <div className="h-2 w-1/2 bg-amber-500/20 rounded animate-pulse delay-75" />
                <div className="h-2 w-5/6 bg-amber-500/20 rounded animate-pulse delay-150" />
                <div className="h-32 w-full bg-white/5 rounded border border-white/5 p-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="h-2 w-20 bg-white/20 rounded" />
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded mb-2" />
                  <div className="h-1.5 w-full bg-white/10 rounded mb-2" />
                  <div className="h-1.5 w-2/3 bg-white/10 rounded" />
                </div>
              </div>
            </div>
          )}

          {module.id === 'regulatory' && (
            <div className="p-4 flex flex-col h-full gap-3">
              <div className="flex gap-2 overflow-hidden mb-2">
                <div className="h-20 w-16 bg-blue-500/20 border border-blue-500/30 rounded flex-shrink-0 animate-fade-in-up" />
                <div className="h-20 w-16 bg-white/5 border border-white/10 rounded flex-shrink-0 animate-fade-in-up delay-100" />
                <div className="h-20 w-16 bg-white/5 border border-white/10 rounded flex-shrink-0 animate-fade-in-up delay-200" />
              </div>
              <div className="flex-1 bg-white/5 rounded border border-white/5 p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="h-2 w-20 bg-blue-500/40 rounded" />
                  <div className="h-4 w-12 bg-blue-500/20 rounded-full" />
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[70%]" />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="h-12 bg-black/40 rounded border border-white/5" />
                  <div className="h-12 bg-black/40 rounded border border-white/5" />
                </div>
              </div>
            </div>
          )}

          {module.id === 'lgpd' && (
            <div className="flex items-center justify-center h-full relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
              <div className="relative z-10 w-24 h-24 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-float">
                <Lock className="w-10 h-10 text-purple-400" />
              </div>
              {/* Nodes */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/50 rounded-full animate-pulse delay-150" />
              {/* Connections (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-purple-500/20">
                <line x1="50%" y1="50%" x2="25%" y2="25%" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" strokeWidth="1" />
              </svg>
            </div>
          )}

          {module.id === 'third-party' && (
            <div className="p-4 grid grid-cols-1 gap-3 content-center h-full">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 border-b border-white/5 last:border-0"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-xs text-pink-300 font-bold border border-pink-500/30">
                    FR
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-20 bg-white/20 rounded mb-1.5" />
                    <div className="h-1.5 w-12 bg-white/10 rounded" />
                  </div>
                  <div className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/20">
                    Low Risk
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

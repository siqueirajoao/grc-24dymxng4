import { Binoculars, Calendar, FileText, Target } from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Binoculars,
    title: 'Controle de Tarefas',
    description:
      'Gerencie seus planos de ação e pendências. Defina responsáveis e datas limite para sempre priorizar o que for necessário.',
  },
  {
    icon: Calendar,
    title: 'Gestão de Riscos',
    description:
      'Cadastre e monitore os riscos organizacionais. Acompanhe os riscos em aberto e sua severidade (crítico, alto, médio e baixo).',
  },
  {
    icon: FileText,
    title: 'CADOCs e RelatóriosCs',
    description:
      'Gerencie os documentos obrigatórios enviados ao banco central. Acompanhe documentos pendentes, atrasados e enviados e sua periodicidade.',
  },
  {
    icon: FileText,
    title: 'Gestão de Terceiros',
    description:
      'Faça a gestão de riscos de fornecedores, parceiros e terceiros críticos. Acompanhe a visão geral, cadastro de terceiros, due diligente, contratos e monitoramento constante.',
  },
  {
    icon: FileText,
    title: 'BIA & Continuidade',
    description:
      'Analise de impacto no negócio e continuidade operacional. Tenha uma visão geral da sua empresa e identifique os processos por criticidade e status das análises.',
  },
  {
    icon: FileText,
    title: 'Regulatório',
    description:
      'Realize o acompanhamento regulatório. Monitore atualizações normativas e gerencie a conformidade.',
  },
  {
    icon: FileText,
    title: 'Privacy & LGPD',
    description:
      'Governança de dados pessoais, risco regulatório e accountability. Tenha acesso ao Registro de Operações de Tratamento (ROPA), acompanhe os Relatórios de Impacto (RIPD) e o catálogo de riscos de privacidade em desenvolvimento.',
  },
  {
    icon: Target,
    title: 'Auditorias',
    description:
      'Planejamento e acompanhamento de auditorias. Visão completa das autorias em andamento, planejadas e sua taxa de êxito. Cadastre requerimentos e apontamentos feitos durante as auditorias.',
  },
  {
    icon: FileText,
    title: 'Políticas',
    description:
      'Tenha uma biblioteca de políticas internas com controle de aceite e versionamento. Cadastre novas políticas e seus status.',
  },
]

export function FeaturesSection() {
  const { ref, isVisible } = useScrollObserver({ threshold: 0.1 })

  return (
    <section id="features-grid" className="py-24 bg-black relative z-10">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={cn(
            'text-center mb-16 space-y-4 transition-all duration-700',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          )}
        >
          <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">
            FUNÇÕES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Conheça as funcionalidades da Lawyn
          </h2>
          <p className="text-gray-400 text-lg">
            E veja como podemos mudar seu fluxo de trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                'group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20',
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-white group-hover:border-white/40 transition-colors">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

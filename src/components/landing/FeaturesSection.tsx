import {
  Activity,
  FileSearch,
  FileSpreadsheet,
  ListTodo,
  Lock,
  Scale,
  ScrollText,
  ShieldAlert,
  Users,
} from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: ListTodo,
    title: 'Controle de Tarefas',
    description:
      'Gerencie seus planos de ação e pendências. Defina responsáveis e datas limite para sempre priorizar o que for necessário.',
  },
  {
    icon: ShieldAlert,
    title: 'Gestão de Riscos',
    description:
      'Cadastre e monitore os riscos organizacionais. Acompanhe os riscos em aberto e sua severidade (crítico, alto, médio e baixo).',
  },
  {
    icon: FileSpreadsheet,
    title: 'Reportes Regulatórios',
    description:
      'Gerencie os documentos obrigatórios e relatórios de compliance. Acompanhe obrigações pendentes e prazos críticos.',
  },
  {
    icon: Users,
    title: 'Gestão de Terceiros',
    description:
      'Faça a gestão de riscos de fornecedores e parceiros críticos. Due diligence, contratos e monitoramento constante.',
  },
  {
    icon: Activity,
    title: 'Continuidade',
    description:
      'Análise de impacto no negócio e continuidade operacional. Identifique processos críticos e garanta resiliência.',
  },
  {
    icon: Scale,
    title: 'Regulatório',
    description:
      'Realize o acompanhamento regulatório. Monitore atualizações normativas de qualquer órgão e gerencie a conformidade.',
  },
  {
    icon: Lock,
    title: 'Privacidade de Dados',
    description:
      'Governança de dados pessoais e accountability. Gestão de inventário de dados, riscos e direitos dos titulares.',
  },
  {
    icon: FileSearch,
    title: 'Auditorias',
    description:
      'Planejamento e acompanhamento de auditorias. Visão completa das auditorias em andamento e taxas de resolução.',
  },
  {
    icon: ScrollText,
    title: 'Políticas',
    description:
      'Biblioteca de políticas internas com controle de aceite e versionamento. Garanta a ciência dos colaboradores.',
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
          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase">
            FUNCIONALIDADES
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
                'transition-all duration-500 ease-out',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20',
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-1 group cursor-default">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-white group-hover:border-blue-400 group-hover:text-blue-400 transition-all duration-300 shadow-lg shadow-transparent group-hover:shadow-blue-900/20">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

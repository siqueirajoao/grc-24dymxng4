import {
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  BookOpen,
  FileText,
  Lock,
  Users,
  Activity,
  ListTodo,
} from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

const modules = [
  {
    title: 'Gestão de Riscos',
    desc: 'Identifique, avalie e mitigue riscos corporativos com matrizes dinâmicas 5x5.',
    icon: ShieldAlert,
  },
  {
    title: 'Controles Internos',
    desc: 'Catálogo de controles preventivos e detectivos com gestão de evidências.',
    icon: ShieldCheck,
  },
  {
    title: 'Auditorias & Achados',
    desc: 'Planejamento e execução de auditorias com workflow de correção de apontamentos.',
    icon: FileCheck,
  },
  {
    title: 'Políticas & Normas',
    desc: 'Gestão do ciclo de vida de normativos e monitoramento regulatório.',
    icon: BookOpen,
  },
  {
    title: 'CADOCs & Relatórios',
    desc: 'Automação e controle de entregas regulatórias para BACEN e CVM.',
    icon: FileText,
  },
  {
    title: 'LGPD & Privacidade',
    desc: 'Mapeamento de dados (ROPA), gestão de consentimento e atendimento a titulares.',
    icon: Lock,
  },
  {
    title: 'Gestão de Terceiros',
    desc: 'Due diligence, homologação e monitoramento contínuo de fornecedores.',
    icon: Users,
  },
  {
    title: 'BIA & Continuidade',
    desc: 'Análise de impacto no negócio e planos de continuidade operacional.',
    icon: Activity,
  },
  {
    title: 'Gestão de Tarefas',
    desc: 'Central de obrigações e follow-up para equipes de conformidade.',
    icon: ListTodo,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Plataforma GRC Integrada
          </h2>
          <p className="text-gray-400 text-lg">
            Uma suíte completa de módulos conectados para cobrir todas as
            dimensões de governança e riscos da sua instituição.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <FeatureCard key={i} module={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ module, index }: { module: any; index: number }) {
  const { ref, isVisible } = useScrollObserver({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        'group p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900/50 to-black border border-blue-800/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 shadow-lg shadow-blue-900/10">
        <module.icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">
        {module.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
        {module.desc}
      </p>
    </div>
  )
}

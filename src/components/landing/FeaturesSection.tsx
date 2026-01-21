import { Shield, Zap, Lock, Globe, BarChart3, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Governança Unificada',
    description:
      'Centralize todas as políticas, riscos e controles em uma única plataforma integrada e auditável.',
  },
  {
    icon: Zap,
    title: 'Automação Inteligente',
    description:
      'Automatize fluxos de trabalho, testes de controle e coleta de evidências para reduzir esforço manual.',
  },
  {
    icon: Lock,
    title: 'Segurança de Dados',
    description:
      'Proteção de nível bancário com criptografia de ponta a ponta e gestão granular de acessos.',
  },
  {
    icon: Globe,
    title: 'Monitoramento Regulatório',
    description:
      'Acompanhe mudanças nas regulações em tempo real e atualize seus controles automaticamente.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards Executivos',
    description:
      'Visão clara da postura de risco e conformidade da organização para tomada de decisão ágil.',
  },
  {
    icon: Users,
    title: 'Colaboração em Tempo Real',
    description:
      'Conecte as três linhas de defesa em um ambiente colaborativo e transparente.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Tudo o que você precisa para
            <span className="block text-blue-500">
              Gestão de GRC de Alta Performance
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Recursos avançados projetados para simplificar a complexidade e
            elevar a maturidade de governança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

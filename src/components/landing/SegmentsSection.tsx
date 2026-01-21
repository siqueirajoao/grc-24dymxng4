import { Building2, Landmark, Stethoscope, Plane } from 'lucide-react'

const segments = [
  {
    icon: Landmark,
    title: 'Instituições Financeiras',
    description:
      'Bancos, Fintechs, Corretoras e Meios de Pagamento regulados pelo BACEN e CVM.',
  },
  {
    icon: Stethoscope,
    title: 'Saúde e Pharma',
    description:
      'Hospitais, Laboratórios e Operadoras de Saúde com foco em ANS e Anvisa.',
  },
  {
    icon: Building2,
    title: 'Grandes Corporações',
    description:
      'Empresas de capital aberto ou multinacionais com complexidade de governança.',
  },
  {
    icon: Plane,
    title: 'Infraestrutura',
    description:
      'Setores regulados como Energia, Telecom, Logística e Aviação.',
  },
]

export function SegmentsSection() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Para quem é a Lawyn?
          </h2>
          <p className="text-gray-400">
            Soluções adaptadas para setores altamente regulados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-black border border-white/10 hover:border-blue-500/50 transition-colors group"
            >
              <segment.icon className="w-8 h-8 text-gray-500 group-hover:text-blue-500 transition-colors mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                {segment.title}
              </h3>
              <p className="text-sm text-gray-400">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

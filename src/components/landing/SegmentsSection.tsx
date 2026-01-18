import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

const segments = [
  {
    title: 'Bancos (S1 a S4)',
    desc: 'Estrutura completa para gestão de riscos de mercado, crédito e operacional conforme Basileia.',
    gradient: 'from-blue-900/20 to-indigo-900/20',
  },
  {
    title: 'Instituições de Pagamento',
    desc: 'Conformidade simplificada com as circulares do BACEN para IPs e Fintechs.',
    gradient: 'from-indigo-900/20 to-violet-900/20',
  },
  {
    title: 'Financeiras & SCD/SEP',
    desc: 'Controles robustos para operações de crédito e reportes regulatórios.',
    gradient: 'from-violet-900/20 to-purple-900/20',
  },
]

export function SegmentsSection() {
  const { ref, isVisible } = useScrollObserver({ threshold: 0.2 })

  return (
    <section
      id="segments"
      className="py-24 border-t border-white/5 relative z-10 bg-black/50"
    >
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={cn(
            'transition-all duration-700 transform',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
            Feito para o Mercado Financeiro
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((seg, i) => (
            <div
              key={i}
              className={cn(
                'relative overflow-hidden p-8 rounded-3xl border border-white/10 transition-all duration-700 hover:border-blue-500/50 group',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20',
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                  seg.gradient,
                )}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {seg.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{seg.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

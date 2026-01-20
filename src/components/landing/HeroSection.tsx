import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  FileSpreadsheet,
  Scale,
  ScrollText,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  onOpenDemo: () => void
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const scrollToEcosystem = () => {
    const element = document.getElementById('ecosystem')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const cards = [
    {
      icon: ShieldCheck,
      title: 'Conformidade',
      description: 'Gestão integrada',
      color: 'text-emerald-400',
      bg: 'bg-emerald-900/10',
      border: 'border-emerald-500/20',
    },
    {
      icon: FileSpreadsheet,
      title: 'CADOCs e Relatórios',
      description: 'Geração e Validação',
      color: 'text-blue-400',
      bg: 'bg-blue-900/10',
      border: 'border-blue-500/20',
    },
    {
      icon: Scale,
      title: 'Regulamentações',
      description: 'Monitoramento contínuo',
      color: 'text-indigo-400',
      bg: 'bg-indigo-900/10',
      border: 'border-indigo-500/20',
    },
    {
      icon: ScrollText,
      title: 'Políticas',
      description: 'Governança corporativa',
      color: 'text-cyan-400',
      bg: 'bg-cyan-900/10',
      border: 'border-cyan-500/20',
    },
  ]

  return (
    <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden py-20 lg:py-0 bg-black">
      {/* Background Gradients and Orbits */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Orbital Rings - Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full animate-spin-slow pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-blue-500/5 rounded-full animate-reverse-spin-slow pointer-events-none z-0" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow z-0" />

      {/* Content Container */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-4 md:px-6 lg:px-8 w-full overflow-visible">
        {/* Left Column: Text Content */}
        {/* z-index ensures text is above any background elements. flex-1 allows text to take distinct space without overlap. */}
        <div className="flex flex-col text-left space-y-8 w-full lg:flex-1 lg:max-w-[650px] xl:max-w-[800px] z-10 order-1 overflow-visible">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1] w-full whitespace-normal overflow-visible">
            <span className="block animate-fade-in-up [animation-delay:200ms] opacity-0">
              Sua Solução para
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-100 to-white animate-fade-in-up [animation-delay:400ms] opacity-0 block pb-2 whitespace-normal lg:whitespace-nowrap">
              Ambientes Regulados
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed animate-fade-in-up [animation-delay:600ms] opacity-0 font-light max-w-xl">
            Lawyn é a plataforma GRC que unifica Governança, Riscos e Compliance
            em um único sistema operacional projetado para lidar com a
            complexidade regulatória de qualquer setor.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-in-up [animation-delay:800ms] opacity-0 w-full sm:w-auto pt-2">
            <Button
              size="lg"
              onClick={onOpenDemo}
              className="h-12 sm:h-14 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 w-full sm:w-auto"
            >
              Solicitar Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToEcosystem}
              className="h-12 sm:h-14 px-8 text-base border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-full backdrop-blur-md transition-all hover:scale-105 w-full sm:w-auto"
            >
              Explorar Ecossistema
              <Layers className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Column: Cards Grid */}
        {/* Order 2 on mobile (below text), but flex-row puts it to the right on desktop */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end z-10 order-2 animate-fade-in-up [animation-delay:1000ms] opacity-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[600px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={cn(
                  'group p-6 rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-900/20 relative overflow-hidden',
                  card.border,
                )}
              >
                {/* Gradient background effect on hover */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500',
                    card.color.replace('text-', 'from-'),
                  )}
                />

                <div
                  className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors relative z-10',
                    card.bg,
                  )}
                >
                  <card.icon className={cn('w-6 h-6', card.color)} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100 transition-colors relative z-10">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors relative z-10">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

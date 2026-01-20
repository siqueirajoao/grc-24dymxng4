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

export function HeroSection() {
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
      title: 'Cadocs',
      description: 'Automação total',
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
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients and Orbits */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Orbital Rings - Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-blue-500/5 rounded-full animate-reverse-spin-slow pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center px-4">
        {/* Left Column: Text Content */}
        <div className="flex flex-col text-left space-y-8 order-2 lg:order-1">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            <span className="block animate-fade-in-up [animation-delay:200ms] opacity-0">
              Sua Solução para
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-100 to-white animate-fade-in-up [animation-delay:400ms] opacity-0 block pb-2">
              Ambientes Regulados
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:600ms] opacity-0 font-light">
            Lawyn é a plataforma GRC que unifica Governança, Riscos e Compliance
            em um único sistema operacional projetado para lidar com a
            complexidade regulatória de qualquer setor.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up [animation-delay:800ms] opacity-0 w-full sm:w-auto">
            <Button
              size="lg"
              className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 w-full sm:w-auto"
            >
              Solicitar Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToEcosystem}
              className="h-14 px-8 text-base border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-full backdrop-blur-md transition-all hover:scale-105 w-full sm:w-auto"
            >
              Explorar Ecossistema
              <Layers className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 order-1 lg:order-2 animate-fade-in-up [animation-delay:1000ms] opacity-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className={cn(
                'group p-6 rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-white/10',
                card.border,
              )}
            >
              <div
                className={cn(
                  'w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors',
                  card.bg,
                )}
              >
                <card.icon className={cn('w-6 h-6', card.color)} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

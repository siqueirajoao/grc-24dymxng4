import { Button } from '@/components/ui/button'
import { ArrowRight, Layers, LayoutGrid, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const scrollToEcosystem = () => {
    const element = document.getElementById('ecosystem')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients and Orbits */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Orbital Rings - Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-blue-500/5 rounded-full animate-reverse-spin-slow pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white max-w-6xl mx-auto leading-[1.1]">
          <span className="block animate-fade-in-up [animation-delay:200ms] opacity-0">
            A Plataforma de
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-100 to-white animate-fade-in-up [animation-delay:400ms] opacity-0 block">
            Ambientes Regulatórios
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:600ms] opacity-0 font-light">
          Lawyn é a plataforma GRC que unifica Governança, Riscos e Compliance
          em um único sistema operacional projetado para lidar com a
          complexidade regulatória de qualquer setor.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up [animation-delay:800ms] opacity-0 w-full sm:w-auto px-4 sm:px-0">
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

        {/* Trust Badges / Mini features below CTA */}
        <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-16 opacity-0 animate-fade-in-up [animation-delay:1000ms]">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm font-medium">
              Compliance & Governança
            </span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <LayoutGrid className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm font-medium">
              Estrutura Modular
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

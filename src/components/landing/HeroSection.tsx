import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { TypingEffect } from '@/components/TypingEffect'
import { cn } from '@/lib/utils'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic light effect background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/50 text-blue-300 text-sm font-medium mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Nova versão 2.0 disponível
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1] text-white max-w-5xl mx-auto">
          <span className="block mb-2 animate-fade-in-up [animation-delay:200ms] opacity-0 fill-mode-forwards">
            Governança
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 animate-fade-in-up [animation-delay:400ms] opacity-0 fill-mode-forwards block">
            <TypingEffect
              text="Inteligente & Segura"
              startDelay={1000}
              speed={100}
              cursorClassName="bg-blue-400 h-[0.8em]"
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:600ms] opacity-0 fill-mode-forwards">
          Centralize a gestão de riscos, compliance regulatório e controles
          internos em uma única plataforma projetada para o futuro do sistema
          financeiro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:800ms] opacity-0 fill-mode-forwards">
          <Button
            size="lg"
            className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-105"
          >
            Solicitar Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-base border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Ver Módulos
          </Button>
        </div>
      </div>
    </section>
  )
}

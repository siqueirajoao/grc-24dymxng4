import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { CountUp } from '@/components/CountUp'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

export function ComplianceSection() {
  const { ref, isVisible } = useScrollObserver({ threshold: 0.3 })

  return (
    <section
      id="compliance"
      className="py-24 bg-gradient-to-b from-black to-blue-950/20 relative z-10 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col lg:flex-row items-center gap-16"
          ref={ref}
        >
          {/* Text Content */}
          <div
            className={cn(
              'lg:w-1/2 space-y-8 transition-all duration-700 delay-100',
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20',
            )}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Conformidade Garantida com{' '}
              <span className="text-blue-500">BACEN e CVM</span>
            </h2>

            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="text-sm text-gray-400">Compliance</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  <CountUp end={50} prefix="+" />
                </div>
                <div className="text-sm text-gray-400">Relatórios Auto</div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Matriz de Riscos 5x5 ajustável',
                'Automação de CADOCs 2061, 4010 e 5011',
                'Trilhas de auditoria imutáveis',
                'Gestão de incidentes e perdas operacionais',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-lg text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="mt-6 h-12 px-8 bg-white text-black hover:bg-gray-200 border-0 font-semibold rounded-full transition-transform hover:scale-105"
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div
            className={cn(
              'lg:w-1/2 relative perspective-1000 transition-all duration-1000 delay-300',
              isVisible
                ? 'opacity-100 translate-x-0 rotate-y-0'
                : 'opacity-0 translate-x-20 rotate-y-12',
            )}
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A] p-4 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 border-t-blue-500/50">
              {/* Fake Dashboard UI */}
              <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
                <div className="w-32 h-8 bg-white/10 rounded-md animate-pulse"></div>
                <div className="flex-1"></div>
                <div className="w-8 h-8 rounded-full bg-white/10"></div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="h-24 rounded-lg bg-blue-900/20 border border-blue-800/30 p-4">
                  <div className="h-2 w-16 bg-blue-800/50 rounded mb-2"></div>
                  <div className="h-8 w-12 bg-blue-500/20 rounded animate-pulse"></div>
                </div>
                <div className="h-24 rounded-lg bg-red-900/10 border border-red-800/20 p-4">
                  <div className="h-2 w-16 bg-red-800/50 rounded mb-2"></div>
                  <div className="h-8 w-12 bg-red-500/20 rounded animate-pulse"></div>
                </div>
                <div className="h-24 rounded-lg bg-emerald-900/10 border border-emerald-800/20 p-4">
                  <div className="h-2 w-16 bg-emerald-800/50 rounded mb-2"></div>
                  <div className="h-8 w-12 bg-emerald-500/20 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 rounded-lg bg-white/5 p-4 border border-white/5">
                  <div className="flex items-end gap-2 h-full pb-2">
                    <div className="w-full bg-blue-500/40 rounded-t h-[40%]"></div>
                    <div className="w-full bg-blue-500/60 rounded-t h-[70%]"></div>
                    <div className="w-full bg-blue-500/30 rounded-t h-[30%]"></div>
                    <div className="w-full bg-blue-500/80 rounded-t h-[85%]"></div>
                    <div className="w-full bg-blue-500/50 rounded-t h-[50%]"></div>
                  </div>
                </div>
                <div className="h-40 rounded-lg bg-white/5 p-4 border border-white/5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin"></div>
                </div>
              </div>

              {/* Overlay Badge */}
              <div className="absolute bottom-8 right-8 bg-blue-600 text-white px-5 py-3 rounded-lg font-bold shadow-lg shadow-blue-900/50 animate-float">
                Score: 98/100
              </div>
            </div>

            {/* Glow Effect behind dashboard */}
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Box,
  Layers,
  Shield,
  Database,
  FileText,
  Settings,
  AlignLeft,
  CheckCircle2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

interface HeroSectionProps {
  onOpenDemo: () => void
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const { t } = useTranslation()

  const scrollToEcosystem = () => {
    const element = document.getElementById('ecosystem')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden py-24 lg:py-0 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full animate-spin-slow pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-blue-500/5 rounded-full animate-reverse-spin-slow pointer-events-none z-0" />
      <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow z-0" />
      <div className="absolute top-1/3 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 px-4 md:px-6 w-full">
        {/* Left Content */}
        <div className="flex flex-col text-left space-y-6 lg:space-y-8 w-full lg:w-[45%] z-10 order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            <span className="block animate-fade-in-up [animation-delay:200ms] opacity-0">
              {t('hero.title_prefix')}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-white animate-fade-in-up [animation-delay:400ms] opacity-0 block pb-2 mt-2">
              {t('hero.title_highlight')}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed animate-fade-in-up [animation-delay:600ms] opacity-0 font-light max-w-xl">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:800ms] opacity-0 pt-2">
            <Button
              size="lg"
              onClick={onOpenDemo}
              className="h-12 sm:h-14 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 w-full sm:w-auto"
            >
              {t('nav.request_demo')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right UI Mockup */}
        <div className="w-full lg:w-[55%] relative z-10 order-2 mt-8 lg:mt-0 animate-fade-in-up [animation-delay:1000ms] opacity-0">
          <div className="relative rounded-2xl border border-white/10 bg-[#0a0f1a]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-row aspect-square sm:aspect-[4/3] lg:aspect-[16/11] w-full max-w-[700px] ml-auto">
            {/* Grid Background inside the app */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Sidebar */}
            <div className="w-12 sm:w-16 border-r border-white/10 bg-black/50 flex flex-col items-center py-4 gap-6 z-10 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col gap-4">
                {[Box, Layers, Database, FileText, Settings].map((Icon, i) => (
                  <div
                    key={i}
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer',
                      i === 1
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5',
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col z-10 relative overflow-hidden">
              {/* Header */}
              <div className="h-14 border-b border-white/10 flex items-center px-4 sm:px-6 justify-between bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="h-6 px-3 bg-white/5 border border-white/10 rounded-md flex items-center ml-2">
                    <AlignLeft className="w-3 h-3 text-gray-400 mr-2" />
                    <span className="text-xs text-gray-300 font-medium">
                      Mapping Rules
                    </span>
                  </div>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="flex-1 relative">
                {/* Connecting Lines (Desktop) */}
                <div className="hidden sm:block absolute top-[4.5rem] left-[14rem] w-[1rem] h-px bg-blue-500/40" />
                <div className="hidden sm:block absolute top-[4.5rem] left-[15rem] w-px h-[10.5rem] bg-blue-500/40" />
                <div className="hidden sm:block absolute top-[9.5rem] left-[15rem] w-[1rem] h-px bg-blue-500/40" />
                <div className="hidden sm:block absolute top-[15rem] left-[15rem] w-[1rem] h-px bg-blue-500/40" />

                {/* Connecting Lines (Mobile) */}
                <div className="block sm:hidden absolute top-[4.5rem] left-[11rem] w-[0.75rem] h-px bg-blue-500/40" />
                <div className="block sm:hidden absolute top-[4.5rem] left-[11.75rem] w-px h-[10rem] bg-blue-500/40" />
                <div className="block sm:hidden absolute top-[10rem] left-[11.75rem] w-[0.75rem] h-px bg-blue-500/40" />
                <div className="block sm:hidden absolute top-[14.5rem] left-[11.75rem] w-[0.75rem] h-px bg-blue-500/40" />

                {/* Root Node */}
                <div className="absolute top-8 left-4 sm:left-8 p-3 sm:p-4 rounded-xl border border-blue-500/30 bg-blue-900/20 backdrop-blur-md w-40 sm:w-48 shadow-lg z-20">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <div className="h-2 w-16 bg-blue-300/50 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-white/20 rounded" />
                    <div className="h-1.5 w-4/5 bg-white/20 rounded" />
                  </div>
                </div>

                {/* Child Nodes */}
                <div className="absolute top-[7.5rem] sm:top-[7rem] left-[12.5rem] sm:left-[16rem] p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md w-36 sm:w-48 shadow-lg z-20 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="h-2 w-20 bg-emerald-400/50 rounded mb-2" />
                  <div className="h-1.5 w-full bg-white/30 rounded mb-1" />
                  <div className="h-1.5 w-3/4 bg-white/20 rounded" />
                </div>

                <div className="absolute top-[12rem] sm:top-[12.5rem] left-[12.5rem] sm:left-[16rem] p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md w-36 sm:w-48 shadow-lg z-20 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="h-2 w-16 bg-amber-400/50 rounded mb-2" />
                  <div className="h-1.5 w-full bg-white/30 rounded mb-1" />
                  <div className="h-1.5 w-2/3 bg-white/20 rounded" />
                </div>

                {/* Floating Properties Panel */}
                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-28 sm:w-40 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl z-30 hidden xs:block">
                  <div className="p-3 border-b border-white/10 bg-white/[0.02]">
                    <div className="h-2 w-16 bg-white/40 rounded" />
                  </div>
                  <div className="p-3 space-y-2">
                    {['Processes', 'Risks', 'Controls'].map((label, i) => (
                      <div
                        key={i}
                        className="h-8 sm:h-10 bg-white/5 border border-white/5 rounded-lg flex items-center px-3 hover:bg-white/10 transition-colors cursor-pointer group"
                      >
                        <span className="text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-200 font-medium">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Banner Bottom Right */}
          <div className="absolute -bottom-6 right-0 sm:-bottom-8 sm:-right-6 w-[90%] sm:w-[380px] p-5 sm:p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-30 ml-auto mr-auto sm:mr-0 left-0 right-0 sm:left-auto">
            <h4 className="text-white font-semibold text-sm sm:text-base mb-2">
              {t(
                'hero.floating_banner.title',
                'Poderoso. Efetivo. Fácil de usar.',
              )}
            </h4>
            <p className="text-blue-100/70 text-xs sm:text-sm mb-4 leading-relaxed">
              {t(
                'hero.floating_banner.description',
                'Descubra como a Lawyn simplifica o rastreamento de obrigações regulatórias e o monitoramento de compliance.',
              )}
            </p>
            <Button
              variant="secondary"
              onClick={scrollToEcosystem}
              className="w-full sm:w-auto h-10 px-6 rounded-full bg-white hover:bg-blue-50 text-blue-900 font-semibold border-0 transition-colors"
            >
              {t('hero.floating_banner.cta', 'Ver na prática')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

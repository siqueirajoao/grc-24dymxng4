import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Cpu, Globe, Landmark, Shield, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function IntegratedEcosystem() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container px-4 md:px-6 flex flex-col items-center relative z-10">
        <Badge
          variant="outline"
          className="mb-6 border-blue-500/30 text-blue-400 py-1.5 px-4 rounded-full flex gap-2 items-center bg-blue-500/5 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {t('ecosystem.badge')}
        </Badge>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 tracking-tight max-w-4xl">
          {t('ecosystem.title')}
        </h2>
        <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-12 lg:mb-16">
          {t('ecosystem.subtitle')}
        </p>

        {/* Tree Structure Visualization */}
        <div className="w-full max-w-6xl flex flex-col items-center">
          {/* Level 1: Core Node */}
          <div className="relative z-20 flex flex-col items-center">
            <div className="flex items-center gap-4 px-8 py-4 bg-[#0F172A] border border-blue-500/30 rounded-full shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] animate-core-pulse">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Shield className="w-6 h-6 text-blue-500 fill-blue-500/20" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-0.5">
                  Powered by
                </span>
                <span className="text-lg font-bold text-white tracking-wide">
                  LAWYN CORE
                </span>
              </div>
            </div>

            {/* Vertical Line from Core */}
            <div className="h-12 w-px bg-gradient-to-b from-blue-500/50 to-blue-500/20 animate-line-pulse"></div>
          </div>

          {/* Level 2: Branching */}
          <div className="hidden md:flex flex-col items-center w-full relative z-10">
            <div className="w-[66.66%] h-px relative">
              <div className="absolute inset-0 bg-blue-500/20 animate-line-pulse [animation-delay:500ms]"></div>
              <div className="absolute left-0 top-0 h-12 w-px bg-gradient-to-b from-blue-500/20 to-blue-500/5 animate-line-pulse [animation-delay:1000ms]"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0 h-12 w-px bg-gradient-to-b from-blue-500/20 to-blue-500/5 animate-line-pulse [animation-delay:1000ms]"></div>
              <div className="absolute right-0 top-0 h-12 w-px bg-gradient-to-b from-blue-500/20 to-blue-500/5 animate-line-pulse [animation-delay:1000ms]"></div>
            </div>
            <div className="h-12 w-full"></div>
          </div>

          {/* Level 3: Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full relative z-20 mt-8 md:mt-0">
            {/* Card 1 */}
            <Card className="bg-zinc-950 border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-blue-500/30 group-hover:bg-blue-950/20 transition-all">
                  <Landmark className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <CardTitle className="text-xl text-white">
                  {t('ecosystem.cards.regulated.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                  {t('ecosystem.cards.regulated.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-zinc-950 border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-blue-500/30 group-hover:bg-blue-950/20 transition-all">
                  <Cpu className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <CardTitle className="text-xl text-white">
                  {t('ecosystem.cards.tech.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                  {t('ecosystem.cards.tech.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-zinc-950 border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-blue-500/30 group-hover:bg-blue-950/20 transition-all">
                  <Globe className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <CardTitle className="text-xl text-white">
                  {t('ecosystem.cards.industry.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                  {t('ecosystem.cards.industry.desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none z-0" />
    </section>
  )
}

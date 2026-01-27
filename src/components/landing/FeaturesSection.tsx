import { Shield, Zap, Lock, Globe, BarChart3, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function FeaturesSection() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Shield,
      title: t('features.governance.title'),
      description: t('features.governance.desc'),
    },
    {
      icon: Zap,
      title: t('features.automation.title'),
      description: t('features.automation.desc'),
    },
    {
      icon: Lock,
      title: t('features.security.title'),
      description: t('features.security.desc'),
    },
    {
      icon: Globe,
      title: t('features.monitoring.title'),
      description: t('features.monitoring.desc'),
    },
    {
      icon: BarChart3,
      title: t('features.dashboards.title'),
      description: t('features.dashboards.desc'),
    },
    {
      icon: Users,
      title: t('features.collaboration.title'),
      description: t('features.collaboration.desc'),
    },
  ]

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t('features.title_start')}
            <span className="block text-blue-500">
              {t('features.title_end')}
            </span>
          </h2>
          <p className="text-lg text-gray-400">{t('features.subtitle')}</p>
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

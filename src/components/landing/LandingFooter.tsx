import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function LandingFooter() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              Lawyn<span className="text-blue-500">.</span>
            </h3>
            <p className="text-gray-500 text-sm">{t('footer.slogan')}</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="#features"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.modules')}
                </a>
              </li>
              <li>
                <a
                  href="#compliance"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.integrations')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="https://lawers.com.br/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  {t('footer.blog')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex gap-4">{/* Social Icons could go here */}</div>
        </div>
      </div>
    </footer>
  )
}

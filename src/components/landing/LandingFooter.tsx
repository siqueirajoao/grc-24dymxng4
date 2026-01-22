import { Link } from 'react-router-dom'

export function LandingFooter() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              Lawyn<span className="text-blue-500">.</span>
            </h3>
            <p className="text-gray-500 text-sm">
              Sistema Operacional de Governança, Riscos e Compliance para
              empresas do futuro.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="#features"
                  className="hover:text-blue-400 transition-colors"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  className="hover:text-blue-400 transition-colors"
                >
                  Módulos
                </a>
              </li>
              <li>
                <a
                  href="#compliance"
                  className="hover:text-blue-400 transition-colors"
                >
                  Integrações
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="https://lawers.com.br/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Lawyn GRC. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4">{/* Social Icons could go here */}</div>
        </div>
      </div>
    </footer>
  )
}

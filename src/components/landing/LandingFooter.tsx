import { Building2 } from 'lucide-react'

export function LandingFooter() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-xl text-white">Lawyn GRC</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              A plataforma definitiva para gestão de riscos e compliance
              financeiro. Simplifique a governança da sua instituição.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Produto</h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Integrações
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Segurança
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Empresa</h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Legal</h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 gap-4">
          <div>
            © {new Date().getFullYear()} Lawyn GRC. Todos os direitos
            reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

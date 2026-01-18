import { Button } from '@/components/ui/button'
import {
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  BookOpen,
  FileText,
  Lock,
  Users,
  Activity,
  ListTodo,
  Building2,
  CheckCircle,
  ArrowRight,
  Menu,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function LandingPage() {
  const modules = [
    {
      title: 'Gestão de Riscos',
      desc: 'Identifique, avalie e mitigue riscos corporativos com matrizes dinâmicas 5x5.',
      icon: ShieldAlert,
    },
    {
      title: 'Controles Internos',
      desc: 'Catálogo de controles preventivos e detectivos com gestão de evidências.',
      icon: ShieldCheck,
    },
    {
      title: 'Auditorias & Achados',
      desc: 'Planejamento e execução de auditorias com workflow de correção de apontamentos.',
      icon: FileCheck,
    },
    {
      title: 'Políticas & Normas',
      desc: 'Gestão do ciclo de vida de normativos e monitoramento regulatório.',
      icon: BookOpen,
    },
    {
      title: 'CADOCs & Relatórios',
      desc: 'Automação e controle de entregas regulatórias para BACEN e CVM.',
      icon: FileText,
    },
    {
      title: 'LGPD & Privacidade',
      desc: 'Mapeamento de dados (ROPA), gestão de consentimento e atendimento a titulares.',
      icon: Lock,
    },
    {
      title: 'Gestão de Terceiros',
      desc: 'Due diligence, homologação e monitoramento contínuo de fornecedores.',
      icon: Users,
    },
    {
      title: 'BIA & Continuidade',
      desc: 'Análise de impacto no negócio e planos de continuidade operacional.',
      icon: Activity,
    },
    {
      title: 'Gestão de Tarefas',
      desc: 'Central de obrigações e follow-up para equipes de conformidade.',
      icon: ListTodo,
    },
  ]

  const segments = [
    {
      title: 'Bancos (S1 a S4)',
      desc: 'Estrutura completa para gestão de riscos de mercado, crédito e operacional conforme Basileia.',
    },
    {
      title: 'Instituições de Pagamento',
      desc: 'Conformidade simplificada com as circulares do BACEN para IPs e Fintechs.',
    },
    {
      title: 'Financeiras & SCD/SEP',
      desc: 'Controles robustos para operações de crédito e reportes regulatórios.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-900 selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Lawyn GRC</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">
              Soluções
            </a>
            <a href="#segments" className="hover:text-white transition-colors">
              Segmentos
            </a>
            <a
              href="#compliance"
              className="hover:text-white transition-colors"
            >
              Compliance
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0 font-medium px-6">
                Login
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Nova versão 2.0 disponível
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Governança Inteligente para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Instituições Financeiras
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                Centralize a gestão de riscos, compliance regulatório e
                controles internos em uma única plataforma. Projetada para
                Bancos, IPs e Financeiras que buscam eficiência e segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300">
                  Solicitar Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-8 text-base border-gray-700 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg"
                >
                  Conhecer Módulos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section id="features" className="py-20 bg-neutral-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Plataforma GRC Integrada
              </h2>
              <p className="text-gray-400">
                Uma suíte completa de módulos conectados para cobrir todas as
                dimensões de governança e riscos da sua instituição.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-xl border border-white/10 bg-black hover:border-blue-600/50 hover:bg-blue-950/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <mod.icon className="w-6 h-6 text-blue-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{mod.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section id="segments" className="py-20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Feito para o Mercado Financeiro
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {segments.map((seg, i) => (
                <div key={i} className="bg-neutral-900/50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    {seg.title}
                  </h3>
                  <p className="text-gray-400">{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory & Dashboard Preview */}
        <section
          id="compliance"
          className="py-20 bg-gradient-to-b from-black to-blue-950/20"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Conformidade Garantida com BACEN e CVM
                </h2>
                <div className="space-y-4">
                  {[
                    'Matriz de Riscos 5x5 ajustável',
                    'Automação de CADOCs 2061, 4010 e 5011',
                    'Trilhas de auditoria imutáveis',
                    'Gestão de incidentes e perdas operacionais',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-lg text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 bg-white text-black hover:bg-gray-200 border-0">
                  Falar com Especialista
                </Button>
              </div>
              <div className="lg:w-1/2 relative">
                {/* Abstract Dashboard Representation */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900/80 p-4">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-32 bg-black/50 rounded-lg animate-pulse"></div>
                    <div className="h-32 bg-black/50 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="h-48 bg-black/50 rounded-lg animate-pulse"></div>
                  {/* Overlay badge */}
                  <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                    Score Compliance: 98%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black text-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-blue-500" />
                <span className="font-bold text-lg">Lawyn GRC</span>
              </div>
              <p className="text-gray-500">
                A plataforma definitiva para gestão de riscos e compliance
                financeiro.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Produto</h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Integrações
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Segurança
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Empresa</h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 pt-8 border-t border-white/5">
            © {new Date().getFullYear()} Lawyn GRC. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

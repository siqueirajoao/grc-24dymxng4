import { Link } from 'react-router-dom'
import { ArrowLeft, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { LandingFooter } from '@/components/landing/LandingFooter'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 selection:text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-blue-700 to-blue-500 p-1.5 rounded-lg shadow-lg shadow-blue-900/50">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Lawyn GRC
            </span>
          </Link>
          <Link to="/">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              TERMOS DE USO – LAWYN
            </h1>
            <p className="text-zinc-400">
              Última atualização: 19 de Janeiro de 2026
            </p>
          </div>

          <Separator className="bg-white/10" />

          <div className="space-y-8 text-zinc-300 leading-relaxed text-lg">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. Objeto e Finalidade
              </h2>
              <p>
                A plataforma Lawyn GRC é uma solução de software como serviço
                (SaaS) destinada a apoiar instituições financeiras e outras
                empresas na gestão de Governança, Riscos e Conformidade (GRC).
                Estes Termos de Uso regulam o acesso e a utilização de todos os
                módulos, funcionalidades e serviços disponibilizados através da
                plataforma. Ao utilizar a Lawyn, você concorda em cumprir estes
                termos integralmente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. Limitações de Responsabilidade
              </h2>
              <p>
                A Lawyn fornece ferramentas para auxiliar na tomada de decisões
                e na gestão de conformidade, mas não substitui o julgamento
                profissional, consultoria jurídica ou auditoria externa. A Lawyn
                não se responsabiliza por multas, sanções regulatórias ou perdas
                financeiras decorrentes de decisões tomadas com base nas
                informações da plataforma, sendo a responsabilidade final da
                instituição usuária.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. Atuação Humana
              </h2>
              <p>
                Embora a plataforma utilize algoritmos e automações para
                processar dados e sugerir classificações de risco, a supervisão
                humana é indispensável. O usuário reconhece que a interpretação
                de normas, a validação de controles e a avaliação final de
                riscos devem ser realizadas por profissionais qualificados da
                sua organização.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Disponibilidade
              </h2>
              <p>
                Empenhamos nossos melhores esforços para garantir uma
                disponibilidade de 99,9% (SLA) da plataforma. No entanto,
                interrupções podem ocorrer para manutenção programada,
                atualizações de segurança ou eventos de força maior. A Lawyn não
                garante que o serviço será ininterrupto ou livre de erros em
                100% do tempo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Dados
              </h2>
              <p>
                A propriedade dos dados inseridos na plataforma é exclusiva do
                Cliente. A Lawyn atua como operadora desses dados, garantindo
                sua confidencialidade, integridade e disponibilidade através de
                backups regulares e criptografia de ponta a ponta. Não
                comercializamos ou compartilhamos seus dados com terceiros sem
                autorização expressa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. LGPD</h2>
              <p>
                A Lawyn está em conformidade com a Lei Geral de Proteção de
                Dados (Lei nº 13.709/2018). Adotamos medidas técnicas e
                administrativas para proteger os dados pessoais tratados na
                plataforma. O Cliente, na qualidade de Controlador, é
                responsável por garantir que possui as bases legais adequadas
                para a inserção de dados pessoais de terceiros no sistema.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Auditorias
              </h2>
              <p>
                Reconhecemos a necessidade de auditorias por parte de
                reguladores e auditorias internas. A Lawyn se compromete a
                fornecer os relatórios SOC 2 Type II e logs de acesso quando
                solicitados, além de cooperar com processos de due diligence,
                respeitando os limites de confidencialidade de outros clientes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                8. Propriedade Intelectual
              </h2>
              <p>
                Todo o código-fonte, design, logotipos, marcas e metodologias
                presentes na plataforma são propriedade exclusiva da Lawyn ou de
                seus licenciadores. O uso da plataforma não confere ao Cliente
                qualquer direito de propriedade intelectual sobre o software,
                exceto a licença de uso limitada, não exclusiva e revogável
                conforme contratado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                9. Uso Indevido
              </h2>
              <p>
                É estritamente proibido utilizar a plataforma para fins ilegais,
                tentar violar a segurança do sistema, realizar engenharia
                reversa, ou sobrecarregar a infraestrutura (DDoS). A Lawyn se
                reserva o direito de suspender ou cancelar o acesso de usuários
                que violem estas regras de segurança e conduta.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                10. Alterações
              </h2>
              <p>
                A Lawyn pode atualizar estes Termos de Uso periodicamente para
                refletir mudanças na legislação ou na plataforma. Alterações
                substanciais serão notificadas aos usuários com antecedência. O
                uso continuado da plataforma após as alterações implica na
                aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                11. Cookies
              </h2>
              <p>
                Utilizamos cookies essenciais para autenticação e segurança,
                além de cookies analíticos para melhorar a experiência do
                usuário. O usuário pode gerenciar suas preferências de cookies
                através das configurações do navegador, mas o bloqueio de
                cookies essenciais pode impedir o funcionamento correto da
                plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                12. Legislação e Foro
              </h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do
                Brasil. Fica eleito o Foro da Comarca de São Paulo, Estado de
                São Paulo, como o único competente para dirimir quaisquer
                controvérsias oriundas destes Termos, com renúncia expressa a
                qualquer outro, por mais privilegiado que seja.
              </p>
            </section>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  )
}

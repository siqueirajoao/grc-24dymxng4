import { useState } from 'react'
import { Navbar } from '@/components/landing/Navbar'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { LeadGenerationModal } from '@/components/landing/LeadGenerationModal'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TermsOfUse() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="container px-4 py-24 md:py-32 max-w-4xl mx-auto">
        <div className="mb-8">
          <Button
            variant="ghost"
            className="pl-0 hover:pl-2 transition-all text-gray-400 hover:text-white"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
            </Link>
          </Button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          TERMOS DE USO – LAWYN
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          Última atualização: 19.01.2026
        </p>

        <div className="prose prose-invert prose-blue max-w-none text-gray-300 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. DEFINIÇÕES
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Lawyn:</strong> Refere-se à Lawyn GRC, empresa
                desenvolvedora e proprietária da plataforma.
              </li>
              <li>
                <strong>Usuário:</strong> Pessoa física ou jurídica que acessa
                ou utiliza a Plataforma.
              </li>
              <li>
                <strong>Conta:</strong> Credencial de acesso única criada pelo
                Usuário para utilizar os serviços.
              </li>
              <li>
                <strong>Conteúdo do Usuário:</strong> Dados, informações, textos
                e documentos inseridos pelo Usuário na Plataforma.
              </li>
              <li>
                <strong>Plataforma:</strong> O software de Governança, Riscos e
                Compliance (GRC) disponibilizado via SaaS pela Lawyn.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. NATUREZA DA PLATAFORMA
            </h2>
            <div className="space-y-4">
              <p>
                <strong>2.1.</strong> A Lawyn é uma plataforma de software como
                serviço (SaaS) destinada à gestão de processos de governança,
                riscos e compliance.
              </p>
              <p>
                <strong>2.2.</strong> A Plataforma não presta consultoria
                jurídica, contábil ou de compliance. O uso da ferramenta não
                substitui a necessidade de profissionais qualificados nestas
                áreas.
              </p>
              <p>
                <strong>2.3.</strong> A Lawyn se reserva o direito de modificar,
                suspender ou descontinuar qualquer aspecto da Plataforma a
                qualquer momento, com ou sem aviso prévio, visando melhorias
                constantes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. ACESSO E USO DA PLATAFORMA
            </h2>
            <div className="space-y-4">
              <p>
                <strong>3.1.</strong> O acesso à Plataforma é concedido mediante
                licença de uso limitada, revogável, não exclusiva e
                intransferível.
              </p>
              <p>
                <strong>3.2.</strong> Para utilizar a Plataforma, o Usuário
                deve:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Fornecer informações verdadeiras, exatas, atuais e completas
                  durante o cadastro;
                </li>
                <li>
                  Manter a confidencialidade de suas credenciais de acesso;
                </li>
                <li>
                  Notificar imediatamente a Lawyn sobre qualquer uso não
                  autorizado de sua conta.
                </li>
              </ul>
              <p>
                <strong>3.3.</strong> O Usuário é o único responsável por todas
                as atividades que ocorram em sua Conta.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. USOS PROIBIDOS
            </h2>
            <p className="mb-4">
              O Usuário concorda em não utilizar a Plataforma para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Violar qualquer lei ou regulamentação local, estadual, nacional
                ou internacional;
              </li>
              <li>
                Transmitir qualquer conteúdo que seja ilegal, nocivo, ameaçador,
                abusivo, assediante, difamatório, vulgar, obsceno ou invasivo da
                privacidade de terceiros;
              </li>
              <li>
                Realizar engenharia reversa, descompilar ou desmontar qualquer
                parte da Plataforma;
              </li>
              <li>
                Interferir ou interromper a integridade ou o desempenho da
                Plataforma ou dos dados nela contidos;
              </li>
              <li>
                Tentar obter acesso não autorizado à Plataforma ou a seus
                sistemas e redes relacionados.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. CONTEÚDO DO USUÁRIO
            </h2>
            <div className="space-y-4">
              <p>
                <strong>5.1.</strong> O Usuário mantém todos os direitos de
                propriedade sobre o Conteúdo do Usuário que submete à
                Plataforma.
              </p>
              <p>
                <strong>5.2.</strong> Ao inserir dados na Plataforma, o Usuário
                concede à Lawyn uma licença mundial, não exclusiva e isenta de
                royalties para usar, hospedar, armazenar e reproduzir o conteúdo
                estritamente para fins de prestação dos serviços contratados.
              </p>
              <p>
                <strong>5.3.</strong> A Lawyn não é responsável pela veracidade,
                precisão ou qualidade do Conteúdo do Usuário.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. PROPRIEDADE INTELECTUAL
            </h2>
            <div className="space-y-4">
              <p>
                <strong>6.1.</strong> Todos os direitos, títulos e interesses
                relativos à Plataforma, incluindo sua tecnologia, códigos,
                interfaces, design e marcas, são de propriedade exclusiva da
                Lawyn.
              </p>
              <p>
                <strong>6.2.</strong> Nada nestes Termos concede ao Usuário o
                direito de usar o nome Lawyn ou qualquer uma das marcas
                comerciais, logotipos, nomes de domínio e outras características
                distintivas da marca Lawyn.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. DISPONIBILIDADE, MANUTENÇÕES E SEGURANÇA
            </h2>
            <div className="space-y-4">
              <p>
                <strong>7.1.</strong> A Lawyn envidará seus melhores esforços
                para garantir a disponibilidade da Plataforma 24 horas por dia,
                7 dias por semana, exceto em casos de manutenções programadas.
              </p>
              <p>
                <strong>7.2.</strong> A Lawyn adota medidas de segurança
                robustas, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>(a) Criptografia de dados em trânsito e em repouso;</li>
                <li>(b) Controles de acesso rigorosos;</li>
                <li>(c) Monitoramento contínuo de segurança;</li>
                <li>(d) Backups regulares dos dados.</li>
              </ul>
              <p>
                <strong>7.3.</strong> Apesar dos esforços, nenhuma transmissão
                de dados pela Internet é 100% segura. O Usuário reconhece os
                riscos inerentes ao uso da internet.
              </p>
              <p>
                <strong>7.4.</strong> Manutenções programadas serão comunicadas
                com antecedência mínima de 24 horas, salvo em casos de
                emergência de segurança.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. PROTEÇÃO DE DADOS
            </h2>
            <div className="space-y-4">
              <p>
                <strong>8.1.</strong> O tratamento de dados pessoais realizados
                pela Plataforma obedece à Lei Geral de Proteção de Dados (LGPD)
                e à nossa Política de Privacidade.
              </p>
              <p>
                <strong>8.2.</strong> A Lawyn atua como operadora dos dados
                pessoais inseridos pelo Usuário na Plataforma, cabendo ao
                Usuário, na qualidade de controlador, garantir a base legal para
                o tratamento desses dados.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. SUSPENSÃO E ENCERRAMENTO
            </h2>
            <div className="space-y-4">
              <p>
                <strong>9.1.</strong> A Lawyn poderá suspender ou encerrar a
                Conta do Usuário caso:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Haja violação destes Termos de Uso;</li>
                <li>Haja inadimplência financeira superior a 30 dias;</li>
                <li>Seja exigido por autoridade judicial ou regulatória.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. LIMITAÇÃO DE RESPONSABILIDADE
            </h2>
            <div className="space-y-4">
              <p>
                <strong>10.1.</strong> Em nenhuma hipótese a Lawyn será
                responsável por danos indiretos, incidentais, especiais,
                punitivos ou consequenciais.
              </p>
              <p>
                <strong>10.2.</strong> A responsabilidade total da Lawyn por
                quaisquer reivindicações decorrentes destes termos não excederá
                o valor pago pelo Usuário nos últimos 12 (doze) meses.
              </p>
              <p>
                <strong>10.3.</strong> A Lawyn não se responsabiliza por falhas
                de terceiros, como provedores de internet ou serviços de
                hospedagem.
              </p>
              <p>
                <strong>10.4.</strong> A Lawyn não garante que a Plataforma
                atenderá a todos os requisitos específicos do Usuário ou que
                funcionará de forma ininterrupta ou livre de erros.
              </p>
              <p>
                <strong>10.5.</strong> O Usuário é exclusivamente responsável
                pelas decisões tomadas com base nas informações obtidas através
                da Plataforma.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              11. ALTERAÇÕES DOS TERMOS
            </h2>
            <div className="space-y-4">
              <p>
                <strong>11.1.</strong> A Lawyn pode revisar estes Termos de Uso
                a qualquer momento. As alterações entrarão em vigor após a
                publicação na Plataforma.
              </p>
              <p>
                <strong>11.2.</strong> O uso continuado da Plataforma após a
                publicação das alterações constitui aceitação dos novos Termos.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              12. FORÇA MAIOR
            </h2>
            <div className="space-y-4">
              <p>
                <strong>12.1.</strong> Nenhuma das partes será responsável por
                atrasos ou falhas no cumprimento de obrigações causados por
                eventos de força maior.
              </p>
              <p>
                <strong>12.2.</strong> Consideram-se eventos de força maior:
                desastres naturais, guerras, greves, falhas de infraestrutura de
                internet, entre outros eventos imprevisíveis e inevitáveis.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              13. LEI APLICÁVEL E FORO
            </h2>
            <div className="space-y-4">
              <p>
                <strong>13.1.</strong> Estes Termos serão regidos e
                interpretados de acordo com as leis da República Federativa do
                Brasil.
              </p>
              <p>
                <strong>13.2.</strong> Fica eleito o foro da comarca de São
                Paulo/SP para dirimir quaisquer controvérsias oriundas destes
                Termos, com renúncia a qualquer outro, por mais privilegiado que
                seja.
              </p>
            </div>
          </section>
        </div>
      </main>

      <LandingFooter />

      <LeadGenerationModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  )
}

import { Navbar } from '@/components/landing/Navbar'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { useState } from 'react'
import { LeadGenerationModal } from '@/components/landing/LeadGenerationModal'

export default function TermsOfUse() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="container px-4 py-24 md:py-32 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Termos de Uso e Política de Privacidade
        </h1>

        <div className="prose prose-invert prose-blue max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introdução
            </h2>
            <p>
              Bem-vindo à Lawyn. Estes Termos de Uso regem seu acesso e uso de
              nossa plataforma de Governança, Riscos e Compliance. Ao acessar ou
              usar nossos serviços, você concorda em ficar vinculado a estes
              termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Uso da Plataforma
            </h2>
            <p>
              A Lawyn concede a você uma licença limitada, não exclusiva e
              intransferível para usar a plataforma de acordo com seu plano de
              assinatura. Você é responsável por manter a confidencialidade de
              suas credenciais de acesso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Proteção de Dados (LGPD)
            </h2>
            <p>
              Levamos a privacidade a sério. Coletamos e processamos dados
              pessoais estritamente para a prestação de nossos serviços, em
              conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo, software, marcas e tecnologias da plataforma são
              propriedade exclusiva da Lawyn ou de seus licenciadores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Contato
            </h2>
            <p>
              Para questões sobre estes termos ou sobre privacidade, entre em
              contato conosco através de nossos canais oficiais de suporte.
            </p>
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

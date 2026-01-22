import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'O que é o Lawyn e para quem ele foi desenvolvido?',
    answer:
      'O Lawyn é uma plataforma completa de GRC (Governança, Riscos e Compliance) desenvolvida especialmente para instituições em ambientes regulados. Ele integra em um único sistema a gestão de riscos operacionais, controles internos, auditorias, políticas corporativas, conformidade regulatória (BCB, CVM, COAF), obrigações acessórias (CADOCs), privacidade de dados (LGPD), gestão de terceiros e continuidade de negócios (BIA).',
  },
  {
    question: 'Como o Lawyn garante a segurança dos meus dados?',
    answer:
      'A Lawyn é construída sobre uma arquitetura moderna, nativa em nuvem, e hospedada em infraestrutura operada por provedores certificados de acordo com padrões internacionais de segurança amplamente reconhecidos, incluindo ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018 e SOC 2 Type II. Os dados são criptografados tanto em trânsito (TLS 1.2+) quanto em repouso (AES-256). Os controles de acesso, os mecanismos de autenticação e a segurança na camada de aplicação são gerenciados pela Lawyn, em conformidade com o modelo de responsabilidade compartilhada em segurança da informação.',
  },
  {
    question: 'O Lawyn atende às exigências regulatórias do Banco Central?',
    answer:
      'Sim, o Lawyn foi projetado especificamente para atender às exigências regulatórias de ambientes regulados. A plataforma oferece monitoramento de atualizações normativas de várias fontes (BCB, CVM, Planalto, Receita Federal e +), gestão de CADOCs com calendário de vencimentos, controle de políticas fundamentais exigidas pela regulação, geração de relatórios de conformidade para auditorias internas e externas, e gestão completa de riscos e controles alinhada às boas práticas de GRC. Nosso módulo regulatório acompanha automaticamente novas circulares e resoluções, facilitando a análise de aplicabilidade.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="container px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400">
            Tire suas dúvidas sobre a plataforma Lawyn.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-lg px-4 bg-black/50"
            >
              <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

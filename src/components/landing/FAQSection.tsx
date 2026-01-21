import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'A plataforma é adequada para pequenas empresas?',
    answer:
      'Sim, a Lawyn é modular e escalável. Você pode começar apenas com os módulos essenciais para o seu estágio atual e expandir conforme sua maturidade de governança cresce.',
  },
  {
    question: 'Como funciona a implementação?',
    answer:
      'Nossa implementação é ágil, geralmente durando de 4 a 8 semanas. Oferecemos templates pré-configurados baseados nas melhores práticas de mercado para acelerar o setup.',
  },
  {
    question: 'É possível integrar com outros sistemas?',
    answer:
      'Totalmente. Possuímos uma API aberta e conectores nativos para os principais ERPs, CRMs e ferramentas de produtividade do mercado.',
  },
  {
    question: 'Os dados ficam armazenados no Brasil?',
    answer:
      'Sim, utilizamos infraestrutura em nuvem com data centers locais, garantindo conformidade com a LGPD e requisitos de residência de dados.',
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
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

const faqItems = [
  {
    question: 'O que é a Lawyn?',
    answer:
      'A Lawyn é uma plataforma que ajuda a organizar, priorizar e acompanhar tarefas, prazos e processos em um único lugar, com mais clareza e fluidez no dia a dia.',
  },
  {
    question: 'Para quem a Lawyn é indicada?',
    answer:
      'Para equipes e profissionais que lidam com múltiplas tarefas, prazos e responsabilidades e precisam de mais organização, visibilidade e foco.',
  },
  {
    question: 'É possível acompanhar tarefas e prazos em tempo real?',
    answer:
      'Sim. Todas as tarefas, prazos e status ficam visíveis em tempo real, facilitando a priorização e o acompanhamento.',
  },
  {
    question: 'A Lawyn é personalizável?',
    answer:
      'Sim. Os fluxos, categorias e visualizações podem ser ajustados à realidade de cada equipe.',
  },
  {
    question: 'A Lawyn pode ser usada por equipes?',
    answer:
      'Sim. A plataforma foi pensada para uso colaborativo, com definição de responsáveis e acompanhamento conjunto.',
  },
  {
    question: 'Meus dados ficam seguros?',
    answer:
      'Sim. A Lawyn adota boas práticas de segurança e proteção de dados.',
  },
]

export function FAQSection() {
  const { ref, isVisible } = useScrollObserver({ threshold: 0.1 })

  return (
    <section id="faq" className="py-24 bg-black relative z-10">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <div
          className={cn(
            'text-center mb-16 space-y-4 transition-all duration-700',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-lg">
            Descubra tudo o que você precisa sobre a Lawyn
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={cn(
                'border border-white/10 rounded-2xl bg-white/5 px-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10',
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <AccordionTrigger className="text-left text-white hover:no-underline hover:text-blue-400 transition-colors py-6 text-lg font-semibold [&[data-state=open]]:text-blue-400">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

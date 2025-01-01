import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como funciona o processo de compra?',
    answer: 'O processo é simples: escolha o produto desejado, clique em comprar, faça o pagamento e receba seu produto por email em até 24 horas.',
  },
  {
    question: 'Vocês oferecem suporte após a compra?',
    answer: 'Sim, oferecemos suporte técnico para todos os nossos produtos por 30 dias após a compra.',
  },
  {
    question: 'As bases são otimizadas?',
    answer: 'Sim, todas as nossas bases passam por um rigoroso processo de otimização para garantir o melhor desempenho.',
  },
  {
    question: 'Posso solicitar alterações na base?',
    answer: 'Sim, oferecemos serviço de personalização para adaptar a base às suas necessidades específicas.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer: 'Para produtos prontos, a entrega é em até 24 horas. Para produtos personalizados, o prazo varia conforme a complexidade.',
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">PERGUNTAS FREQUENTES</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
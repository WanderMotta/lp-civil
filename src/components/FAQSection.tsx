import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const FAQSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const faqs = [
    {
      question: "Quanto custa a primeira consulta?",
      answer:
        "A primeira avaliação do seu caso é 100% gratuita. Você recebe orientação jurídica sem compromisso.",
    },
    {
      question: "Quais áreas do direito vocês atendem?",
      answer:
        "Atuamos nas principais áreas: Direito Civil, Família, Trabalhista, Previdenciário, Criminal e muito mais.",
    },
    {
      question: "Quanto tempo leva para resolver um caso?",
      answer:
        "O prazo varia conforme a complexidade. Na avaliação inicial, apresentamos um cronograma estimado para seu caso específico.",
    },
    {
      question: "Como funciona o atendimento online?",
      answer:
        "Todo o processo pode ser feito remotamente via WhatsApp, videochamada ou e-mail. Você economiza tempo e recebe o mesmo atendimento de qualidade.",
    },
    {
      question: "Preciso ir ao escritório pessoalmente?",
      answer:
        "Não necessariamente. A maioria dos atendimentos pode ser feita online. Apenas em casos específicos solicitamos presença física.",
    },
    {
      question: "Qual o horário de atendimento?",
      answer:
        "Atendemos de segunda a sexta, das 9h às 18h. Pelo WhatsApp, respondemos o mais rápido possível, inclusive fora do horário comercial.",
    },
    {
      question: "Como são os honorários advocatícios?",
      answer:
        "Trabalhamos com transparência total. Os valores são apresentados claramente na avaliação inicial, sem surpresas.",
    },
    {
      question: "Posso parcelar os honorários?",
      answer:
        "Sim, oferecemos condições especiais de parcelamento para facilitar o acesso à justiça.",
    },
    {
      question: "Vocês atendem em todo o Brasil?",
      answer:
        "Sim! Com atendimento online, podemos atender clientes de qualquer estado do país.",
    },
    {
      question: "Como sei se meu caso tem chances de sucesso?",
      answer:
        "Na avaliação gratuita, nossos advogados analisam seu caso e apresentam as possibilidades e estratégias jurídicas aplicáveis.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-muted/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos serviços jurídicos
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left py-5 px-4 md:px-6 hover:no-underline">
                <span className="font-semibold text-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-5 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

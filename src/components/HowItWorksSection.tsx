import { Button } from "@/components/ui/button";
import { MessageCircle, FileSearch, Scale } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Entre em contato",
    description: "Envie sua mensagem pelo WhatsApp ou preencha o formulário de contato"
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Avaliação gratuita",
    description: "Avaliação gratuita e rápida do seu caso por nossos especialistas"
  },
  {
    icon: Scale,
    number: "03",
    title: "Orientação jurídica",
    description: "Receba orientação jurídica imediata e comece a resolver seu caso"
  }
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <section 
      ref={ref}
      className={`py-8 md:py-12 lg:py-16 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como funciona o atendimento
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Simples, rápido e eficiente
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent flex items-center justify-center text-xs md:text-sm font-bold text-accent-foreground">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-border -z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="gold" 
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-base md:text-lg py-4 px-6 md:py-6 md:px-8 min-h-[44px]"
          >
            <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
            Avaliar meu caso agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

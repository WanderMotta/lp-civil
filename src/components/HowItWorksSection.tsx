import { Button } from "@/components/ui/button";
import { MessageCircle, FileSearch, Scale } from "lucide-react";

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
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como funciona o atendimento
          </h2>
          <p className="text-xl text-muted-foreground">
            Simples, rápido e eficiente
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
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
            className="text-lg py-6 px-8"
          >
            <MessageCircle className="h-6 w-6" />
            Avaliar meu caso agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

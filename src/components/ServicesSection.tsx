import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Baby, 
  DollarSign, 
  FileText, 
  Gift,
  MessageCircle
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    icon: Heart,
    title: "Divórcio",
    description: "Encerramos o casamento de forma rápida e segura, consensual ou litigiosa, protegendo seus direitos e evitando desgaste desnecessário."
  },
  {
    icon: Heart,
    title: "União estável",
    description: "Reconhecemos ou dissolvemos a união estável, regulando direitos, bens e responsabilidades com segurança."
  },
  {
    icon: DollarSign,
    title: "Pensão alimentícia",
    description: "Definimos, revisamos ou encerramos a pensão, buscando equilíbrio entre quem paga e quem recebe."
  },
  {
    icon: Baby,
    title: "Guarda de filhos",
    description: "Ajustamos guarda unilateral ou compartilhada e visitas, sempre priorizando o bem-estar da criança."
  },
  {
    icon: FileText,
    title: "Inventário",
    description: "Organizamos a herança por via judicial ou extrajudicial, com partilha justa e solução ágil."
  },
  {
    icon: Gift,
    title: "Doações em vida",
    description: "Estruturamos doações com segurança jurídica, evitando problemas futuros entre herdeiros."
  }
];

const ServicesSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551196947374", "_blank");
  };

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-4 md:py-6 lg:py-8 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como podemos te ajudar?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções jurídicas completas em Direito Civil e de Família
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="text-center mt-6 md:mt-8 lg:mt-10">
          <p className="text-muted-foreground mb-4 text-base md:text-lg">
            Precisa de ajuda com algum desses serviços?
          </p>
          <Button 
            variant="whatsapp" 
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-base md:text-lg py-4 px-6 md:py-6 md:px-8 min-h-[44px]"
          >
            <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
            Falar com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Clock, Lock } from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const HeroSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551196947374", "_blank");
  };

  return (
    <section 
      ref={ref}
      className={`relative flex items-center pt-14 md:pt-16 bg-gradient-to-b from-secondary/30 to-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Precisa de um advogado especializado em{" "}
                <span className="text-primary">Direito Civil</span>?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Atendimento humanizado e soluções jurídicas rápidas para divórcio, guarda, pensão, inventário e mais.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {[
                { icon: Clock, text: "Atendimento rápido" },
                { icon: Shield, text: "100% ONLINE" },
                { icon: Lock, text: "Totalmente sigiloso" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="text-base md:text-lg py-4 px-6 md:py-6 md:px-8 min-h-[44px]"
              >
                <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
                Fale Agora!!!
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-base md:text-lg py-4 px-6 md:py-6 md:px-8 min-h-[44px]"
              >
                Ver Serviços
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Advogado especializado em Direito Civil" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

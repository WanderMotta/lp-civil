import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Clock, Lock } from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Precisa de um advogado especializado em{" "}
                <span className="text-primary">Direito Civil</span>?
              </h1>
              <p className="text-xl text-muted-foreground">
                Atendimento humanizado e soluções jurídicas rápidas para divórcio, guarda, pensão, inventário e mais.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
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

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="text-lg py-6 px-8"
              >
                <MessageCircle className="h-6 w-6" />
                Fale Agora!!!
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg py-6 px-8"
              >
                Ver Serviços
              </Button>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Resolvemos com agilidade e segurança. Atendimento rápido, 100% ONLINE e sigiloso.
            </p>
          </div>

          <div className="relative">
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

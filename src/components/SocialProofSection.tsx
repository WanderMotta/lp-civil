import { Card } from "@/components/ui/card";
import { Award, Shield, Users, Star } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "+10 anos",
    label: "De experiência"
  },
  {
    icon: Users,
    value: "100%",
    label: "Sigiloso"
  },
  {
    icon: Shield,
    value: "Êxito",
    label: "Casos resolvidos"
  },
  {
    icon: Star,
    value: "5.0",
    label: "Avaliação média"
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente atendimento! Resolveram meu processo de divórcio de forma rápida e sem complicações. Recomendo!",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Profissionais competentes e atenciosos. Me ajudaram com a guarda do meu filho e pensão alimentícia. Muito satisfeito!",
    rating: 5
  },
  {
    name: "Ana Costa",
    text: "Realizaram meu inventário de forma ágil e eficiente. Equipe muito profissional e transparente em todo o processo.",
    rating: 5
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que nos escolher?
          </h2>
          <p className="text-xl text-muted-foreground">
            Confiança e resultados comprovados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card border-border"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            O que nossos clientes dizem
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

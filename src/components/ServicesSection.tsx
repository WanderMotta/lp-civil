import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Baby, 
  DollarSign, 
  FileText, 
  Search, 
  UserCheck, 
  FileSignature,
  Gift
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    icon: Heart,
    title: "Divórcio",
    description: "Encerramos o casamento de forma rápida e segura, consensual ou litigiosa, protegendo seus direitos e evitando desgaste desnecessário."
  },
  {
    icon: Users,
    title: "Separação de corpos",
    description: "Medida imediata para afastar os cônjuges e garantir proteção jurídica até a conclusão do divórcio."
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
    icon: Search,
    title: "Investigação de paternidade",
    description: "Confirmamos ou contestamos vínculos biológicos, garantindo direitos de pais e filhos."
  },
  {
    icon: UserCheck,
    title: "Reconhecimento e dissolução de paternidade socioafetiva",
    description: "Regulamos juridicamente vínculos de afeto, com foco na realidade familiar e no melhor interesse do filho."
  },
  {
    icon: FileSignature,
    title: "Acordos de convivência ou pré-nupciais",
    description: "Criamos contratos claros para organizar responsabilidades e resguardar bens do casal."
  },
  {
    icon: Gift,
    title: "Doações em vida",
    description: "Estruturamos doações com segurança jurídica, evitando problemas futuros entre herdeiros."
  }
];

const ServicesSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-20 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como podemos te ajudar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções jurídicas completas em Direito Civil e de Família
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
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
      </div>
    </section>
  );
};

export default ServicesSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Lock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const {
    ref,
    isVisible
  } = useIntersectionObserver({
    threshold: 0.1
  });
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    caseType: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.whatsapp || !formData.caseType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.\n\nTipo de caso: ${formData.caseType}\n\n${formData.message}\n\nE-mail: ${formData.email}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp."
    });

    // Reset form
    setFormData({
      name: "",
      whatsapp: "",
      email: "",
      caseType: "",
      message: ""
    });
  };
  return <section id="contact" ref={ref} className={`py-20 bg-secondary/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos prontos para ajudá-lo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input id="name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} placeholder="Seu nome completo" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input id="whatsapp" type="tel" value={formData.whatsapp} onChange={e => setFormData({
                  ...formData,
                  whatsapp: e.target.value
                })} placeholder="(11) 99999-9999" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caseType">Tipo de caso *</Label>
                  <Select value={formData.caseType} onValueChange={value => setFormData({
                  ...formData,
                  caseType: value
                })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de caso" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="divorcio">Divórcio</SelectItem>
                      <SelectItem value="separacao">Separação de corpos</SelectItem>
                      <SelectItem value="uniao-estavel">União estável</SelectItem>
                      <SelectItem value="pensao">Pensão alimentícia</SelectItem>
                      <SelectItem value="guarda">Guarda de filhos</SelectItem>
                      <SelectItem value="inventario">Inventário</SelectItem>
                      <SelectItem value="paternidade">Investigação de paternidade</SelectItem>
                      <SelectItem value="acordos">Acordos de convivência</SelectItem>
                      <SelectItem value="doacoes">Doações em vida</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} placeholder="Descreva brevemente seu caso..." rows={4} />
                </div>

                <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                  <Send className="h-5 w-5" />
                  Enviar mensagem
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Sigilo garantido
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Garantimos sigilo total e resposta rápida. Todas as informações são tratadas com confidencialidade absoluta.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Atendimento rápido
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Nossa equipe responde rapidamente para avaliar seu caso e oferecer as melhores soluções.
                    </p>
                    <a href="tel:5511999999999" className="text-sm font-medium text-primary hover:underline">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      E-mail profissional
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Prefere enviar um e-mail? Entre em contato conosco:
                    </p>
                    <a className="text-sm font-medium text-primary hover:underline" href="mailto:contato@seuadvogado.com.br">
                      contato@seuadvogadoja.com.br
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
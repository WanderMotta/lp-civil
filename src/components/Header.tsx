import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const phoneNumber = "(11) 99999-9999"; // Replace with actual number
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary">
              <span className="text-lg md:text-xl font-bold text-primary-foreground">⚖️</span>
            </div>
            <div>
              <h1 className="text-base md:text-lg font-bold text-foreground">Direito Civil</h1>
              <p className="text-xs text-muted-foreground">Advocacia Especializada</p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href={`tel:${whatsappNumber}`}
              className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">{phoneNumber}</span>
            </a>
            
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="font-semibold text-sm md:text-base h-11"
            >
              <MessageCircle className="h-5 w-5" />
              Fale Agora!!!
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

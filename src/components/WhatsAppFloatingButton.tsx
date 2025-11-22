import { MessageCircle } from "lucide-react";

const WhatsAppFloatingButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/551196947374", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-fade-in group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8 group-hover:rotate-3 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </button>
  );
};

export default WhatsAppFloatingButton;

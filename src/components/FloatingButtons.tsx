import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const phoneNumber = "+254722566999";
  const whatsappMessage = encodeURIComponent("Hello Bestcare Facilities Management, I'm interested in your services.");

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      {/* WhatsApp Button */}
      <Button
        variant="floating"
        size="icon"
        className="bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl w-14 h-14"
        asChild
      >
        <a
          href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>

      {/* Call Button */}
      <Button
        variant="floating"
        size="icon"
        className="w-14 h-14"
        asChild
      >
        <a href={`tel:${phoneNumber}`} aria-label="Call Bestcare">
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;
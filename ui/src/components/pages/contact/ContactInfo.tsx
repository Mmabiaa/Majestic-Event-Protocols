import { Phone, Instagram } from "lucide-react";

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
        Get In Touch
      </h2>
      <div className="space-y-6">
        <a href="tel:0242907335" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <Phone className="text-gold" size={20} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium text-foreground">0242907335</p>
          </div>
        </a>
        <a href="tel:0558574989" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <Phone className="text-gold" size={20} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium text-foreground">0558574989</p>
          </div>
        </a>
        <a
          href="https://instagram.com/majestic_events_protocols"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <Instagram className="text-gold" size={20} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Instagram</p>
            <p className="font-medium text-foreground">@majestic_events_protocols</p>
          </div>
        </a>
      </div>
    </div>
  );
}

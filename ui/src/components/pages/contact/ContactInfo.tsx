import { Phone, Instagram } from "lucide-react";

const contacts = [
  { href: "tel:0242907335", Icon: Phone, label: "Phone", value: "0242 907 335" },
  { href: "tel:0558574989", Icon: Phone, label: "Phone", value: "0558 574 989" },
  {
    href: "https://instagram.com/majestic_events_protocols",
    Icon: Instagram,
    label: "Instagram",
    value: "@majestic_events_protocols",
    external: true,
  },
];

export function ContactInfo() {
  return (
    <div>
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold mb-3 font-light">
        Reach us
      </p>
      <h2
        className="font-heading text-3xl font-semibold text-foreground mb-2 leading-tight"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Get In <em className="italic text-gold">Touch</em>
      </h2>
      <div className="w-8 h-px bg-gold mb-8" />

      <div className="divide-y divide-gold/20 border-t border-gold/20">
        {contacts.map(({ href, Icon, label, value, external }) => (
          <a
            key={value}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-center gap-4 py-4 transition-all duration-300 hover:pl-2"
          >
            <div className="w-10 h-10 rounded-full border border-gold/35 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-gold/12 group-hover:border-gold">
              <Icon className="text-gold" size={16} strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.15em] uppercase text-gold/70 mb-0.5">
                {label}
              </p>
              <p className="text-sm text-foreground truncate">{value}</p>
            </div>
            <span className="ml-auto text-gold/40 text-xs transition-all duration-300 group-hover:text-gold group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
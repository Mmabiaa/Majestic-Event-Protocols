import { Link } from "@tanstack/react-router";
import { Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-3 gap-6 md:gap-12 items-start">
          <div className="flex flex-col items-center md:items-start gap-2">
            <img src={logo} alt="Majestic Events & Protocols" className="h-10 md:h-12 brightness-0 invert" />
            <span className="font-heading text-xs md:text-sm font-semibold text-center md:text-left leading-tight">
              Majestic Events & Protocols
            </span>
            <p className="hidden md:block text-background/50 italic text-xs">
              Poised, Prepared and Purpose Driven
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-xs md:text-sm font-semibold mb-2 md:mb-3">Quick Links</h4>
            <ul className="space-y-1">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/services" as const, label: "Services" },
                { to: "/events" as const, label: "Events" },
                { to: "/contact" as const, label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-xs text-background/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-xs md:text-sm font-semibold mb-2 md:mb-3">Contact</h4>
            <div className="space-y-1">
              <a href="tel:0242907335" className="flex items-center gap-1.5 text-xs text-background/60 hover:text-gold transition-colors">
                <Phone size={12} /> 0242907335
              </a>
              <a href="tel:0558574989" className="flex items-center gap-1.5 text-xs text-background/60 hover:text-gold transition-colors">
                <Phone size={12} /> 0558574989
              </a>
              <a
                href="https://instagram.com/majestic_events_protocols"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-background/60 hover:text-gold transition-colors"
              >
                <Instagram size={12} /> <span className="hidden md:inline">@majestic_events_protocols</span><span className="md:hidden">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-background/10 text-center">
          <p className="text-[10px] md:text-xs text-background/40">
            © {new Date().getFullYear()} Majestic Events & Protocols. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

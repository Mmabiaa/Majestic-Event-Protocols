import { Link } from "@tanstack/react-router";
import { Crown, Clock, Heart, Star, ArrowRight } from "lucide-react";

const previewServices = [
  { icon: Crown, title: "Events Coordination", desc: "Managing event timelines and execution processes with precision." },
  { icon: Clock, title: "Events Planning", desc: "Full event concept development and planning support." },
  { icon: Star, title: "Ushering Services", desc: "Professional ushering support for ceremonies and corporate events." },
  { icon: Heart, title: "MC / Hosting", desc: "Experienced and engaging event hosting services." },
  { icon: Crown, title: "Dowry Bearing", desc: "Support for traditional marriage ceremonies and bridesmaid duties." },
] as const;

export function HomeServicesPreview() {
  return (
    <section className="py-24 px-6 bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewServices.map((service, i) => (
            <Link
              to="/services"
              key={i}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border"
            >
              <service.icon className="text-gold mb-4" size={32} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-gold group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Crown, Clock, Heart, Star, ArrowRight, Plane, Users, Building, Languages, Mic, Gift } from "lucide-react";

const previewServices = [
  { icon: Clock, title: "Event Planning", desc: "Full event concept development and planning support." },
  { icon: Crown, title: "Event Coordination", desc: "Managing event timelines and execution processes with precision." },
  { icon: Heart, title: "Dowry Bearing", desc: "Support for traditional marriage ceremonies and bridesmaid duties." },
  { icon: Star, title: "Event Ushering", desc: "Professional ushering support for ceremonies and corporate events." },
  { icon: Gift, title: "Activations", desc: "Creative brand activations and experiential marketing events." },
  { icon: Users, title: "Waiting Services", desc: "Attentive hospitality staff for guest reception and service." },
  { icon: Building, title: "Conference & Exhibition Assistance", desc: "Comprehensive support for conferences, trade shows, and exhibitions." },
  { icon: Plane, title: "Airport Pickup", desc: "Seamless guest arrival coordination and welcome services." },
  { icon: Crown, title: "Hospitality Management", desc: "End-to-end hospitality operations and guest experience management." },
  { icon: Languages, title: "Bilingual Services", desc: "Professional multilingual support for international events." },
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
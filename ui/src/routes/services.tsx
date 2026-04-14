import { createFileRoute } from "@tanstack/react-router";
import { Crown, Clock, Star, Heart, Users } from "lucide-react";
import heroImg from "@/assets/hero-services.jpg";
import serviceCoordination from "@/assets/service-coordination.jpg";
import servicePlanning from "@/assets/service-planning.jpg";
import serviceUshering from "@/assets/service-ushering.jpg";
import serviceMc from "@/assets/service-mc.jpg";
import serviceTraditional from "@/assets/service-traditional.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const services = [
  {
    icon: Crown,
    title: "Events Coordination",
    description: "We expertly manage event timelines, vendor coordination, and on-the-day execution to ensure every moment flows seamlessly. Our coordination team handles logistics so you can focus on enjoying the occasion.",
    image: serviceCoordination,
  },
  {
    icon: Clock,
    title: "Events Planning",
    description: "From concept to completion, we develop comprehensive event plans tailored to your vision. Our planning process covers venue selection, theme development, budgeting, and every detail in between.",
    image: servicePlanning,
  },
  {
    icon: Users,
    title: "Ushering Services",
    description: "Our professional ushers provide warm, organized hospitality for your guests. Trained in etiquette and protocol, they ensure smooth guest flow at weddings, corporate functions, and special celebrations.",
    image: serviceUshering,
  },
  {
    icon: Star,
    title: "Master of Ceremonies / Hosting",
    description: "Our experienced MCs bring energy, charm, and professionalism to your event. They keep the program on track while engaging your audience and creating memorable moments throughout.",
    image: serviceMc,
  },
  {
    icon: Heart,
    title: "Dowry Bearing / Bridesmaid Duties",
    description: "We provide support for traditional marriage ceremonies with grace and cultural sensitivity. Our team handles dowry bearing, bridesmaid coordination, and traditional protocol with elegance.",
    image: serviceTraditional,
  },
];

function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Event planning" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground/80" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-background mb-4 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-background/80 text-lg animate-fade-in-up opacity-0 animation-delay-200">
            Delivering excellence through structured planning and professional coordination.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <service.icon className="text-gold" size={24} />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

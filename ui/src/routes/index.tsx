import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Crown, Clock, Heart, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Elegant event venue" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <img src={logo} alt="MEP Logo" className="h-28 md:h-36 mx-auto mb-8 animate-fade-in" />
          <p className="text-gold-light font-body text-lg md:text-xl tracking-[0.3em] uppercase mb-4 animate-fade-in-up opacity-0 animation-delay-200">
            Poised, Prepared and Purpose Driven
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-8 animate-fade-in-up opacity-0 animation-delay-400">
            Creating Unforgettable Experiences
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-600">
            <Link to="/services">
              <Button variant="hero" size="lg" className="rounded-full px-8 text-base">
                View Services <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg" className="rounded-full px-8 text-base">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Majestic Events & Protocols provides professional event coordination, planning, and protocol services 
            tailored to deliver seamless and memorable experiences. From elegant weddings to corporate galas, 
            we bring your vision to life with meticulous attention to detail and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Crown, title: "Events Coordination", desc: "Managing event timelines and execution processes with precision." },
              { icon: Clock, title: "Events Planning", desc: "Full event concept development and planning support." },
              { icon: Star, title: "Ushering Services", desc: "Professional ushering support for ceremonies and corporate events." },
              { icon: Heart, title: "MC / Hosting", desc: "Experienced and engaging event hosting services." },
              { icon: Crown, title: "Dowry Bearing", desc: "Support for traditional marriage ceremonies and bridesmaid duties." },
            ].map((service, i) => (
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

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Professionalism", desc: "Every detail handled with the highest standards." },
              { title: "Elegance", desc: "Refined aesthetics that leave lasting impressions." },
              { title: "Reliability", desc: "Consistent delivery you can count on." },
              { title: "Client Focus", desc: "Your satisfaction is our ultimate measure of success." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="text-gold" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Let Us Handle Your Next Event With Excellence
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Ready to create something unforgettable? Get in touch with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0242907335">
              <Button variant="hero" size="lg" className="rounded-full px-8">
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/233242907335" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="lg" className="rounded-full px-8">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

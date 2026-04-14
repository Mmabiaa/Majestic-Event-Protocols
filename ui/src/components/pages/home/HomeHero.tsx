import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import logo from "@/assets/logo.png";

export function HomeHero() {
  return (
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
  );
}

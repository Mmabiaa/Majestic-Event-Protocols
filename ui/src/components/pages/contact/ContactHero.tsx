import heroImg from "@/assets/hero-services.jpg";
export function ContactHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Event planning" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground/80" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-background mb-4 animate-fade-in-up">
          Contact Us
        </h1>
        <p className="text-background/80 text-lg animate-fade-in-up opacity-0 animation-delay-200">
          Let's plan something memorable together.
        </p>
      </div>
    </section>
  );
}

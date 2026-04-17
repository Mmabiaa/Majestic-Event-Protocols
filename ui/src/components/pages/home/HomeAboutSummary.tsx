import aboutImg from "@/assets/events/3.jpeg";

export function HomeAboutSummary() {
  return (
    <section className="py-12 sm:py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3 font-light">
              About Us
            </p>
            <h2
              className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Who <em className="italic text-gold">We Are</em>
            </h2>
          </div>
          <div className="sm:text-right">
            <div className="w-8 h-px bg-gold mb-2 sm:ml-auto" />
            <p className="text-sm text-muted-foreground font-light max-w-[200px] sm:ml-auto leading-relaxed">
            Poised, Prepared and Purpose Driven.
            </p>
          </div>
        </div>

        {/* Content */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1px", background: "rgba(184,148,63,0.2)", border: "1px solid rgba(184,148,63,0.2)" }}
        >
          {/* Text */}
          <div className="bg-background p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden order-1 md:order-1">
            {/* Ghost initial */}
            <span
              className="absolute bottom-4 right-6 text-[6rem] leading-none font-semibold text-gold/5 select-none pointer-events-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              M
            </span>

            <p className="text-[11px] tracking-[0.22em] uppercase text-gold mb-3 font-light">
              Event Staffing Agency
            </p>
            <h3
              className="text-2xl sm:text-3xl font-semibold text-foreground leading-tight mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Majestic Events
            </h3>
            <h3
              className="text-2xl sm:text-3xl font-semibold text-foreground leading-tight mb-1 italic text-gold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              & Protocols
            </h3>

            <div className="w-8 h-px bg-gold my-4" />

            <p className="text-muted-foreground leading-relaxed font-light text-sm">
              We offer a wide range of services, including event planning, 
              event coordination, dowry bearing, event ushering, activations, 
              waiting services, conference and exhibition assistance, 
              hospitality management, bilingual services as well as professional 
              masters of ceremonies to take care of your event.
            </p>
          </div>

          {/* Image */}
          <div className="overflow-hidden bg-background order-2 md:order-2">
            <img
              src={aboutImg}
              alt="Elegant event setup"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ height: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
import { services } from "./services-data";

export function ServicesList() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3 font-light">
              What We Offer
            </p>
            <h2
              className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our <em className="italic text-gold">Services</em>
            </h2>
          </div>
          <div className="sm:text-right">
            <div className="w-8 h-px bg-gold mb-2 sm:ml-auto" />
            <p className="text-sm text-muted-foreground font-light max-w-[200px] sm:ml-auto leading-relaxed">
              Excellence delivered with every service.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "1px", background: "rgba(184,148,63,0.2)", border: "1px solid rgba(184,148,63,0.2)" }}
            >
              {/* Image */}
              <div className={`overflow-hidden bg-background order-1 ${i % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className={`bg-background p-10 sm:p-12 flex flex-col justify-center relative overflow-hidden order-2 ${i % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                {/* Ghost initial */}
                <span
                  className="absolute bottom-4 right-6 text-[8rem] leading-none font-semibold text-gold/5 select-none pointer-events-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {service.title.charAt(0)}
                </span>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <service.icon className="text-gold" size={22} />
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-semibold text-foreground"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h3>
                </div>

                <div className="w-8 h-px bg-gold mb-6" />

                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Link } from "@tanstack/react-router";

const previewServices = [
  { num: "01", title: "Event Planning", desc: "Full event concept development and planning support." },
  { num: "02", title: "Event Coordination", desc: "Managing event timelines and execution processes with precision." },
  { num: "03", title: "Dowry Bearing", desc: "Support for traditional marriage ceremonies and bridesmaid duties." },
  { num: "04", title: "Event Ushering", desc: "Professional ushering support for ceremonies and corporate events." },
  { num: "05", title: "Activations", desc: "Creative brand activations and experiential marketing events." },
  { num: "06", title: "Waiting Services", desc: "Attentive hospitality staff for guest reception and service." },
  { num: "07", title: "Conference & Exhibition", desc: "Comprehensive support for conferences, trade shows, and exhibitions." },
  { num: "08", title: "Airport Pickup", desc: "Seamless guest arrival coordination and welcome services." },
  { num: "09", title: "Hospitality Management", desc: "End-to-end hospitality operations and guest experience management." },
  { num: "10", title: "Bilingual Services", desc: "Professional multilingual support for international events." },
] as const;

export function HomeServicesPreview() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-warm">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3 font-light">
              What we offer
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
              Every occasion, handled with mastery and grace.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1px", background: "rgba(184,148,63,0.2)", border: "1px solid rgba(184,148,63,0.2)" }}
        >
          {previewServices.map((service) => (
            <Link
              to="/services"
              key={service.num}
              className="group relative bg-background hover:bg-muted/40 transition-colors duration-300 p-7 overflow-hidden"
            >
              {/* Animated bottom border */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out" />

              {/* Ghost number */}
              <span
                className="absolute top-3 right-4 text-[2.5rem] font-normal text-gold/10 group-hover:text-gold/25 transition-colors duration-300 select-none leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {service.num}
              </span>

              {/* Content */}
              <h3
                className="text-xl font-semibold text-foreground mb-2 pr-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {service.title}
              </h3>
              <div className="w-5 h-px bg-gold mb-3" />
              <p className="text-muted-foreground text-[13px] leading-relaxed font-light">
                {service.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 text-[10px] tracking-[0.18em] uppercase text-gold opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-block px-10 py-3.5 border border-gold text-gold text-[11px] tracking-[0.2em] uppercase font-light hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
}
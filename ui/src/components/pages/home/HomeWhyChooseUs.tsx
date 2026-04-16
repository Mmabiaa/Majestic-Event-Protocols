import { useEffect, useRef } from "react";

const reasons = [
  {
    num: "01",
    title: "Professionalism",
    desc: "Every detail handled with the highest standards, from first contact to final delivery.",
  },
  {
    num: "02",
    title: "Elegance",
    desc: "Refined aesthetics that leave lasting impressions and elevate every experience.",
  },
  {
    num: "03",
    title: "Reliability",
    desc: "Consistent, dependable delivery you can count on — every single time.",
  },
  {
    num: "04",
    title: "Client Focus",
    desc: "Your satisfaction is our ultimate measure of success. Always.",
  },
];

export function HomeWhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3 font-light">
              Our commitment
            </p>
            <h2
              className="font-heading text-4xl sm:text-5xl font-semibold leading-tight text-foreground"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Why Choose <em className="italic text-gold">Us</em>
            </h2>
          </div>
          <div className="sm:text-right">
            <div className="w-12 h-px bg-gold mb-2 sm:ml-auto" />
            <p className="text-muted-foreground text-sm font-light max-w-[200px] sm:ml-auto leading-relaxed">
              A standard of excellence that speaks before we do.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: "1px", background: "rgba(184,148,63,0.2)", border: "1px solid rgba(184,148,63,0.2)" }}
        >
          {reasons.map((item) => (
            <div
              key={item.num}
              className="group relative bg-background hover:bg-muted/40 transition-colors duration-300 p-8 overflow-hidden"
            >
              {/* Animated left border */}
              <span className="absolute left-0 top-0 w-[3px] h-0 bg-gold group-hover:h-full transition-all duration-500 ease-out" />

              {/* Ghost number */}
              <span
                className="absolute top-4 right-5 text-6xl font-normal text-gold/10 group-hover:text-gold/25 transition-colors duration-300 select-none leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.num}
              </span>

              {/* Content */}
              <h3
                className="text-2xl font-semibold text-foreground mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.title}
              </h3>
              <div className="w-6 h-px bg-gold mb-3" />
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import awardImg from "@/assets/events/awards/1.jpeg";
import { Trophy } from "lucide-react";

export function HomeAward() {
  return (
    <section className="py-16 sm:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3 font-light">
              Recognition
            </p>
            <h2
              className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our <em className="italic text-gold">Award</em>
            </h2>
          </div>
          <div className="sm:text-right">
            <div className="w-8 h-px bg-gold mb-2 sm:ml-auto" />
            <p className="text-sm text-muted-foreground font-light max-w-[200px] sm:ml-auto leading-relaxed">
              Excellence recognised on a grand stage.
            </p>
          </div>
        </div>

        {/* Content */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1px", background: "rgba(184,148,63,0.2)", border: "1px solid rgba(184,148,63,0.2)" }}
        >
          {/* Text panel */}
          <div className="bg-background p-10 sm:p-14 flex flex-col justify-center relative overflow-hidden order-2 md:order-1">

            {/* Ghost letter */}
            <span
              className="absolute bottom-4 right-6 text-[8rem] leading-none font-semibold text-gold/5 select-none pointer-events-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              R
            </span>

            {/* Trophy badge */}
            <div
              className="w-10 h-10 flex items-center justify-center mb-6 flex-shrink-0"
              style={{ border: "1px solid rgba(184,148,63,0.35)" }}
            >
              <Trophy size={18} className="text-gold" strokeWidth={1.5} />
            </div>

            <p className="text-[11px] tracking-[0.22em] uppercase text-gold mb-4 font-light">
              Regalia 2026
            </p>

            <h3
              className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Best Entrepreneur
            </h3>
            <h3
              className="text-3xl sm:text-4xl font-semibold leading-tight italic mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#B8943F" }}
            >
              of the Year
            </h3>

            <div className="w-8 h-px bg-gold my-6" />

            <p className="text-muted-foreground leading-relaxed font-light text-sm">
              Majestic Events &amp; Protocols was honoured with the prestigious{" "}
              <span className="text-foreground font-normal">Best Entrepreneur of the Year</span> award
              at Regalia 2026 a testament to our unwavering commitment to excellence, professionalism,
              and delivering extraordinary experiences that leave lasting impressions.
            </p>
          </div>

          {/* Image panel */}
          <div className="overflow-hidden bg-background aspect-[4/3] order-1 md:order-2">
            <img
              src={awardImg}
              alt="Majestic Events & Protocols — Best Entrepreneur of the Year, Regalia 2026"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
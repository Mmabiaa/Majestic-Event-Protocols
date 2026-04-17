import { Eye, Target } from "lucide-react";

export function ServicesMissionVision() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-warm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3 font-light">
              Our Compass
            </p>
            <h2
              className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Mission <em className="italic text-gold">& Vision</em>
            </h2>
          </div>
          <div className="sm:text-right">
            <div className="w-8 h-px bg-gold mb-2 sm:ml-auto" />
            <p className="text-sm text-muted-foreground font-light max-w-[200px] sm:ml-auto leading-relaxed">
              Guiding principles that drive our excellence.
            </p>
          </div>
        </div>

        {/* Content */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1px", background: "rgba(184,148,63,0.2)", border: "1px solid rgba(184,148,63,0.2)" }}
        >
          {/* Mission Card */}
          <div className="bg-background p-10 sm:p-12 flex flex-col relative overflow-hidden">
            {/* Ghost initial */}
            <span
              className="absolute bottom-4 right-6 text-[8rem] leading-none font-semibold text-gold/5 select-none pointer-events-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              M
            </span>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Target className="text-gold" size={22} />
              </div>
              <h3
                className="text-2xl font-semibold text-foreground"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Mission Statement
              </h3>
            </div>

            <div className="w-8 h-px bg-gold mb-6" />

            <p className="text-muted-foreground leading-relaxed font-light text-sm">
              To provide exceptional ushering and protocol services through professionalism, 
              attention to detail, and a commitment to excellence, ensuring every event is 
              seamless, elegant, and unforgettable for both clients and guests.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-background p-10 sm:p-12 flex flex-col relative overflow-hidden">
            {/* Ghost initial */}
            <span
              className="absolute bottom-4 right-6 text-[8rem] leading-none font-semibold text-gold/5 select-none pointer-events-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              V
            </span>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Eye className="text-gold" size={22} />
              </div>
              <h3
                className="text-2xl font-semibold text-foreground"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Vision Statement
              </h3>
            </div>

            <div className="w-8 h-px bg-gold mb-6" />

            <p className="text-muted-foreground leading-relaxed font-light text-sm">
              To become the leading and most trusted event ushering and protocol agency, 
              known for delivering excellence, elegance, and professionalism at every event, 
              while setting the standard for outstanding guest experience and seamless event 
              coordination across Ghana and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
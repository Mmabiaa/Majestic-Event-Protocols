import ceoImg from "@/assets/people/ceo.jpeg";

export function HomeMeetCeo() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-warm">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3 font-light">
              Leadership
            </p>
            <h2
              className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Meet the <em className="italic text-gold">CEO</em>
            </h2>
          </div>
          <div className="sm:text-right">
            <div className="w-8 h-px bg-gold mb-2 sm:ml-auto" />
            <p className="text-sm text-muted-foreground font-light max-w-[200px] sm:ml-auto leading-relaxed">
              Vision, elegance, and excellence in every detail.
            </p>
          </div>
        </div>

        {/* Content */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1px", background: "rgba(184,148,63,0.2)", border: "1px solid rgba(184,148,63,0.2)" }}
        >
          {/* Image */}
          <div className="overflow-hidden bg-background aspect-square">
            <img
              src={ceoImg}
              alt="Miss Doreen Akua Afriyie — CEO, Majestic Events & Protocols"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="bg-background p-10 sm:p-14 flex flex-col justify-center relative overflow-hidden">
            {/* Ghost initial */}
            <span
              className="absolute bottom-4 right-6 text-[8rem] leading-none font-semibold text-gold/5 select-none pointer-events-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              D
            </span>

            <p className="text-[11px] tracking-[0.22em] uppercase text-gold mb-4 font-light">
              Chief Executive Officer
            </p>
            <h3
              className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Miss Doreen
            </h3>
            <h3
              className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight mb-1 italic text-gold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Akua Afriyie
            </h3>

            <div className="w-8 h-px bg-gold my-6" />

            <p className="text-muted-foreground leading-relaxed font-light text-sm">
              Majestic Events &amp; Protocols is driven by a passion for premium guest experience and seamless event execution. Miss Afriyie leads with professionalism, attention to detail, and a commitment to ensuring that every event feels refined, organized, and unforgettable.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/events/birthday/hero.jpeg";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Elegant event venue"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Corner accents */}
      {["top-4 left-4 sm:top-8 sm:left-8", "top-4 right-4 sm:top-8 sm:right-8", "bottom-4 left-4 sm:bottom-8 sm:left-8", "bottom-4 right-4 sm:bottom-8 sm:right-8"].map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} z-10 pointer-events-none`}
          style={{
            width: 18, height: 18,
            borderTop: i < 2 ? "2px solid #B8943F" : "none",
            borderBottom: i >= 2 ? "2px solid #B8943F" : "none",
            borderLeft: i % 2 === 0 ? "2px solid #B8943F" : "none",
            borderRight: i % 2 === 1 ? "2px solid #B8943F" : "none",
          }}
        />
      ))}

      {/* Content — left aligned, bottom-anchored */}
      <div className="relative z-10 flex flex-col justify-end px-6 sm:px-10 md:px-16 lg:px-20 pb-12 sm:pb-16 md:pb-20 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end max-w-7xl mx-auto w-full gap-8 lg:gap-12">
          
          {/* Left side - Text content */}
          <div className="flex-1 w-full lg:w-auto">

            <p
              className="text-[11px] tracking-[0.35em] uppercase mb-4 sm:mb-6 font-light animate-fade-in-up opacity-0 animation-delay-200"
              style={{ color: "#FFFFFF" }}
            >
              Poised, Prepared &amp; Purpose Driven
            </p>

            <h1
              className="font-semibold text-white leading-tight animate-fade-in-up opacity-0 animation-delay-400"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
              }}
            >
              Creating
            </h1>
            <h1
              className="font-semibold leading-tight mb-4 sm:mb-6 animate-fade-in-up opacity-0 animation-delay-400"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                fontStyle: "italic",
                color: "#FFFFFF",
              }}
            >
              Unforgettable Experiences
            </h1>

            <div
              className="mb-6 sm:mb-8 lg:mb-10 animate-fade-in-up opacity-0 animation-delay-500"
              style={{ width: 40, height: 1, background: "#FFFFFF" }}
            />

          </div>

          {/* Right side - CTAs */}
          <div className="w-full lg:w-auto animate-fade-in-up opacity-0 animation-delay-600">
            {/* Desktop: Horizontal buttons */}
            <div className="hidden sm:flex flex-row gap-4">
              <Link
                to="/services"
                className="px-6 sm:px-8 md:px-10 py-3 text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300 whitespace-nowrap text-center"
                style={{ background: "#B8943F", color: "#FFFFFF" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#a07a30")}
                onMouseLeave={e => (e.currentTarget.style.background = "#B8943F")}
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="px-6 sm:px-8 md:px-10 py-3 text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300 whitespace-nowrap text-center"
                style={{ border: "1px solid rgba(184,148,63,0.6)", color: "#FFFFFF" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#B8943F"; e.currentTarget.style.background = "rgba(184,148,63,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(184,148,63,0.6)"; e.currentTarget.style.background = "transparent"; }}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile: Vertical buttons with reduced width */}
            <div className="flex sm:hidden flex-col gap-3">
              <Link
                to="/services"
                className="px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-300 text-center w-40"
                style={{ background: "#B8943F", color: "#FFFFFF" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#a07a30")}
                onMouseLeave={e => (e.currentTarget.style.background = "#B8943F")}
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-300 text-center w-40"
                style={{ border: "1px solid rgba(184,148,63,0.6)", color: "#FFFFFF" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#B8943F"; e.currentTarget.style.background = "rgba(184,148,63,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(184,148,63,0.6)"; e.currentTarget.style.background = "transparent"; }}
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
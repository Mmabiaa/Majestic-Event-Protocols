// Navbar.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const navLinks = [
    { to: "/" as const, label: "Home" },
    { to: "/services" as const, label: "Services" },
    { to: "/events" as const, label: "Events" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 flex items-center justify-between h-16 sm:h-20">

        {/* Logo & Agency Name - NOW VISIBLE ON ALL DEVICES */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src={logo}
            alt="Majestic Events & Protocols"
            className={`transition-all duration-500 ${scrolled ? "h-7" : "h-9"}`}
          />
          <span
            className={`text-sm font-semibold leading-tight transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.04em" }}
          >
            Majestic Events &amp; Protocols
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-300 ${scrolled ? "text-foreground/70 hover:text-gold" : "text-white/80 hover:text-gold"}`}
              activeProps={{ className: `text-[11px] tracking-[0.2em] uppercase font-light text-gold border-b border-gold pb-0.5` }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            to="/contact"
            className={`px-7 py-2.5 text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-300 ${
              scrolled
                ? "border border-gold text-gold hover:bg-gold hover:text-white"
                : "border border-white/60 text-white hover:border-gold hover:text-gold"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex-shrink-0 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="flex flex-col gap-1.5 w-5">
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-gold/20 px-6 py-6 flex flex-col gap-5 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[11px] tracking-[0.2em] uppercase font-light text-foreground/70 hover:text-gold transition-colors"
              activeProps={{ className: "text-[11px] tracking-[0.2em] uppercase font-light text-gold" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-8 h-px bg-gold/40" />
          <Link
            to="/contact"
            className="text-[10px] tracking-[0.2em] uppercase font-light border border-gold text-gold px-6 py-3 text-center hover:bg-gold hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
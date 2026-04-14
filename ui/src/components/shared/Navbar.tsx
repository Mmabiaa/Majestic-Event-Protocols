import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/" as const, label: "Home" },
    { to: "/services" as const, label: "Services" },
    { to: "/events" as const, label: "Events" },
  ];

  return (
    <header
      className={`fixed top-3 left-3 right-3 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-1"
          : "bg-background/80 backdrop-blur-sm py-2"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logo}
            alt="Majestic Events & Protocols"
            className={`transition-all duration-500 ${scrolled ? "h-8" : "h-10"}`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300"
              activeProps={{ className: "text-sm font-medium tracking-wide text-primary border-b-2 border-primary pb-1 transition-colors duration-300" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block flex-shrink-0">
          <Link to="/contact">
            <Button variant="gold" size="sm" className="rounded-full px-6">
              Contact Us
            </Button>
          </Link>
        </div>

        <span className="md:hidden font-heading text-sm font-bold text-foreground absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          Majestic Events
        </span>
        <button
          className="md:hidden text-foreground flex-shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden px-4 pb-3 pt-1 flex flex-col gap-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium py-1.5 text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-sm font-medium py-1.5 text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="gold" size="sm" className="rounded-full w-full mt-1">
              Contact Us
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}

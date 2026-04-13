import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import eventWedding from "@/assets/event-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventTraditional from "@/assets/event-traditional.jpg";
import eventCelebration from "@/assets/event-celebration.jpg";
import eventReception from "@/assets/event-reception.jpg";
import eventUshering from "@/assets/event-ushering.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Our Events — Majestic Events & Protocols" },
      { name: "description", content: "Browse our portfolio of weddings, corporate events, traditional ceremonies and special celebrations." },
      { property: "og:title", content: "Our Events — Majestic Events & Protocols" },
      { property: "og:description", content: "See our stunning event portfolio showcasing weddings, galas, and ceremonies." },
    ],
  }),
  component: EventsPage,
});

const categories = ["All", "Weddings", "Corporate", "Traditional", "Celebrations"];

const events = [
  { src: eventWedding, title: "Elegant Garden Wedding", category: "Weddings" },
  { src: eventCorporate, title: "Corporate Gala Dinner", category: "Corporate" },
  { src: eventTraditional, title: "Traditional Ceremony", category: "Traditional" },
  { src: eventCelebration, title: "Birthday Celebration", category: "Celebrations" },
  { src: eventReception, title: "Wedding Reception", category: "Weddings" },
  { src: eventUshering, title: "Professional Ushering", category: "Corporate" },
];

function EventsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? events : events.filter((e) => e.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-warm">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Events
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            A showcase of memorable events we've had the privilege to coordinate and execute.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, i) => (
            <button
              key={i}
              onClick={() => setSelected(event.src)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={event.src}
                alt={event.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-body uppercase tracking-widest text-gold-light">
                  {event.category}
                </span>
                <h3 className="font-heading text-lg font-semibold text-background">
                  {event.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Event preview"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
          />
        </div>
      )}
    </main>
  );
}

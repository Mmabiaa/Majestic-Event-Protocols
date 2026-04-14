import type { EventGalleryItem } from "./events-data";

type EventsGalleryProps = {
  events: EventGalleryItem[];
  onSelectImage: (src: string) => void;
};

export function EventsGallery({ events, onSelectImage }: EventsGalleryProps) {
  return (
    <section className="pb-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <button
            key={i}
            onClick={() => onSelectImage(event.src)}
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
  );
}

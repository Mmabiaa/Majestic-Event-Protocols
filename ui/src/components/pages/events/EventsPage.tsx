import { useState } from "react";
import { eventCategories, galleryEvents } from "./events-data";
import { EventsHero } from "./EventsHero";
import { EventsCategoryFilter } from "./EventsCategoryFilter";
import { EventsGallery } from "./EventsGallery";
import { EventsLightbox } from "./EventsLightbox";

export function EventsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof eventCategories)[number]>("All");

  const filtered = activeCategory === "All" ? galleryEvents : galleryEvents.filter((e) => e.category === activeCategory);

  return (
    <main>
      <EventsHero />
      <EventsCategoryFilter
        categories={eventCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <EventsGallery events={filtered} onSelectImage={setSelected} />
      <EventsLightbox imageSrc={selected} onClose={() => setSelected(null)} />
    </main>
  );
}

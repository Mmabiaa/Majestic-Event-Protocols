import eventWedding from "@/assets/event-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventTraditional from "@/assets/event-traditional.jpg";
import eventCelebration from "@/assets/event-celebration.jpg";
import eventReception from "@/assets/event-reception.jpg";
import eventUshering from "@/assets/event-ushering.jpg";

export const eventCategories = ["All", "Weddings", "Corporate", "Traditional", "Celebrations"] as const;

export type EventGalleryItem = {
  src: string;
  title: string;
  category: string;
};

export const galleryEvents: EventGalleryItem[] = [
  { src: eventWedding, title: "Elegant Garden Wedding", category: "Weddings" },
  { src: eventCorporate, title: "Corporate Gala Dinner", category: "Corporate" },
  { src: eventTraditional, title: "Traditional Ceremony", category: "Traditional" },
  { src: eventCelebration, title: "Birthday Celebration", category: "Celebrations" },
  { src: eventReception, title: "Wedding Reception", category: "Weddings" },
  { src: eventUshering, title: "Professional Ushering", category: "Corporate" },
];

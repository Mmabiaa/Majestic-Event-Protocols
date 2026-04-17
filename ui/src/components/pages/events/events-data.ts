import eventUshering from "@/assets/events/ushering/1.jpeg";
export const eventCategories = ["All", "Weddings", "Corporate", "Traditional", "Celebrations"] as const;

export type EventGalleryItem = {
  src: string;
  title: string;
  category: string;
};

export const galleryEvents: EventGalleryItem[] = [
  { src: 'https://i.pinimg.com/736x/ce/ff/3d/ceff3d1743ad3e000234e87f217085e4.jpg', title: "Elegant Garden Wedding", category: "Weddings" },
  { src: 'https://i.pinimg.com/1200x/43/53/bb/4353bb19b3b96eefdf6df79957c06008.jpg', title: "Corporate Gala Dinner", category: "Corporate" },
  { src: 'https://i.pinimg.com/1200x/f2/7e/1f/f27e1f783898dbc1247d2477f729ca24.jpg', title: "Traditional Ceremony", category: "Traditional" },
  { src: 'https://i.pinimg.com/736x/d2/fe/f9/d2fef9336dade16060f5e0c960ba7fe4.jpg', title: "Birthday Celebration", category: "Celebrations" },
  { src: 'https://i.pinimg.com/736x/32/58/8d/32588d8f4184417b347db4fda53bfa01.jpg', title: "Wedding Reception", category: "Weddings" },
  { src: eventUshering, title: "Professional Ushering", category: "Corporate" },
];

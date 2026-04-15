export const eventCategories = ["All", "Weddings", "Corporate", "Traditional", "Celebrations"] as const;

export type EventGalleryItem = {
  src: string;
  title: string;
  category: string;
};

export const galleryEvents: EventGalleryItem[] = [
  { src: 'https://i.pinimg.com/736x/ce/ff/3d/ceff3d1743ad3e000234e87f217085e4.jpg', title: "Elegant Garden Wedding", category: "Weddings" },
  { src: 'https://i.pinimg.com/1200x/43/53/bb/4353bb19b3b96eefdf6df79957c06008.jpg', title: "Corporate Gala Dinner", category: "Corporate" },
  { src: 'https://i.pinimg.com/1200x/43/53/bb/4353bb19b3b96eefdf6df79957c06008.jpg', title: "Traditional Ceremony", category: "Traditional" },
  { src: 'https://i.pinimg.com/1200x/43/53/bb/4353bb19b3b96eefdf6df79957c06008.jpg', title: "Birthday Celebration", category: "Celebrations" },
  { src: 'https://i.pinimg.com/1200x/43/53/bb/4353bb19b3b96eefdf6df79957c06008.jpg', title: "Wedding Reception", category: "Weddings" },
  { src: 'https://i.pinimg.com/1200x/43/53/bb/4353bb19b3b96eefdf6df79957c06008.jpg', title: "Professional Ushering", category: "Corporate" },
];

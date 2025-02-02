export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "service-1",
    title: "Wedding Photography",
    description: "Capture every precious moment of your special day with our professional photography services.",
    imageUrl: "/images/lace1.webp"
  },
  {
    id: "service-2",
    title: "Engagement Sessions",
    description: "Beautiful pre-wedding photo sessions to celebrate your engagement.",
    imageUrl: "/images/lace3.webp"
  },
  {
    id: "service-3",
    title: "Destination Weddings",
    description: "Available for destination weddings worldwide. Let's create memories anywhere.",
    imageUrl: "/images/lace5.webp"
  }
];

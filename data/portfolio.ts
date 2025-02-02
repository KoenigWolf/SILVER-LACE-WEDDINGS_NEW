import type { Category } from "@/data/categories";

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category["label"];
  description: string;
  imageUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "portfolio-1",
    title: "Garden Wedding",
    category: "Wedding",
    description: "A beautiful outdoor ceremony surrounded by nature",
    imageUrl: "/images/hiyori1.webp"
  },
  {
    id: "portfolio-2",
    title: "Beach Engagement",
    category: "Engagement",
    description: "Romantic sunset photoshoot by the ocean",
    imageUrl: "/images/hiyori4.webp"
  },
  {
    id: "portfolio-3",
    title: "Traditional Ceremony",
    category: "Wedding",
    description: "Elegant traditional Japanese wedding ceremony",
    imageUrl: "/images/lace7.webp"
  },
  {
    id: "portfolio-4",
    title: "Modern Reception",
    category: "Reception",
    description: "Contemporary wedding reception in the heart of Tokyo",
    imageUrl: "/images/hiyori8.webp"
  },
  {
    id: "portfolio-5",
    title: "Cherry Blossom Session",
    category: "Pre-wedding",
    description: "Romantic spring photoshoot under sakura trees",
    imageUrl: "/images/lace9.webp"
  },
  {
    id: "portfolio-6",
    title: "Destination Wedding",
    category: "Wedding",
    description: "Intimate destination wedding in Bali",
    imageUrl: "/images/hiyori11.webp"
  }
];

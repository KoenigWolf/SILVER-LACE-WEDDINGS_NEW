export interface Testimonial {
  id: string;
  name: string;
  text: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Yuki & Kenji",
    text: "Higashi-san captured our day perfectly. The photos are beyond our expectations!",
    imageUrl: "/images/m-kaede.webp",
  },
  {
    id: "testimonial-2",
    name: "Sakura & Hiroshi",
    text: "We are in awe of the stunning images. Every moment was beautifully documented.",
    imageUrl: "/images/m-hiyori.webp",
  },
  {
    id: "testimonial-3",
    name: "Emi & Takeshi",
    text: "The attention to detail in our photos is incredible. We'll cherish these forever.",
    imageUrl: "/images/m-mary.webp",
  },
];

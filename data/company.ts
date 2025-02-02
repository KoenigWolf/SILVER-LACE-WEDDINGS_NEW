export interface CompanyValue {
  id: string;
  title: string;
  description: string;
}

export interface CompanyExperience {
  years: number;
  weddings: number;
  satisfaction: number;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  mission: string;
  values: CompanyValue[];
  experience: CompanyExperience;
  testimonials: Testimonial[]; // testimonials を追加
}

export const COMPANY_INFO: CompanyInfo = {
  name: "SILVER LACE WEDDINGS",
  description:
    "We are a dedicated team of photographers specializing in capturing the most precious moments of your wedding day. Based in Tokyo, we serve couples throughout Japan and beyond, bringing years of experience and passion to every event we photograph.",
  mission:
    "Our mission is to capture the genuine emotions, subtle details, and beautiful moments that make your wedding day unique.",
  values: [
    {
      id: "value-1",
      title: "Authenticity",
      description: "We believe in capturing real moments and genuine emotions."
    },
    {
      id: "value-2",
      title: "Attention to Detail",
      description: "Every small detail matters in telling your complete wedding story."
    },
    {
      id: "value-3",
      title: "Professional Excellence",
      description: "We maintain the highest standards in our work and service."
    }
  ],
  experience: {
    years: 10,
    weddings: 500,
    satisfaction: 100
  },
  testimonials: [
    {
      id: "testimonial-1",
      name: "Emma & John",
      message: "Silver Lace Weddings captured every beautiful moment of our wedding!"
    },
    {
      id: "testimonial-2",
      name: "Sophia & Liam",
      message: "The photos were absolutely stunning. Highly recommended!"
    },
    {
      id: "testimonial-3",
      name: "Mia & Noah",
      message: "We couldn't have asked for a better photography team. Thank you!"
    }
  ]
};

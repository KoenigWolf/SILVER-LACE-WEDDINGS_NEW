// data/sections.tsx
import { COMPANY_INFO } from "@/data/company";
import { PORTFOLIO_CATEGORIES } from "@/data/categories";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";
import { services, type Service } from "@/data/services";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { CONTACT_FORM_FIELDS, CONTACT_SUCCESS_MESSAGE, CONTACT_ERROR_MESSAGE } from "@/data/forms";
import { IMAGES } from "@/data/images";

// 型定義
export interface StatItem {
  id: "years" | "weddings" | "satisfaction";
  value: number;
  label: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  mission?: string;
  image?: string;
  values?: CompanyValue[];
  stats?: StatItem[];
  categories?: typeof PORTFOLIO_CATEGORIES;
  items?: PortfolioItem[] | Service[] | Testimonial[];
  fields?: typeof CONTACT_FORM_FIELDS;
  successMessage?: string;
  errorMessage?: string;
}

// セクションデータ
export const sections: Record<string, Section> = {
  about: {
    id: "about",
    title: "About Us",
    description: COMPANY_INFO.description,
    mission: COMPANY_INFO.mission,
    image: IMAGES.about,
    values: COMPANY_INFO.values,
    stats: [
      { id: "years", value: COMPANY_INFO.experience.years, label: "Years of Experience" },
      { id: "weddings", value: COMPANY_INFO.experience.weddings, label: "Weddings Captured" },
      { id: "satisfaction", value: COMPANY_INFO.experience.satisfaction, label: "% Client Satisfaction" },
    ],
  },
  portfolio: {
    id: "portfolio",
    title: "Our Portfolio",
    categories: PORTFOLIO_CATEGORIES,
    items: portfolioItems as PortfolioItem[], // ✅ 型アサーションで明示的に指定
  },
  services: {
    id: "services",
    title: "Our Services",
    items: services as Service[], // ✅ 型アサーションで明示的に指定
  },
  testimonials: {
    id: "testimonials",
    title: "Client Testimonials",
    description: "See what our happy couples have to say about our services.",
    items: testimonials as Testimonial[], // ✅ 型アサーションで明示的に指定
  },
  contact: {
    id: "contact",
    title: "Contact Us",
    description: "あなたの特別な日のお手伝いをさせていただきます。お気軽にお問い合わせください。",
    fields: CONTACT_FORM_FIELDS,
    successMessage: CONTACT_SUCCESS_MESSAGE,
    errorMessage: CONTACT_ERROR_MESSAGE,
  },
};

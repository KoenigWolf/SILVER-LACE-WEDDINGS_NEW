export interface Category {
  id: string;
  label: string;
}

export const PORTFOLIO_CATEGORIES: Category[] = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "wedding",
    label: "Wedding",
  },
  {
    id: "engagement",
    label: "Engagement",
  },
  {
    id: "reception",
    label: "Reception",
  },
  {
    id: "pre-wedding",
    label: "Pre-wedding",
  }
];

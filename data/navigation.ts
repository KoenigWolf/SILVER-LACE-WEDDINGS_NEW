export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
    isButton: true,
  },
];

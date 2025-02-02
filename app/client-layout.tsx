"use client";

import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import { useMemo } from "react";
import type { ReactNode } from "react";
import { NAV_ITEMS } from "@/data/navigation";
import classNames from "classnames";

interface SocialLink {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

const socialLinks: SocialLink[] = [
  { id: "instagram", icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { id: "facebook", icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { id: "pinterest", icon: FaPinterest, href: "https://pinterest.com", label: "Pinterest" }
];

function SocialLinks() {
  return (
    <nav aria-label="Social media links">
      <ul className="flex space-x-6">
        {socialLinks.map(({ id, icon: Icon, href, label }) => (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterNavigation() {
  return (
    <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
      {NAV_ITEMS.filter((item: NavItem) => !item.isButton).map(({ label, href }) => (
        <a key={label} href={href} className="text-sm text-gray-400 transition-colors hover:text-white">
          {label}
        </a>
      ))}
    </nav>
  );
}

function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="text-gray-400 bg-black">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-white">Silver Lace Weddings</h2>
            <p className="max-w-md text-sm">
              Capturing your precious moments with elegance and style. Your wedding memories deserve to be preserved in the most beautiful way possible.
            </p>
            <SocialLinks />
          </div>
          <div className="space-y-8">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <FooterNavigation />
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm">© {currentYear} Silver Lace Weddings. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

"use client";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";

const socialLinks = [
  {
    id: "instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram"
  },
  {
    id: "facebook",
    icon: FaFacebook,
    href: "https://facebook.com",
    label: "Facebook"
  },
  {
    id: "pinterest",
    icon: FaPinterest,
    href: "https://pinterest.com",
    label: "Pinterest"
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Social Links */}
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

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {currentYear} Silver Lace Weddings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
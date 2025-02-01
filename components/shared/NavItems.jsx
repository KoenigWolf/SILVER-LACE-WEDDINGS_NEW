"use client";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants/navigation";

export function NavItems({ isMobile = false, onItemClick }) {
  const renderLink = ({ label, href, isButton }, index) => {
    if (isMobile) {
      return (
        <li key={index} className="py-2">
          <a
            href={href}
            className="text-white hover:text-gray-300"
            onClick={onItemClick}
          >
            {label}
          </a>
        </li>
      );
    }

    return (
      <li key={index}>
        <Button
          variant={isButton ? "outline" : "link"}
          asChild
        >
          <a href={href}>{label}</a>
        </Button>
      </li>
    );
  };

  return (
    <ul className={isMobile ? "flex flex-col items-center py-4" : "flex space-x-8"}>
      {NAV_ITEMS.map(renderLink)}
    </ul>
  );
}
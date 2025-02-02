"use client";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, type NavItem } from "@/constants/navigation";

interface NavItemsProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function NavItems({ isMobile = false, onItemClick }: NavItemsProps) {
  const renderLink = ({ label, href, isButton }: NavItem, index: number) => {
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

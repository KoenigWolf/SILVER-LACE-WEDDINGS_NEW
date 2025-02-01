"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavItems } from "@/components/shared/NavItems";

export default function Header({ isMenuOpen, toggleMenu }) {
  return (
    <header className="fixed z-50 w-full bg-black bg-opacity-90 backdrop-blur-lg">
      <div className="container flex items-center justify-between px-4 py-6 mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-auto h-12 mr-4" />
          <h1 className="text-2xl font-bold tracking-wider text-white md:text-3xl">
            SILVER LACE WEDDINGS
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Desktop navigation">
          <NavItems onItemClick={() => {}} />
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          type="button"
          onClick={toggleMenu} 
          className="text-white md:hidden focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" /> 
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav 
          className="bg-black md:hidden bg-opacity-95 backdrop-blur-lg" 
          aria-label="Mobile navigation"
        >
          <NavItems isMobile onItemClick={toggleMenu} />
        </nav>
      )}
    </header>
  );
}
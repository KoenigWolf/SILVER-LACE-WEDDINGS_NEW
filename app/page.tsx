"use client";
import React, { useState } from "react";
import type { FormEvent } from "react";
import HeroSection from "./components/hero-section";
import PortfolioSection from "./components/portfolio-section";
import ServicesSection from "./components/services-section";
import TestimonialsSection from "./components/testimonials-section";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import { testimonials } from "@/data/testimonials";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: Implement form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden text-white bg-black font-playfair">
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection testimonials={testimonials} />
        <AboutSection />
        <ContactSection handleSubmit={handleSubmit} isLoading={isLoading} />
      </main>
    </div>
  );
}

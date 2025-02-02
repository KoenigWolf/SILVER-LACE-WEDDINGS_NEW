"use client";
import React, { useState } from "react";
import type { FormEvent } from "react";

import HeroSection from "@/sections/Hero";
import PortfolioSection from "@/sections/Portfolio";
import ServicesSection from "@/sections/Services";
import TestimonialsSection from "@/sections/Testimonials";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";

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

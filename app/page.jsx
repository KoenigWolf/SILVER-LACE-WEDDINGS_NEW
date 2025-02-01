"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import { testimonials } from "@/data/testimonials";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubmit = async (e) => {
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
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection testimonials={testimonials} />
        <AboutSection />
        <ContactSection handleSubmit={handleSubmit} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
}

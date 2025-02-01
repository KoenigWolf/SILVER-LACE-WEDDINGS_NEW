"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolio";
import { PORTFOLIO_CATEGORIES } from "@/constants/categories";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = useCallback(() => {
    if (selectedCategory === "all") return portfolioItems;
    return portfolioItems.filter(
      item => item.category.toLowerCase() === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PORTFOLIO_CATEGORIES.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              aria-pressed={selectedCategory === category.id}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredItems().map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-white rounded-lg bg-opacity-5 backdrop-blur-lg"
              >
                <div className="relative overflow-hidden group aspect-w-16 aspect-h-12">
                  <img
                    src={item.imageUrl}
                    alt={item.description}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100">
                    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                      <h3 className="mb-2 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300">{item.description}</p>
                      <span className="inline-block px-3 py-1 mt-3 text-sm text-white border border-white rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
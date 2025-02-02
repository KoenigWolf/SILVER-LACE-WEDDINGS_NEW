"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { sections } from "@/data/sections";
import type { PortfolioItem } from "@/data/portfolio";

export default function PortfolioSection() {
  const { id, title, categories, items } = sections.portfolio;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems = useCallback((): PortfolioItem[] => {
    if (!items) return [];
    const portfolioItems = items as PortfolioItem[];
    if (selectedCategory === "all") return portfolioItems;
    return portfolioItems.filter(item => item.category.toLowerCase() === selectedCategory);
  }, [selectedCategory, items]);

  return (
    <section id={id} className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {/* カテゴリーフィルター */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(categories ?? []).map((category) => (
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

        {/* ポートフォリオグリッド */}
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
                className="overflow-hidden rounded-lg bg-white bg-opacity-5 backdrop-blur-lg min-h-[350px] flex flex-col"
              >
                {/* 画像 */}
                <div className="relative w-full h-64 overflow-hidden group">
                  <img
                    src={item.imageUrl}
                    alt={item.description}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 group-hover:opacity-80" />
                </div>

                {/* テキスト情報 */}
                <div className="flex flex-col items-center justify-center flex-1 p-4 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                  <span className="inline-block px-3 py-1 mt-3 text-sm text-white border border-white rounded-full">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

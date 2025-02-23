"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

const fadeInUpVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const scrollIndicatorVariants: Variants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop"
    }
  }
};

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/images/lace8.webp"
          alt="Wedding background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative flex items-center justify-center h-full">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              SILVER LACE
              <br />
              WEDDINGS
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-200 md:text-xl">
              Capturing your love story with timeless wedding photography
            </p>
            <Button size="lg" asChild className="text-lg">
              <a href="#contact">Book Your Session</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <Button variant="ghost" size="sm" asChild className="text-white">
          <a href="#portfolio" aria-label="Scroll to portfolio section">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Scroll down arrow</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </Button>
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Capturing Your
              <br />
              Perfect Moments
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-200 md:text-xl">
              Professional wedding photography services that tell your unique love story
            </p>
            <Button
              size="lg"
              asChild
              className="text-lg"
            >
              <a href="#contact">Book Your Session</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="text-white"
        >
          <a href="#portfolio" aria-label="Scroll to portfolio section">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
            >
              <title>Scroll down arrow</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
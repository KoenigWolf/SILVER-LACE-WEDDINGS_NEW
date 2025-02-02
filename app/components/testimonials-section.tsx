"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const fadeInUpVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInUpTransition = {
  duration: 0.6
};

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          transition={fadeInUpTransition}
        >
          Love Stories
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex flex-col items-center p-6 text-center bg-white rounded-lg bg-opacity-10 backdrop-blur-lg"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{
                ...fadeInUpTransition,
                delay: index * 0.2
              }}
            >
              <div className="w-20 h-20 mb-4 overflow-hidden rounded-full">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mb-4 text-gray-300">{testimonial.text}</p>
              <p className="font-semibold text-white">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

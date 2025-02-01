"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Love Stories
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="p-6 text-center bg-white rounded-lg bg-opacity-10 backdrop-blur-lg"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                ...fadeInUp,
                transition: { delay: index * 0.2 }
              }}
            >
              <p className="mb-4 text-gray-300">{testimonial.text}</p>
              <p className="font-semibold text-white">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
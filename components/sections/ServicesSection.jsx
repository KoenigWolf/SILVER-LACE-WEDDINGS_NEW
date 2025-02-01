"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="overflow-hidden bg-white rounded-lg bg-opacity-5 backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-48">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} service`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-300">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  asChild
                >
                  <a href="#contact" aria-label={`Learn more about ${service.title}`}>
                    Learn More
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
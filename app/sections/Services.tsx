"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { services, type Service } from "@/data/services";
import { theme } from "@/data/theme"; // カラーテーマを適用

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.h2
          className={`mb-12 text-4xl font-bold text-center ${theme.colors.textPrimary}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service: Service, index: number) => (
            <motion.div
              key={service.id}
              className="overflow-hidden rounded-lg bg-opacity-5 backdrop-blur-lg min-h-[400px] flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative w-full h-48">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} service`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className={`mb-3 text-xl font-semibold ${theme.colors.textPrimary}`}>
                  {service.title}
                </h3>
                <p className={`mb-4 ${theme.colors.textSecondary}`}>
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    asChild
                    className={theme.colors.buttonOutline}
                  >
                    <a href="#contact" aria-label={`Learn more about ${service.title}`}>
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

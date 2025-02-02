"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { COMPANY_INFO, type CompanyValue } from "@/constants/company";

interface StatItem {
  id: "years" | "weddings" | "satisfaction";
  value: number;
  label: string;
}

const fadeInUpVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInUpTransition = {
  duration: 0.6
};

const scaleInVariants: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
};

const statsItems: StatItem[] = [
  {
    id: "years",
    value: COMPANY_INFO.experience.years,
    label: "Years of Experience",
  },
  {
    id: "weddings",
    value: COMPANY_INFO.experience.weddings,
    label: "Weddings Captured",
  },
  {
    id: "satisfaction",
    value: COMPANY_INFO.experience.satisfaction,
    label: "% Client Satisfaction",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 mb-16 md:grid-cols-2">
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={fadeInUpTransition}
          >
            <img
              src="/images/lace2.webp"
              alt="About Silver Lace Weddings"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            className="max-w-3xl mx-auto mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={fadeInUpTransition}
          >
            <h2 className="mb-6 text-4xl font-bold text-white">About Us</h2>
            <p className="mb-8 text-lg text-gray-300">{COMPANY_INFO.description}</p>
            <p className="text-xl italic text-white">{COMPANY_INFO.mission}</p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          {COMPANY_INFO.values.map((value: CompanyValue, index: number) => (
            <motion.div
              key={value.id}
              className="p-6 text-center bg-white rounded-lg bg-opacity-5 backdrop-blur-lg"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{
                ...fadeInUpTransition,
                delay: index * 0.2
              }}
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {value.title}
              </h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid gap-8 md:grid-cols-3">
          {statsItems.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{
                ...fadeInUpTransition,
                delay: index * 0.2
              }}
            >
              <motion.span
                className="block mb-2 text-4xl font-bold text-white"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scaleInVariants}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2 + 0.3
                }}
              >
                {stat.value}
                {stat.id === "satisfaction" && "%"}
              </motion.span>
              <span className="text-gray-300">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

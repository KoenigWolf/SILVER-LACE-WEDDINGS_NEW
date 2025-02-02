// components/SectionWrapper.tsx
import { motion } from "framer-motion";
import { theme } from "@/data/theme";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className={theme.layout.section}>
      <div className={theme.layout.container}>
        <motion.h2 className={`mb-12 text-4xl font-bold text-center ${theme.colors.textPrimary}`}>
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}

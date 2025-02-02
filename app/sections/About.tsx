"use client";

import Image from "next/image";
import { sections } from "@/data/sections";
import { theme } from "@/data/theme";
import SectionWrapper from "@/app/components/SectionWrapper";
import type { StatItem, CompanyValue } from "@/data/sections";

export default function AboutSection() {
  const { id, title, description, mission, image, values, stats } = sections.about;

  return (
    <SectionWrapper id={id} title={title}>
      <div className="grid items-center gap-12 mb-16 md:grid-cols-2">
        {image && (
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="max-w-3xl mx-auto text-center">
          <p className={`mb-8 text-lg ${theme.colors.textSecondary}`}>{description}</p>
          {mission && <p className={`text-xl italic ${theme.colors.textPrimary}`}>{mission}</p>}
        </div>
      </div>

      {/* Values */}
      <div className="grid gap-8 mb-16 md:grid-cols-3">
        {(values ?? []).map((value: CompanyValue) => (
          <div key={value.id} className={`${theme.layout.card} ${theme.colors.secondary}`}>
            <h3 className={`mb-4 text-xl font-semibold ${theme.colors.textPrimary}`}>{value.title}</h3>
            <p className={theme.colors.textSecondary}>{value.description}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid gap-8 md:grid-cols-3">
        {(stats ?? []).map((stat: StatItem) => (
          <div key={stat.id} className="text-center">
            <span className={`block mb-2 text-4xl font-bold ${theme.colors.textPrimary}`}>
              {stat.value}{stat.id === "satisfaction" && "%"}
            </span>
            <span className={theme.colors.textSecondary}>{stat.label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

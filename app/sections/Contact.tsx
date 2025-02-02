"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { sections } from "@/data/sections";
import { theme } from "@/data/theme";
import SectionWrapper from "@/app/components/SectionWrapper";

interface ContactSectionProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
}

export default function ContactSection({ handleSubmit, isLoading }: ContactSectionProps) {
  const { id, title, description, fields, successMessage, errorMessage } = sections.contact;
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<{ type: "" | "success" | "error"; message: string }>({ type: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      setFormStatus({ type: "success", message: successMessage ?? "送信が成功しました。" });
      setFormData({});
    } catch {
      setFormStatus({ type: "error", message: errorMessage ?? "送信に失敗しました。" });
    }
  };

  return (
    <SectionWrapper id={id} title={title}>
      <motion.p
        className={`mb-12 text-lg text-center ${theme.colors.textSecondary}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {description}
      </motion.p>

      <motion.div
        className={`${theme.layout.card} max-w-2xl mx-auto`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={onSubmit} className="space-y-6">
          {(fields ?? []).map(({ id, label, placeholder, type, required }) => (
            <div key={id} className="space-y-2">
              <label htmlFor={id} className={`block text-sm font-medium ${theme.colors.textSecondary}`}>
                {label} {required && <span className="ml-1 text-red-500">*</span>}
              </label>
              {type === "textarea" ? (
                <Textarea
                  id={id}
                  placeholder={placeholder}
                  required={required}
                  value={formData[id] ?? ""}
                  onChange={handleChange}
                  className="min-h-[120px] bg-white bg-opacity-10 border-gray-700 text-white placeholder-gray-400"
                  aria-required={required}
                />
              ) : (
                <Input
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  required={required}
                  value={formData[id] ?? ""}
                  onChange={handleChange}
                  className="text-white placeholder-gray-400 bg-white border-gray-700 bg-opacity-10"
                  aria-required={required}
                />
              )}
            </div>
          ))}

          <div className="text-center">
            <Button type="submit" size="lg" disabled={isLoading} className="min-w-[200px]">
              {isLoading ? "送信中..." : "送信する"}
            </Button>
          </div>

          {formStatus.message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 text-center rounded ${
                formStatus.type === "success"
                  ? "bg-green-500 bg-opacity-10 text-green-300"
                  : "bg-red-500 bg-opacity-10 text-red-300"
              }`}
              role="alert"
            >
              {formStatus.message}
            </motion.div>
          )}
        </form>
      </motion.div>
    </SectionWrapper>
  );
}

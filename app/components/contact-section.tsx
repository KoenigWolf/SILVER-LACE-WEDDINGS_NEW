"use client";
import { motion } from "framer-motion";
import { useState, FormEvent, ChangeEvent } from "react";
import type { Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_FORM_FIELDS, CONTACT_SUCCESS_MESSAGE, CONTACT_ERROR_MESSAGE } from "@/constants/forms";
import type { FormField } from "@/constants/forms";

interface ContactSectionProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
}

interface FormStatus {
  type: "" | "success" | "error";
  message: string;
}

type FormData = {
  [key: string]: string;
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function ContactSection({ handleSubmit, isLoading }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>({});
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      setFormStatus({ type: "success", message: CONTACT_SUCCESS_MESSAGE });
      setFormData({});
    } catch (error) {
      setFormStatus({ type: "error", message: CONTACT_ERROR_MESSAGE });
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-white">Contact Us</h2>
          <p className="mb-12 text-lg text-gray-300">
            あなたの特別な日のお手伝いをさせていただきます。お気軽にお問い合わせください。
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl p-8 mx-auto bg-white rounded-lg bg-opacity-5 backdrop-blur-lg"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={onSubmit} className="space-y-6">
            {CONTACT_FORM_FIELDS.map((field) => (
              <div key={field.id} className="space-y-2">
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-200"
                >
                  {field.label}
                  {field.required && (
                    <span className="ml-1 text-red-500" aria-hidden="true">*</span>
                  )}
                </label>
                {field.type === "textarea" ? (
                  <Textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id] || ""}
                    onChange={handleChange}
                    className="min-h-[120px] bg-white bg-opacity-10 border-gray-700 text-white placeholder-gray-400"
                    aria-required={field.required}
                  />
                ) : (
                  <Input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id] || ""}
                    onChange={handleChange}
                    className="text-white placeholder-gray-400 bg-white border-gray-700 bg-opacity-10"
                    aria-required={field.required}
                  />
                )}
              </div>
            ))}

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="min-w-[200px]"
              >
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
      </div>
    </section>
  );
}

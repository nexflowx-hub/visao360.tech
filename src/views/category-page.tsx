"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, CATEGORY_SERVICES } from "@/lib/constants";
import { AIConsultantWizard } from "@/features/ai-consultant/wizard";
import { useState } from "react";

interface CategoryPageProps {
  categoryId: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  items: string[];
  onBack: () => void;
  onOpenWizard: (category: string) => void;
}

export function CategoryPage({ categoryId, title, headline, description, image, items, onBack, onOpenWizard }: CategoryPageProps) {
  const [wizardOpen, setWizardOpen] = useState(false);
  const services = CATEGORY_SERVICES[categoryId] || [];

  return (
    <>
      {/* Hero */}
      <div className="pt-16 md:pt-20">
        <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[440px] bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 md:pb-10">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-3 md:mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-2xl drop-shadow-sm"
              >
                {headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-2 text-sm sm:text-base text-white/85 max-w-lg drop-shadow-sm"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10">O que oferecemos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-5 sm:p-6 rounded-2xl border border-border bg-white shadow-sm"
              >
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-lg mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">Precisa de um orçamento?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">Solicite seu orçamento gratuito. Respondemos rápido pelo WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {categoryId !== "store" && (
                <Button
                  onClick={() => { onOpenWizard(categoryId); setWizardOpen(true); }}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-7 text-sm font-semibold h-12"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar orçamento
                </Button>
              )}
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto rounded-lg px-7 text-sm font-medium h-12"
              >
                <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wizard */}
      <AIConsultantWizard
        open={wizardOpen}
        onOpenChange={setWizardOpen}
        category={categoryId}
      />
    </>
  );
}
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/visao/section-heading";
import { HOW_WE_WORK } from "@/lib/constants";

export function HowWeWork() {
  return (
    <section id="processo" className="py-16 md:py-24 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Como trabalhamos"
          subtitle="Um processo simples e profissional do primeiro contato ao suporte."
        />
        <div className="mt-12 md:mt-14 max-w-2xl mx-auto space-y-0">
          {HOW_WE_WORK.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 sm:gap-5 py-5 sm:py-6 border-b border-border last:border-b-0"
            >
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
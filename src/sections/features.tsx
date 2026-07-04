"use client";

import { motion } from "framer-motion";
import { Puzzle, Wrench, ShieldCheck, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Puzzle,
    title: "Soluções Integradas",
    description: "Hardware, software e serviços em perfeita integração.",
  },
  {
    icon: Wrench,
    title: "Instalação Profissional",
    description: "Equipes certificadas e instaladores parceiros em Anápolis e região.",
  },
  {
    icon: ShieldCheck,
    title: "Monitorização 24/7",
    description: "Central de operações com resposta imediata.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Detecção inteligente, alertas e relatórios avançados.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 md:p-6 rounded-2xl border border-border bg-white hover:shadow-md hover:border-primary/20 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 md:w-[22px] md:h-[22px] text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/visao/section-heading";
import { OTHER_SOLUTIONS } from "@/lib/constants";
import { Building2, Factory, Home, Wifi, Network, Brain, ChevronRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  business: Building2,
  industrial: Factory,
  automation: Home,
  networks: Wifi,
  infrastructure: Network,
  smart: Brain,
};

export function OtherSolutions() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Também desenvolvemos projetos para"
          subtitle="Soluções avançadas para necessidades específicas."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OTHER_SOLUTIONS.map((sol, i) => {
            const Icon = iconMap[sol.id] || Building2;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{sol.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">{sol.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-lg text-sm font-medium"
          >
            <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer">
              Fale sobre seu projeto
              <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
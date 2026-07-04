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
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Também desenvolvemos projetos para"
          subtitle="Soluções avançadas para necessidades específicas."
        />
        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {OTHER_SOLUTIONS.map((sol, i) => {
            const Icon = iconMap[sol.id] || Building2;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground">{sol.title}</h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{sol.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8 md:mt-10 text-center">
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
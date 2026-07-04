"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/visao/section-heading";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projetos" className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projetos realizados"
          subtitle="Conheça algumas das soluções que entregamos."
        />
        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs font-medium">
                  {project.category}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
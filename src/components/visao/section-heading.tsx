"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, highlight, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("max-w-2xl mx-auto text-center px-2", className)}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
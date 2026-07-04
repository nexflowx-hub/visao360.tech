"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

interface HeroProps {
  onOpenConsultant: (category?: string) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero({ onOpenConsultant }: HeroProps) {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] py-10 md:py-16 lg:py-0">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.div variants={item} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
                Tecnologia que protege
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-foreground">Proteção completa</span>
              <br />
              <span className="text-primary">para o que importa.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Segurança eletrônica, automação, monitorização 24/7 e inteligência artificial em uma única plataforma.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Button
                onClick={() => onOpenConsultant()}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 sm:px-8 text-sm font-semibold shadow-md shadow-primary/25 h-11 sm:h-12"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-muted rounded-lg px-6 sm:px-8 text-sm font-medium h-11 sm:h-12"
              >
                <a href="#solucoes">
                  Conhecer Soluções
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero.png"
                alt="Sistema de segurança Visao360 — câmeras, monitoramento e soluções inteligentes"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary/5 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-primary/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Trust Signals Bar */}
      <div className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="hidden sm:inline">Instalação profissional</span>
              <span className="sm:hidden">Profissional</span>
            </span>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              {COMPANY.location}
            </span>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-1.5">
              <Package className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">Entregas para todo o Brasil</span>
              <span className="sm:hidden">Entrega nacional</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
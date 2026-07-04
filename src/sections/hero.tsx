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
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Hero({ onOpenConsultant }: HeroProps) {
  return (
    <section className="pt-20 md:pt-24">
      {/* Hero Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px] bg-gray-100">
        <Image
          src="/images/hero.png"
          alt="Sistema de segurança Visao360"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="w-full">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 md:pb-14"
            >
              <motion.div variants={item} className="mb-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold tracking-widest uppercase">
                  Tecnologia que protege
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-extrabold text-white leading-[1.1] max-w-3xl drop-shadow-sm tracking-tight"
              >
                Proteção completa para o que importa.
              </motion.h1>
              <motion.p
                variants={item}
                className="mt-3 text-sm sm:text-base md:text-lg text-white/85 max-w-xl drop-shadow-sm leading-relaxed"
              >
                Segurança eletrônica, automação, monitorização 24/7 e inteligência artificial em uma única plataforma.
              </motion.p>
              <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
                <Button
                  onClick={() => onOpenConsultant()}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-7 text-sm font-semibold shadow-lg h-11"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/90 hover:bg-white text-foreground rounded-lg px-7 text-sm font-medium h-11 border-0"
                >
                  <a href="#solucoes">
                    Conhecer Soluções
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Signals Bar */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-warning text-warning" />
              Instalação profissional
            </span>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              {COMPANY.location}
            </span>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-1.5">
              <Package className="w-4 h-4 text-primary" />
              Entregas para todo o Brasil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
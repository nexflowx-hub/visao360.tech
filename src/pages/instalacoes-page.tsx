"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, HOW_WE_WORK } from "@/lib/constants";

interface InstalacoesPageProps {
  onBack: () => void;
}

export function InstalacoesPage({ onBack }: InstalacoesPageProps) {
  return (
    <div className="pt-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Instalações</h1>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Nossa equipe técnica realiza instalações com padrão profissional. Câmeras, cercas elétricas, alarmes, rastreadores e muito mais.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-white shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Como funciona</h2>
              <div className="space-y-0">
                {HOW_WE_WORK.map((step) => (
                  <div key={step.step} className="flex gap-4 py-4 border-b border-border last:border-b-0">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-white shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">O que instalamos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Câmeras de segurança",
                  "Cercas elétricas",
                  "Alarmes residenciais e comerciais",
                  "Rastreadores veiculares",
                  "Controle de acesso",
                  "Interfones com câmera",
                  "Câmeras solares (rural)",
                  "Redes estruturadas",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 text-sm font-semibold h-11"
            >
              <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer">
                Agendar instalação
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
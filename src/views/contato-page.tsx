"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

interface ContatoPageProps {
  onBack: () => void;
}

export function ContatoPage({ onBack }: ContatoPageProps) {
  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm mb-6 md:mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Contato</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 md:mb-10 leading-relaxed">
            Entre em contato pelo WhatsApp para um atendimento rápido, ou visite nossa loja em Anápolis.
          </p>

          <div className="space-y-3 md:space-y-4">
            <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <p className="text-sm text-muted-foreground">{COMPANY.whatsapp}</p>
              </div>
            </a>

            <a href={`tel:+${COMPANY.whatsappNumber}`} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">Telefone</p>
                <p className="text-sm text-muted-foreground">{COMPANY.whatsapp}</p>
              </div>
            </a>

            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">E-mail</p>
                <p className="text-sm text-muted-foreground">{COMPANY.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">Localização</p>
                <p className="text-sm text-muted-foreground">{COMPANY.location} — GO</p>
              </div>
            </div>

            <a href="https://instagram.com/visao360tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5 text-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">Instagram</p>
                <p className="text-sm text-muted-foreground">{COMPANY.instagram}</p>
              </div>
            </a>
          </div>

          <div className="mt-8 md:mt-10">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 text-sm font-semibold h-12"
            >
              <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-4 h-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
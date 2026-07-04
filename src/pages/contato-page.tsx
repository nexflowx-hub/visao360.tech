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
          className="max-w-xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contato</h1>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Entre em contato pelo WhatsApp para um atendimento rápido, ou visite nossa loja em Anápolis.
          </p>

          <div className="space-y-5">
            <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <p className="text-sm text-muted-foreground">{COMPANY.whatsapp}</p>
              </div>
            </a>

            <a href={`tel:+${COMPANY.whatsappNumber}`} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center">
                <Phone className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Telefone</p>
                <p className="text-sm text-muted-foreground">{COMPANY.whatsapp}</p>
              </div>
            </a>

            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">E-mail</p>
                <p className="text-sm text-muted-foreground">{COMPANY.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Localização</p>
                <p className="text-sm text-muted-foreground">{COMPANY.location} — GO</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center">
                <Instagram className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Instagram</p>
                <p className="text-sm text-muted-foreground">{COMPANY.instagram}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 text-sm font-semibold h-11"
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
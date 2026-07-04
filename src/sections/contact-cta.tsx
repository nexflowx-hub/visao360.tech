"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section id="contato" className="py-16 md:py-24 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Precisa de um orçamento?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Entre em contato pelo WhatsApp ou visite nossa loja em Anápolis. Respondemos rápido.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-lg px-8 text-sm font-medium h-12"
            >
              <a href={`tel:+${COMPANY.whatsappNumber}`}>
                <Phone className="mr-2 w-4 h-4" />
                {COMPANY.whatsapp}
              </a>
            </Button>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              {COMPANY.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {COMPANY.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
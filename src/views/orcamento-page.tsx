"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { COMPANY, MAIN_CATEGORIES } from "@/lib/constants";

interface OrcamentoPageProps {
  onBack: () => void;
}

export function OrcamentoPage({ onBack }: OrcamentoPageProps) {
  const [data, setData] = useState({ name: "", whatsapp: "", city: "", category: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    const catLabel = MAIN_CATEGORIES.find(c => c.id === data.category)?.title || "Geral";
    const msg = encodeURIComponent(
      `Olá! Sou ${data.name}, de ${data.city}.\n\nTenho interesse em: ${catLabel}\n${data.message ? data.message + "\n" : ""}Meu WhatsApp: ${data.whatsapp}`
    );
    window.open(`${COMPANY.whatsappLink}?text=${msg}`, "_blank");
    setSent(true);
  };

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
          className="max-w-lg"
        >
          {sent ? (
            <div className="text-center py-12 md:py-16">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Mensagem enviada!</h1>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">Você foi redirecionado para o WhatsApp. Se não abriu automaticamente, clique no botão abaixo.</p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-12 px-8">
                <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Abrir WhatsApp
                </a>
              </Button>
            </div>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Solicitar orçamento</h1>
              <p className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed">Preencha seus dados e entraremos em contato pelo WhatsApp.</p>

              <div className="space-y-4 md:space-y-5">
                <div className="space-y-1.5">
                  <Label htmlFor="o-name" className="text-sm">Nome completo</Label>
                  <Input id="o-name" placeholder="Seu nome" value={data.name} onChange={(e) => setData(p => ({ ...p, name: e.target.value }))} className="h-11 sm:h-12" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="o-whatsapp" className="text-sm">WhatsApp</Label>
                  <Input id="o-whatsapp" placeholder="(62) 99999-9999" value={data.whatsapp} onChange={(e) => setData(p => ({ ...p, whatsapp: e.target.value }))} className="h-11 sm:h-12" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="o-city" className="text-sm">Cidade</Label>
                  <Input id="o-city" placeholder="Sua cidade" value={data.city} onChange={(e) => setData(p => ({ ...p, city: e.target.value }))} className="h-11 sm:h-12" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="o-cat" className="text-sm">Área de interesse</Label>
                  <select
                    id="o-cat"
                    value={data.category}
                    onChange={(e) => setData(p => ({ ...p, category: e.target.value }))}
                    className="flex h-11 sm:h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Selecione...</option>
                    {MAIN_CATEGORIES.filter(c => c.id !== "store").map(c => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                    <option value="other">Outro</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="o-msg" className="text-sm">Descreva o que precisa (opcional)</Label>
                  <textarea
                    id="o-msg"
                    rows={4}
                    placeholder="Ex: Quero instalar 4 câmeras na fachada e 2 no fundo..."
                    value={data.message}
                    onChange={(e) => setData(p => ({ ...p, message: e.target.value }))}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  />
                </div>
                <Button
                  onClick={handleSubmit}
                  disabled={!data.name || !data.whatsapp || !data.city}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-12 font-semibold text-sm"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft, Home, Truck, Trees, ShoppingBag, Send,
} from "lucide-react";
import { FUNNEL_STEPS, MAIN_CATEGORIES, COMPANY } from "@/lib/constants";

const categoryIcons: Record<string, React.ElementType> = {
  residential: Home,
  vehicle: Truck,
  rural: Trees,
  store: ShoppingBag,
};

const categoryLabels: Record<string, string> = {
  residential: "Segurança Residencial",
  vehicle: "Rastreamento Veicular",
  rural: "Soluções Rurais",
  store: "Loja Online",
};

interface WizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category?: string;
}

const slideVariants = {
  enter: { x: 24, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -24, opacity: 0 },
};

export function AIConsultantWizard({ open, onOpenChange, category: initialCategory }: WizardProps) {
  const [category, setCategory] = useState<string | undefined>(initialCategory);
  const [stepIndex, setStepIndex] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", whatsapp: "", city: "" });

  // When category changes (e.g. different card clicked), reset internal state
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- reset all internal state when external prop changes */
    setCategory(initialCategory);
    setStepIndex(0);
    setSelections([]);
    setShowLeadForm(false);
    setLeadData({ name: "", whatsapp: "", city: "" });
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [initialCategory]);

  const steps = category ? (FUNNEL_STEPS[category] || []) : [];
  const currentStep = steps[stepIndex];
  const totalFunnelSteps = steps.length;
  const isLastStep = stepIndex === totalFunnelSteps - 1;

  const handleSelectOption = (optionId: string) => {
    const newSelections = [...selections, optionId];
    setSelections(newSelections);

    if (isLastStep) {
      setShowLeadForm(true);
    } else {
      setStepIndex(stepIndex + 1);
    }
  };

  const handleCategorySelect = (catId: string) => {
    setCategory(catId);
    setStepIndex(0);
    setSelections([]);

    // Store has no funnel
    if (catId === "store") {
      const msg = encodeURIComponent("Olá! Vi a Visao360 no site e gostaria de saber sobre a loja online.");
      window.open(`${COMPANY.whatsappLink}?text=${msg}`, "_blank");
      onOpenChange(false);
    }
  };

  const handleSubmit = () => {
    const selectionLabels = selections.map(id => {
      for (const catSteps of Object.values(FUNNEL_STEPS)) {
        for (const step of catSteps) {
          const opt = step.options.find(o => o.id === id);
          if (opt) return opt.label;
        }
      }
      return id;
    });

    const catLabel = categoryLabels[category || ""] || "Geral";
    const details = selectionLabels.join(", ");
    const msg = encodeURIComponent(
      `Olá! Sou ${leadData.name}, de ${leadData.city}.\n\nVim pelo site da Visao360 e tenho interesse em: ${catLabel}\n${details}\n\nMeu WhatsApp: ${leadData.whatsapp}`
    );
    window.open(`${COMPANY.whatsappLink}?text=${msg}`, "_blank");
    onOpenChange(false);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleBack = () => {
    if (showLeadForm) {
      setShowLeadForm(false);
      return;
    }
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
      setSelections(prev => prev.slice(0, -1));
    } else if (category) {
      // Go back to category selection
      setCategory(undefined);
      setStepIndex(0);
      setSelections([]);
    }
  };

  // RENDER: Category selection (when no category selected)
  const renderCategorySelection = () => (
    <div className="py-2">
      <h3 className="text-lg font-semibold text-foreground mb-1">Como podemos ajudar?</h3>
      <p className="text-sm text-muted-foreground mb-6">Escolha a área que melhor descreve o que você precisa.</p>
      <div className="grid grid-cols-2 gap-3">
        {MAIN_CATEGORIES.map((cat) => {
          const Icon = categoryIcons[cat.id] || Home;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className="flex flex-col items-start gap-2 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-muted/50 transition-colors text-left"
            >
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{cat.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  // RENDER: Funnel step
  const renderFunnelStep = () => (
    <div className="py-2">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-1">
        {category && (
          <span className="text-xs font-medium text-primary">{categoryLabels[category]}</span>
        )}
        <span className="text-xs text-muted-foreground">
          Passo {stepIndex + 1} de {totalFunnelSteps + 1}
        </span>
      </div>

      {currentStep && (
        <>
          <h3 className="text-lg font-semibold text-foreground mb-5">{currentStep.question}</h3>
          <div className="space-y-2">
            {currentStep.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className="w-full flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-muted/50 transition-colors text-left"
              >
                <span className="w-2 h-2 rounded-full border-2 border-muted-foreground/30 shrink-0" />
                <span className="text-sm font-medium text-foreground">{option.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );

  // RENDER: Lead form
  const renderLeadForm = () => (
    <div className="py-2">
      <div className="flex items-center justify-between mb-1">
        {category && (
          <span className="text-xs font-medium text-primary">{categoryLabels[category]}</span>
        )}
        <span className="text-xs text-muted-foreground">Finalizar</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">Solicitar orçamento</h3>
      <p className="text-sm text-muted-foreground mb-6">Preencha seus dados e entraremos em contato.</p>
      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="lead-name" className="text-sm">Nome</Label>
          <Input
            id="lead-name"
            placeholder="Seu nome completo"
            value={leadData.name}
            onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
            className="h-10"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lead-whatsapp" className="text-sm">WhatsApp</Label>
          <Input
            id="lead-whatsapp"
            placeholder="(62) 99999-9999"
            value={leadData.whatsapp}
            onChange={(e) => setLeadData(prev => ({ ...prev, whatsapp: e.target.value }))}
            className="h-10"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lead-city" className="text-sm">Cidade</Label>
          <Input
            id="lead-city"
            placeholder="Sua cidade"
            value={leadData.city}
            onChange={(e) => setLeadData(prev => ({ ...prev, city: e.target.value }))}
            className="h-10"
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-10 font-semibold text-sm mt-2"
          disabled={!leadData.name || !leadData.whatsapp || !leadData.city}
        >
          <Send className="w-4 h-4 mr-2" />
          Enviar
        </Button>
      </div>
    </div>
  );

  // Determine what to show
  const currentView = !category
    ? "category"
    : showLeadForm
      ? "lead"
      : "funnel";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto p-6 gap-0 scrollbar-thin">
        <DialogTitle className="sr-only">Visao360 - Solicitar orçamento</DialogTitle>
        <DialogDescription className="sr-only">Encontre a solução ideal para sua necessidade</DialogDescription>

        <AnimatePresence mode="wait">
          {currentView === "category" ? (
            <motion.div
              key="category"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              {renderCategorySelection()}
            </motion.div>
          ) : currentView === "funnel" ? (
            <motion.div
              key={`funnel-${stepIndex}`}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              {renderFunnelStep()}
            </motion.div>
          ) : (
            <motion.div
              key="lead"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              {renderLeadForm()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back button (hide on category selection) */}
        {category && (
          <div className="pt-4 mt-4 border-t border-border">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="text-muted-foreground text-sm h-9"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
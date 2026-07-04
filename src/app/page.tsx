"use client";

import { useState } from "react";
import { Topbar } from "@/components/visao/topbar";
import { Footer } from "@/components/visao/footer";
import { Hero } from "@/sections/hero";
import { HowCanWeHelp } from "@/sections/how-can-we-help";
import { HowWeWork } from "@/sections/how-we-work";
import { Statistics } from "@/sections/statistics";
import { Projects } from "@/sections/projects";
import { Testimonials } from "@/sections/testimonials";
import { FAQ } from "@/sections/faq";
import { OtherSolutions } from "@/sections/other-solutions";
import { ContactCTA } from "@/sections/contact-cta";
import { AIConsultantWizard } from "@/features/ai-consultant/wizard";
import { CategoryPage } from "@/pages/category-page";
import { ContatoPage } from "@/pages/contato-page";
import { InstalacoesPage } from "@/pages/instalacoes-page";
import { OrcamentoPage } from "@/pages/orcamento-page";
import { useHashRouter, type PageSlug } from "@/lib/router";
import { MAIN_CATEGORIES } from "@/lib/constants";

function HomePage({ onOpenConsultant }: { onOpenConsultant: (cat?: string) => void }) {
  return (
    <>
      <Hero onOpenConsultant={onOpenConsultant} />
      <HowCanWeHelp />
      <HowWeWork />
      <Statistics />
      <Projects />
      <Testimonials />
      <FAQ />
      <OtherSolutions />
      <ContactCTA />
    </>
  );
}

export default function App() {
  const { page, navigate, isHome } = useHashRouter();
  const [consultantOpen, setConsultantOpen] = useState(false);
  const [consultantCategory, setConsultantCategory] = useState<string | undefined>(undefined);

  const openConsultant = (category?: string) => {
    setConsultantCategory(category);
    setConsultantOpen(true);
  };

  const goHome = () => navigate(undefined);

  // Sub-pages
  if (!isHome) {
    const category = MAIN_CATEGORIES.find(c => c.slug === page);

    if (category) {
      return (
        <div className="min-h-screen flex flex-col">
          <Topbar />
          <main className="flex-1">
            <CategoryPage
              categoryId={category.id}
              title={category.title}
              headline={category.headline}
              description={category.description}
              image={category.image}
              items={category.items}
              onBack={goHome}
              onOpenWizard={openConsultant}
            />
          </main>
          <Footer />
          <AIConsultantWizard open={consultantOpen} onOpenChange={setConsultantOpen} category={consultantCategory} />
        </div>
      );
    }

    if (page === "contato") {
      return (
        <div className="min-h-screen flex flex-col">
          <Topbar />
          <main className="flex-1">
            <ContatoPage onBack={goHome} />
          </main>
          <Footer />
        </div>
      );
    }

    if (page === "instalacoes") {
      return (
        <div className="min-h-screen flex flex-col">
          <Topbar />
          <main className="flex-1">
            <InstalacoesPage onBack={goHome} />
          </main>
          <Footer />
        </div>
      );
    }

    if (page === "orcamento") {
      return (
        <div className="min-h-screen flex flex-col">
          <Topbar />
          <main className="flex-1">
            <OrcamentoPage onBack={goHome} />
          </main>
          <Footer />
        </div>
      );
    }

    // Unknown page, go home
    return (
      <div className="min-h-screen flex flex-col">
        <Topbar />
        <main className="flex-1">
          <HomePage onOpenConsultant={openConsultant} />
        </main>
        <Footer />
        <AIConsultantWizard open={consultantOpen} onOpenChange={setConsultantOpen} category={consultantCategory} />
      </div>
    );
  }

  // Homepage
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <main className="flex-1">
        <HomePage onOpenConsultant={openConsultant} />
      </main>
      <Footer />
      <AIConsultantWizard open={consultantOpen} onOpenChange={setConsultantOpen} category={consultantCategory} />
    </div>
  );
}
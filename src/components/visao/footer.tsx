"use client";

import { MessageCircle, Mail, MapPin, Phone, Instagram } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="sm:col-span-2">
            <a href="#/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Visao360" width={32} height={32} className="rounded-md" />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-foreground">Visao</span>
                <span className="text-primary">360</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-1">
              {COMPANY.description}
            </p>
            <p className="text-xs text-muted-foreground">
              {COMPANY.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  {COMPANY.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  {COMPANY.location}
                </span>
              </li>
              <li>
                <a href="https://instagram.com/visao360tech" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-primary shrink-0" />
                  {COMPANY.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-10 pt-5 md:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Visao360. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            {COMPANY.website}
          </p>
        </div>
      </div>
    </footer>
  );
}
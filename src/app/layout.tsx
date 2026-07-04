import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D6EFD",
};

export const metadata: Metadata = {
  title: {
    default: "Visao360 — Segurança Eletrônica, Rastreamento Veicular e Soluções Rurais",
    template: "%s | Visao360",
  },
  description:
    "Soluções completas em segurança eletrônica, automação, monitorização 24/7 e inteligência artificial. Instalação profissional em Anápolis, Abadiânia e região. Entregas para todo o Brasil.",
  keywords: [
    "segurança eletrônica",
    "câmeras de segurança",
    "cerca elétrica",
    "rastreamento veicular",
    "alarme residencial",
    "automação residencial",
    "monitoramento 24/7",
    "inteligência artificial",
    "instalação de câmeras",
    "Visao360",
    "Anápolis",
    "Abadiânia",
    "Goiás",
    "segurança rural",
    "controle de acesso",
    "rastreador GPS",
  ],
  authors: [
    { name: "Visao360", url: "https://visao360.tech" },
    { name: "Sergio Monteiro" },
  ],
  creator: "Visao360",
  publisher: "Visao360",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://visao360.tech",
    siteName: "Visao360",
    title: "Visao360 — Segurança Eletrônica, Rastreamento e Soluções Rurais",
    description: "Soluções completas em segurança eletrônica, automação, monitorização 24/7 e inteligência artificial. Instalação profissional em Anápolis e região.",
    images: [
      {
        url: "https://visao360.tech/images/hero.png",
        width: 1344,
        height: 768,
        alt: "Visao360 - Soluções de Segurança Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visao360 — Segurança Eletrônica e Rastreamento Veicular",
    description: "Soluções completas em segurança, automação e inteligência artificial.",
    images: ["https://visao360.tech/images/hero.png"],
    creator: "@visao360tech",
  },
  alternates: {
    canonical: "https://visao360.tech",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="BR-GO" />
        <meta name="geo.placename" content="Anápolis" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Visao360",
              alternateName: "Visao360.tech",
              url: "https://visao360.tech",
              logo: "https://visao360.tech/logo.png",
              description: "Soluções completas em segurança eletrônica, automação, monitorização 24/7 e inteligência artificial.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Anápolis",
                addressRegion: "GO",
                addressCountry: "BR",
              },
              telephone: "+55-62-99190-3462",
              email: "contact@visao360.tech",
              areaServed: ["Anápolis", "Abadiânia", "Goiânia", "Goiás"],
              serviceType: [
                "Segurança Eletrônica",
                "Rastreamento Veicular",
                "Soluções Rurais",
                "Automação Residencial",
                "Monitoramento 24/7",
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
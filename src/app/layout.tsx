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
    default: "Visao360 — Câmeras de Segurança, Rastreamento Veicular e Soluções Rurais em Anápolis",
    template: "%s | Visao360",
  },
  description:
    "Visao360: soluções completas em câmeras de segurança, cerca elétrica, alarmes, rastreamento veicular GPS e monitoramento 24/7. Instalação profissional em Anápolis, Abadiânia e região. Entregas para todo o Brasil. Orçamento gratuito.",
  keywords: [
    "câmeras de segurança Anápolis",
    "instalação de câmeras",
    "cerca elétrica",
    "rastreamento veicular",
    "rastreador GPS",
    "alarme residencial",
    "segurança eletrônica",
    "monitoramento 24/7",
    "automação residencial",
    "segurança rural",
    "câmeras solares",
    "controle de acesso",
    "interfone com câmera",
    "Visao360",
    "Anápolis",
    "Abadiânia",
    "Goiás",
    "GO",
    "segurança patrimonial",
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
    title: "Visao360 — Câmeras de Segurança, Rastreamento e Soluções Inteligentes em Anápolis",
    description: "Soluções completas em câmeras de segurança, cerca elétrica, alarmes, rastreamento veicular e monitoramento 24/7. Instalação profissional em Anápolis, Abadiânia e região.",
    images: [
      {
        url: "https://visao360.tech/images/hero.png",
        width: 1344,
        height: 768,
        alt: "Visao360 - Câmeras de Segurança e Rastreamento Veicular",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visao360 — Câmeras de Segurança e Rastreamento Veicular",
    description: "Soluções completas em câmeras de segurança, cerca elétrica, alarmes, rastreamento veicular. Instalação profissional em Anápolis e região.",
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

// FAQ structured data for Google Rich Results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vocês atendem em quais cidades?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos Anápolis, Abadiânia e toda a região. Para outros estados, consulte-nos sobre disponibilidade.",
      },
    },
    {
      "@type": "Question",
      name: "Qual o prazo de instalação?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uma residência padrão leva de 1 a 3 dias. Projetos maiores dependem da complexidade — sempre apresentamos o cronograma antes de começar.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês vendem equipamentos ou só instalam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ambos. Vendemos equipamentos com instalação inclusa e também fazemos projetos com equipamentos que o cliente já possui.",
      },
    },
    {
      "@type": "Question",
      name: "Posso acompanhar pelo celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todos os sistemas que instalamos podem ser acessados pelo celular — câmeras, alarmes, rastreadores. Te ensinamos a usar.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a garantia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Garantia de 12 meses em mão de obra e garantia do fabricante nos equipamentos. Após a garantia, oferecemos planos de manutenção.",
      },
    },
    {
      "@type": "Question",
      name: "Fazem orçamento gratuito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O orçamento é gratuito e sem compromisso. Basta entrar em contato pelo WhatsApp ou agendar uma visita técnica.",
      },
    },
  ],
};

// LocalBusiness structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://visao360.tech/#business",
  name: "Visao360",
  alternateName: "Visao360.tech",
  url: "https://visao360.tech",
  logo: "https://visao360.tech/logo.png",
  image: "https://visao360.tech/images/hero.png",
  description:
    "Soluções completas em segurança eletrônica, automação, monitorização 24/7 e inteligência artificial em Anápolis, Abadiânia e região.",
  telephone: "+55-62-99190-3462",
  email: "contact@visao360.tech",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Anápolis",
    addressLocality: "Anápolis",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -16.3281,
    longitude: -48.9530,
  },
  areaServed: [
    { "@type": "City", name: "Anápolis" },
    { "@type": "City", name: "Abadiânia" },
    { "@type": "State", name: "Goiás" },
    { "@type": "Country", name: "Brazil" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: ["https://instagram.com/visao360tech"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Soluções de Segurança",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Câmeras de Segurança",
          description: "Instalação profissional de câmeras internas e externas com visualização pelo celular.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cerca Elétrica",
          description: "Instalação, manutenção e reparo de cercas elétricas residenciais e comerciais.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rastreamento Veicular",
          description: "Localizadores GPS, rastreadores, bloqueadores e gestão de frota.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soluções Rurais",
          description: "Câmeras solares, cercas elétricas e monitoramento remoto para propriedades rurais.",
        },
      },
    ],
  },
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
        <meta name="geo.position" content="-16.3281;-48.9530" />
        <meta name="ICBM" content="-16.3281, -48.9530" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
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
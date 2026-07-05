# Visao360.tech

> Plataforma digital da Visao360 — soluções completas em segurança eletrônica, rastreamento veicular e monitoramento inteligente. Site institucional com funil de conversão por WhatsApp, otimizado para SEO local e indexação.

**Site ao vivo:** [visao360.tech](https://visao360.tech)
**Repositório:** [github.com/nexflowx-hub/visao360.tech](https://github.com/nexflowx-hub/visao360.tech)

---

## Sumário

- [Visão Geral](#visão-geral)
- [Stack Tecnológica](#stack-tecnológica)
- [Arquitetura](#arquitetura)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Roteamento por Hash](#roteamento-por-hash)
- [Seções da Homepage](#seções-da-homepage)
- [Sub-páginas](#sub-páginas)
- [Funil de Conversão (Wizard)](#funil-de-conversão-wizard)
- [Design System](#design-system)
- [SEO e Metadados](#seo-e-metadados)
- [API](#api)
- [Banco de Dados](#banco-de-dados)
- [Assets e Imagens](#assets-e-imagens)
- [Responsividade](#responsividade)
- [Desenvolvimento Local](#desenvolvimento-local)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)
- [Decisões Técnicas](#decisões-técnicas)

---

## Visão Geral

A Visao360 é uma empresa de segurança eletrônica sediada em Anápolis, GO, atuando na região de Anápolis, Abadiânia e entorno. Este projeto é o site institucional da empresa, projetado com foco em:

- **Conversão**: Funil de orçamento direcionado para WhatsApp
- **SEO Local**: Otimizado para "câmeras de segurança Anápolis", "rastreamento veicular", etc.
- **Performance**: Next.js 16 com Turbopack, imagens otimizadas com Sharp
- **Experiência Mobile-first**: Design responsivo para celular, tablet e desktop
- **Confiabilidade**: Estética de empresa estabelecida, não de startup

---

## Stack Tecnológica

| Camada | Tecnologia | Versão |
|---|---|---|
| **Framework** | Next.js (App Router) | 16.1.x |
| **Runtime** | React | 19.x |
| **Linguagem** | TypeScript (strict) | 5.x |
| **Estilização** | Tailwind CSS | 4.x |
| **Componentes UI** | shadcn/ui (New York style) | Radix UI |
| **Animações** | Framer Motion | 12.x |
| **Ícones** | Lucide React | 0.525.x |
| **ORM** | Prisma | 6.11.x |
| **Banco de Dados** | SQLite | — |
| **Validação** | Zod | 4.x |
| **Temas** | next-themes | 0.4.x |
| **Estado Cliente** | Zustand | 5.x |
| **Estado Servidor** | TanStack Query | 5.x |
| **Fontes** | Inter (Google Fonts) | — |
| **Imagens** | next/image + Sharp | — |
| **SDK AI** | z-ai-web-dev-sdk | 0.0.x |

---

## Arquitetura

```
┌─────────────────────────────────────────────────────┐
│                    Next.js 16                        │
│               (App Router + Turbopack)               │
├─────────────────────────────────────────────────────┤
│  src/app/page.tsx  (Ponto de entrada — SPA client)  │
│    ├── useHashRouter() → Gerencia rotas via hash     │
│    ├── isHome → Renderiza HomePage (8 seções)        │
│    └── !isHome → Renderiza sub-páginas via switch    │
├─────────────────────────────────────────────────────┤
│  Layout (server)                                     │
│    ├── Metadata + OpenGraph + Twitter Cards          │
│    ├── Structured Data (LocalBusiness + FAQ)         │
│    ├── Inter font + ThemeProvider                     │
│    └── Toaster (Sonner)                              │
├─────────────────────────────────────────────────────┤
│  API Routes                                          │
│    └── POST /api/lead → Captura leads (JSON)         │
├─────────────────────────────────────────────────────┤
│  Prisma + SQLite                                     │
│    └── Schema User / Post (pronto para extensão)     │
└─────────────────────────────────────────────────────┘
```

### SPA com Hash Routing

O projeto funciona como uma SPA (Single Page Application) servida a partir da rota `/` do Next.js. O roteamento é gerenciado client-side via hash (`#/residencial`, `#/veicular`, etc.) usando um hook customizado `useHashRouter()`.

**Por quê?** O ambiente de deploy (sandbox) expõe apenas a porta 3000 com proxy reverso (Caddy), limitando o acesso a uma única rota. Hash routing permite múltiplas "páginas" sem necessidade de rotas adicionais no servidor.

---

## Estrutura de Diretórios

```
src/
├── app/                          # App Router (Next.js)
│   ├── layout.tsx                # Root layout (server) — metadata, fonts, structured data
│   ├── page.tsx                  # Ponto de entrada — hash router + renderização condicional
│   ├── globals.css               # Design tokens Tailwind + variáveis CSS
│   ├── sitemap.ts                # Sitemap XML para SEO
│   └── api/
│       ├── route.ts              # API genérica
│       └── lead/
│           └── route.ts          # POST — captura de leads
│
├── components/
│   ├── ui/                       # shadcn/ui — 48 componentes prontos
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── sheet.tsx
│   │   ├── accordion.tsx
│   │   └── ... (44 outros)
│   │
│   └── visao/                    # Componentes específicos do projeto
│       ├── topbar.tsx            # Navegação fixa + menu mobile (Sheet)
│       ├── footer.tsx            # Rodapé com links, contato, redes
│       ├── section-heading.tsx   # Heading reutilizável com animação
│       └── theme-toggle.tsx      # Toggle claro/escuro (next-themes)
│
├── sections/                     # Seções da homepage (renderizadas na ordem)
│   ├── hero.tsx                  # Hero — headline dividida, 2 CTAs, imagem
│   ├── features.tsx              # 4 cards de diferenciais com ícones
│   ├── how-can-we-help.tsx       # 4 cards de categorias (residencial, veicular, rural, loja)
│   ├── how-we-work.tsx           # 5 passos do processo de trabalho
│   ├── statistics.tsx            # Barra de métricas (fundo azul escuro)
│   ├── projects.tsx              # 4 cards de projetos realizados
│   ├── testimonials.tsx          # 3 depoimentos de clientes
│   ├── faq.tsx                   # 6 perguntas frequentes (Accordion)
│   ├── other-solutions.tsx       # 6 soluções secundárias em grid
│   └── contact-cta.tsx           # CTA final de contato (WhatsApp + telefone)
│
├── views/                        # Sub-páginas (ativadas por hash routing)
│   ├── category-page.tsx         # Template genérico para categorias (4 usos)
│   ├── contato-page.tsx          # Página de contato com cards
│   ├── instalacoes-page.tsx      # Processo + checklist de instalações
│   └── orcamento-page.tsx        # Formulário de orçamento → WhatsApp
│
├── features/
│   └── ai-consultant/
│       └── wizard.tsx            # Funil de conversão por categoria (Dialog)
│
├── hooks/
│   ├── use-mobile.ts             # Hook de detecção de mobile
│   └── use-toast.ts              # Hook de toasts
│
├── lib/
│   ├── constants.ts              # Dados do negócio (CATEGORIAS, FAQ, PROJETOS, etc.)
│   ├── router.ts                 # useHashRouter — roteamento SPA via hash
│   ├── db.ts                     # Prisma client singleton
│   └── utils.ts                  # cn() — clsx + tailwind-merge
│
└── providers/
    └── theme-provider.tsx        # Wrapper do next-themes

public/
├── logo.png                      # Logo principal (shield + eye)
├── logo.svg                      # Logo vetorial
├── banner.png                    # Banner de marca
├── brand-card.png                # Cartão de visita digital
├── manifest.json                 # PWA manifest
├── robots.txt                    # Diretrizes de crawlers
└── images/
    ├── hero.png                  # Imagem principal do hero
    ├── residential.png           # Categoria: Segurança Residencial
    ├── vehicle.png               # Categoria: Rastreamento Veicular
    ├── rural.png                 # Categoria: Soluções Rurais
    └── store.png                 # Categoria: Loja Online

prisma/
└── schema.prisma                 # Schema do banco (SQLite)
```

---

## Roteamento por Hash

O hook `useHashRouter()` (`src/lib/router.ts`) gerencia toda a navegação:

```typescript
type PageSlug =
  | undefined          // Homepage
  | "residencial"      #/residencial
  | "veicular"         #/veicular
  | "rural"            #/rural
  | "lojaonline"       #/lojaonline
  | "contato"          #/contato
  | "instalacoes"      #/instalacoes
  | "orcamento";       #/orcamento

const { page, navigate, isHome } = useHashRouter();
```

**Mecanismo:**
1. Escuta evento `hashchange` do `window`
2. Parseia `window.location.hash` → extrai slug
3. Atualiza estado React → re-renderiza `page.tsx`
4. Scroll automático para o topo da página
5. `page.tsx` usa `isHome` para decidir entre homepage e sub-páginas

**Importante:** Links de navegação usam `<a href="#/slug">` (não `next/link`) para garantir que o `hashchange` seja disparado corretamente.

---

## Seções da Homepage

Renderizadas na ordem dentro do componente `HomePage`:

| # | Seção | Arquivo | Descrição |
|---|---|---|---|
| 1 | Hero | `hero.tsx` | Layout 2 colunas: headline "Proteção completa para o que importa." + imagem. Badge, 2 CTAs, trust signals bar |
| 2 | Features | `features.tsx` | 4 cards horizontais: Soluções Integradas, Instalação Profissional, Monitorização 24/7, IA |
| 3 | Soluções | `how-can-we-help.tsx` | 4 cards com imagem: Residencial, Veicular, Rural, Loja Online |
| 4 | Processo | `how-we-work.tsx` | 5 passos numerados do processo de trabalho |
| 5 | Estatísticas | `statistics.tsx` | Barra azul (#0A2647) com 4 métricas: +2.500 clientes, +6.800 instalações, +120 parceiros, 99.8% uptime |
| 6 | Projetos | `projects.tsx` | 4 cards de projetos realizados com badge de categoria |
| 7 | Depoimentos | `testimonials.tsx` | 3 depoimentos com avatar (iniciais) |
| 8 | FAQ | `faq.tsx` | 6 perguntas em Accordion |
| 9 | Outras Soluções | `other-solutions.tsx` | 6 cards: Empresas, Indústrias, Automação, Redes, Infraestrutura, Soluções Inteligentes |
| 10 | Contato CTA | `contact-cta.tsx` | CTA final: WhatsApp + Telefone + Email + Localização |

---

## Sub-páginas

| Rota | Arquivo | Conteúdo |
|---|---|---|
| `#/residencial` | `category-page.tsx` | Hero com imagem + headline + 4 serviços (Câmeras, Cerca, Alarmes, Acesso) + CTA |
| `#/veicular` | `category-page.tsx` | Hero + 4 serviços (GPS, Rastreadores, Bloqueadores, Frotas) + CTA |
| `#/rural` | `category-page.tsx` | Hero + 4 serviços (Solares, Cercas, Sensores, Remoto) + CTA |
| `#/lojaonline` | `category-page.tsx` | Hero + 4 serviços (Câmeras, Rastreadores, Acessórios, Kits) + CTA WhatsApp |
| `#/contato` | `contato-page.tsx` | 5 cards de contato: WhatsApp, Telefone, Email, Localização, Instagram |
| `#/instalacoes` | `instalacoes-page.tsx` | Processo de trabalho + Checklist de instalações (8 itens) |
| `#/orcamento` | `orcamento-page.tsx` | Formulário: Nome, WhatsApp, Cidade, Categoria, Mensagem → WhatsApp |

`category-page.tsx` é um **template genérico** que recebe `categoryId`, `title`, `headline`, `description`, `image` e `items` via props, e busca os serviços em `CATEGORY_SERVICES[categoryId]`.

---

## Funil de Conversão (Wizard)

Localizado em `src/features/ai-consultant/wizard.tsx`.

**Fluxo:**
1. **Seleção de categoria** → 4 opções (Residencial, Veicular, Rural, Loja Online)
2. **Perguntas específicas por categoria**:
   - Residencial: 1 pergunta (situação do cliente)
   - Veicular: 1 pergunta (tipo de serviço)
   - Rural: 2 perguntas (tipo de propriedade + necessidade)
   - Loja Online: redirecionamento direto para WhatsApp
3. **Formulário de lead** → Nome, WhatsApp, Cidade
4. **WhatsApp** → Mensagem pré-formatada com categoria, seleções e dados do lead

**Implementação:** Dialog do shadcn/ui com AnimatePresence (Framer Motion) para transições suaves entre etapas. Botão "Voltar" permite navegar para trás no funil.

---

## Design System

### Cores

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `#0D6EFD` | Botões, links, acentos, ícones ativos |
| `--primary-foreground` | `#FFFFFF` | Texto sobre primary |
| `--background` | `#FFFFFF` | Fundo principal |
| `--foreground` | `#111827` | Texto principal |
| `--muted-foreground` | `#6B7280` | Texto secundário |
| `--secondary` | `#F9FAFB` | Fundo de seções alternadas |
| `--accent` | `#EBF5FF` | Hover sutil, backgrounds de destaque |
| `--border` | `#E5E7EB` | Bordas de cards e seções |
| `--stats-bg` | `#0A2647` | Fundo da seção de estatísticas |
| `--success` | `#059669` | Feedback positivo |
| `--warning` | `#D97706` | Avisos |
| `--destructive` | `#DC2626` | Erros |

### Tipografia

- **Fonte principal:** Inter (Google Fonts, `--font-inter`)
- **Fonte mono:** Geist Mono (Google Fonts, `--font-geist-mono`)
- **Headlines:** `font-extrabold` tracking-tight
- **Body:** `text-sm` a `text-base`, `leading-relaxed`

### Componentes

- **47 componentes shadcn/ui** (New York style) em `src/components/ui/`
- **4 componentes custom** em `src/components/visao/`
- **Animações:** Framer Motion — fade-in, stagger, slide para wizard
- **Ícones:** Lucide React (shield, camera, truck, etc.)

### Padrões UI

- Cards: `rounded-2xl border shadow-sm hover:shadow-md`
- Botões: `rounded-lg h-11 sm:h-12`
- Seções: `py-16 md:py-24 lg:py-28` com `max-w-7xl mx-auto`
- Espaçamento interno: `px-4 sm:px-6 lg:px-8`

---

## SEO e Metadados

### Metadata (layout.tsx)

```typescript
title: "Visao360 — Câmeras de Segurança, Rastreamento Veicular e Soluções Rurais em Anápolis"
description: "Visao360: soluções completas em câmeras de segurança, cerca elétrica, alarmes, rastreamento veicular GPS..."
keywords: ["câmeras de segurança Anápolis", "instalação de câmeras", "cerca elétrica", ...]
```

### Open Graph / Twitter Cards

- `og:type`: website
- `og:locale`: pt_BR
- `og:image`: hero.png (1344x768)
- `twitter:card`: summary_large_image
- `twitter:creator`: @visao360tech

### Structured Data (JSON-LD)

1. **LocalBusiness** — Nome, endereço, telefone, horário, geo coordinates, rating (4.9/5, 127 reviews), catálogo de serviços com 4 offerings
2. **FAQPage** — 6 perguntas frequentes mapeadas para Google Rich Results

### Geo Meta Tags

```html
<meta name="geo.region" content="BR-GO" />
<meta name="geo.placename" content="Anápolis" />
<meta name="geo.position" content="-16.3281;-48.9530" />
<meta name="ICBM" content="-16.3281, -48.9530" />
```

### Sitemap

Gerado dinamicamente em `src/app/sitemap.ts` com 7 URLs:
- `/` (priority 1.0, weekly)
- `/#/residencial`, `/#/veicular`, `/#/rural` (priority 0.9, monthly)
- `/#/lojaonline`, `/#/instalacoes`, `/#/orcamento` (priority 0.8, monthly)
- `/#/contato` (priority 0.7, monthly)

### Outros

- `robots.txt`: Allow all + sitemap reference
- `manifest.json`: PWA-ready (standalone, theme color #0D6EFD)
- `canonical`: https://visao360.tech
- `dns-prefetch` + `preconnect` para Google Fonts

---

## API

### POST /api/lead

Captura leads do funil de orçamento.

**Request:**
```json
{
  "name": "João Silva",
  "whatsapp": "(62) 99999-9999",
  "email": "joao@email.com",
  "data": { "category": "residential", "selections": ["cameras"] }
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Lead capturado com sucesso."
}
```

**Response (400):**
```json
{
  "error": "Nome e WhatsApp são obrigatórios."
}
```

> **Nota:** Atualmente faz `console.log` do lead. Em produção, deve integrar com Prisma DB e/ou CRM via webhook.

---

## Banco de Dados

### Prisma + SQLite

**Schema atual** (`prisma/schema.prisma`):
- `User` — id, email (unique), name, timestamps
- `Post` — id, title, content, published, authorId, timestamps

> **Nota:** Schema genérico pronto para extensão. Em produção, criar modelos específicos: `Lead`, `Service`, `Project`, `Testimonial`, etc.

**Comandos:**
```bash
bun run db:push      # Aplica schema ao SQLite
bun run db:generate  # Gera Prisma Client
bun run db:migrate   # Cria migração
```

---

## Assets e Imagens

| Arquivo | Localização | Uso |
|---|---|---|
| `logo.png` | `public/` | Logo no header, footer, favicon |
| `logo.svg` | `public/` | Logo vetorial (fallback) |
| `banner.png` | `public/` | Material de marca |
| `brand-card.png` | `public/` | Cartão de visita |
| `hero.png` (154KB) | `public/images/` | Imagem principal do hero |
| `residential.png` (167KB) | `public/images/` | Card + hero da página residencial |
| `vehicle.png` (119KB) | `public/images/` | Card + hero da página veicular |
| `rural.png` (136KB) | `public/images/` | Card + hero da página rural |
| `store.png` (83KB) | `public/images/` | Card + hero da página loja online |

Todas as imagens são servidas via `next/image` com `priority`, `fill`, `object-cover` e `sizes` responsivos. Otimização automática via Sharp (WebP, lazy loading, srcset).

---

## Responsividade

### Breakpoints

| Breakpoint | Largura | Layout |
|---|---|---|
| Mobile | 320px — 639px | 1 coluna, fontes compactas, menu hamburger |
| Tablet (sm) | 640px — 767px | 2 colunas em grids |
| Tablet (md) | 768px — 1023px | 2 colunas, espaçamento expandido |
| Desktop (lg) | 1024px — 1279px | 4 colunas, hero 2-colunas |
| Desktop (xl) | 1280px+ | Max-width 1280px centrado |

### Padrões Responsivos

- **Hero:** 1 coluna (mobile) → 2 colunas (lg), imagem acima no mobile, à direita no desktop
- **Cards:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Textos:** `text-xs sm:text-sm md:text-base`
- **Botões:** `h-11 sm:h-12`, full-width em mobile
- **Inputs:** `h-11 sm:h-12` (touch targets ≥44px)
- **Spacing:** `py-16 md:py-24 lg:py-28`, `px-4 sm:px-6 lg:px-8`
- **Navegação:** Hamburger (Sheet) em mobile, links inline em lg+

---

## Desenvolvimento Local

### Pré-requisitos

- Bun (recomendado) ou Node.js 18+
- Git

### Instalação

```bash
git clone https://github.com/nexflowx-hub/visao360.tech.git
cd visao360.tech
bun install
bun run db:push
```

### Executar

```bash
bun run dev
```

Acesse `http://localhost:3000`.

### Lint

```bash
bun run lint
```

---

## Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| `dev` | `next dev -p 3000` | Servidor de desenvolvimento com Turbopack |
| `build` | `next build + cp` | Build de produção (standalone output) |
| `start` | `node .next/standalone/server.js` | Servidor de produção |
| `lint` | `eslint .` | Verificação de código ESLint |
| `db:push` | `prisma db push` | Aplica schema ao banco |
| `db:generate` | `prisma generate` | Gera Prisma Client |
| `db:migrate` | `prisma migrate dev` | Cria migração |
| `db:reset` | `prisma migrate reset` | Reseta banco de dados |

---

## Deploy

### Configuração do Next.js

```typescript
// next.config.ts
{
  output: "standalone",
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false
}
```

### Variáveis de Ambiente

```env
DATABASE_URL="file:./db/dev.db"
```

### Produção

O build gera saída standalone em `.next/standalone/`. O script de build copia:
- `.next/static/` → `.next/standalone/.next/static/`
- `public/` → `.next/standalone/public/`

Deploy recomendado: Vercel, Docker com `node .next/standalone/server.js`, ou qualquer plataforma que suporte Node.js.

### Docker (exemplo)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## Decisões Técnicas

### Por que hash routing em vez de rotas do App Router?

O ambiente de deploy (sandbox com proxy reverso Caddy) expõe apenas uma porta (3000) com proxy para a rota `/`. Rotas adicionais como `/residencial` ou `/contato` não são acessíveis externamente. Hash routing (`#/residencial`) resolve isso sem configuração adicional no servidor.

### Por que `<a>` em vez de `<Link>` para navegação?

O `next/link` intercepta cliques e tenta navegar via roteamento do Next.js, o que não dispara o evento `hashchange` necessário pelo `useHashRouter()`. Tags `<a href="#/slug">` nativas resolvem isso.

### Por que `src/views/` em vez de `src/pages/`?

Next.js 16 trata qualquer diretório `pages/` como Pages Router (legacy), causando conflito com App Router. Renomear para `views/` evita o erro: *"found pages without a React Component as default export"*.

### Por que dark mode é igual ao light mode?

O design da Visao360 foi concebido para transmitir confiança e profissionalismo — visual limpo, branco e azul. Dark mode foi mantido por completude técnica mas não é o foco da marca.

### Por que WhatsApp como canal de conversão?

O público-alvo (Anápolis, GO) usa WhatsApp como principal canal de comunicação. O funil de orçamento e o formulário de contato redirecionam para WhatsApp com mensagem pré-formatada, maximizando a taxa de resposta.

---

## Licença

Projeto privado da Visao360. Todos os direitos reservados.

---

<p align="center">
  <strong>Visao360</strong> — Tecnologia que protege. Inteligência que conecta.<br/>
  <sub>Anápolis, Abadiânia e Região • GO — Brasil</sub>
</p>
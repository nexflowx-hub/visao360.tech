export const COMPANY = {
  name: "Visao360",
  tagline: "TECNOLOGIA QUE PROTEGE. INTELIGÊNCIA QUE CONECTA.",
  description: "Soluções completas em segurança, automação e inteligência para residências, veículos, propriedades rurais e empresas.",
  whatsapp: "(62) 99190-3462",
  whatsappNumber: "5562991903462",
  whatsappLink: "https://wa.me/5562991903462",
  email: "contact@visao360.tech",
  website: "visao360.tech",
  location: "Anápolis, Abadiânia e Região",
  instagram: "@visao360tech",
  facebook: "@visao360tech",
  owner: "Sergio Monteiro",
  ownerTitle: "Engenheiro de Infraestrutura e Soluções",
} as const;

export const NAV_LINKS = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Produtos", href: "#/lojaonline" },
  { label: "Serviços", href: "#/instalacoes" },
  { label: "Empresas", href: "#/orcamento" },
  { label: "Intelligence 360", href: "#solucoes" },
  { label: "Sobre nós", href: "#/contato" },
] as const;

export const MAIN_CATEGORIES = [
  {
    id: "residential",
    slug: "residencial",
    title: "Segurança Residencial",
    image: "/images/residential.png",
    headline: "Proteja sua casa e sua família",
    description: "Câmeras, cercas elétricas, alarmes e controle de acesso. Tudo instalado com padrão profissional.",
    items: ["Câmeras", "Cercas elétricas", "Alarmes", "Controle de acesso"],
  },
  {
    id: "vehicle",
    slug: "veicular",
    title: "Rastreamento Veicular",
    image: "/images/vehicle.png",
    headline: "Saiba onde está o seu veículo",
    description: "Localizadores, rastreadores, bloqueadores e gestão de frota. Instalação profissional.",
    items: ["Localizadores", "Rastreadores", "Bloqueadores", "Instalação"],
  },
  {
    id: "rural",
    slug: "rural",
    title: "Soluções Rurais",
    image: "/images/rural.png",
    headline: "Mantenha sua propriedade rural protegida",
    description: "Câmeras solares, cercas, alarmes e monitoramento remoto para chácaras, fazendas e sítios.",
    items: ["Câmeras solares", "Cercas", "Alarmes", "Monitoramento remoto"],
  },
  {
    id: "store",
    slug: "lojaonline",
    title: "Loja Online",
    image: "/images/store.png",
    headline: "Equipamentos entregues em todo o Brasil",
    description: "Câmeras, rastreadores, acessórios e kits de segurança com entrega nacional.",
    items: ["Equipamentos", "Acessórios", "Kits", "Entrega para todo o Brasil"],
  },
] as const;

export const FUNNEL_STEPS: Record<string, { question: string; options: { id: string; label: string }[] }[]> = {
  residential: [
    {
      question: "Qual destas situações descreve melhor o que procura?",
      options: [
        { id: "cameras", label: "Quero instalar câmeras" },
        { id: "cerca", label: "Preciso reparar uma cerca elétrica" },
        { id: "casa_nova", label: "Quero proteger uma casa nova" },
        { id: "equipamentos", label: "Já tenho equipamentos" },
        { id: "visita", label: "Preciso de uma visita técnica" },
      ],
    },
  ],
  vehicle: [
    {
      question: "O que pretende?",
      options: [
        { id: "localizacao", label: "Localização em tempo real" },
        { id: "rastreamento", label: "Rastreamento" },
        { id: "bloqueio", label: "Bloqueio" },
        { id: "frota", label: "Gestão de frota" },
        { id: "instalacao", label: "Instalação" },
      ],
    },
  ],
  rural: [
    {
      question: "Qual o tipo de propriedade?",
      options: [
        { id: "chacara", label: "Chácara" },
        { id: "fazenda", label: "Fazenda" },
        { id: "sitio", label: "Sítio" },
        { id: "galpao", label: "Galpão" },
        { id: "curral", label: "Curral" },
      ],
    },
    {
      question: "Qual a necessidade?",
      options: [
        { id: "cameras", label: "Câmeras" },
        { id: "cercas", label: "Cercas" },
        { id: "alarmes", label: "Alarmes" },
        { id: "monitoramento", label: "Monitoramento remoto" },
      ],
    },
  ],
  store: [],
};

export const CATEGORY_SERVICES: Record<string, { title: string; description: string }[]> = {
  residential: [
    { title: "Câmeras de Segurança", description: "Instalação de câmeras internas e externas com visualização pelo celular. Gravação em nuvem ou local." },
    { title: "Cerca Elétrica", description: "Instalação, manutenção e reparo de cercas elétricas residenciais com energizador de última geração." },
    { title: "Alarmes", description: "Sistemas de alarme com sensores de presença, abertura e quebra de vidro. Monitoramento 24h." },
    { title: "Controle de Acesso", description: "Canceleiras, fechaduras eletrônicas e interfones com câmera para portões e portas." },
  ],
  vehicle: [
    { title: "Localizadores GPS", description: "Acompanhe seu veículo em tempo real pelo celular. Histórico de trajetos e alertas." },
    { title: "Rastreadores", description: "Rastreamento profissional com corte de ignição, antifurto e geo-fencing." },
    { title: "Bloqueadores", description: "Bloqueio remoto do veículo via comando ou aplicativo. Proteção contra furto." },
    { title: "Gestão de Frotas", description: "Dashboard completo para gerenciar múltiplos veículos: roteirização, consumo e manutenção." },
  ],
  rural: [
    { title: "Câmeras Solares", description: "Câmeras com painel solar para áreas sem energia elétrica. Ideal para cercas e portões." },
    { title: "Cercas Elétricas", description: "Cercas elétricas para propriedades rurais com longo perímetro. Energizadores de alta potência." },
    { title: "Alarmes e Sensores", description: "Sensores perimetrais, alarmes e iluminação acionada por movimento." },
    { title: "Monitoramento Remoto", description: "Acompanhe sua propriedade de qualquer lugar pelo celular, mesmo em áreas rurais." },
  ],
  store: [
    { title: "Câmeras", description: "Câmeras IP, analógicas e wireless das melhores marcas." },
    { title: "Rastreadores", description: "Localizadores e rastreadores GPS para carros, motos e caminhões." },
    { title: "Acessórios", description: "Cabos, conectores, fontes, HDDs e todo material para instalação." },
    { title: "Kits Prontos", description: "Kits de segurança montados e prontos para instalar. Vários tamanhos." },
  ],
};

export const OTHER_SOLUTIONS = [
  { id: "business", title: "Empresas", description: "Segurança e controle de acesso para comércios e escritórios" },
  { id: "industrial", title: "Indústrias", description: "Monitoramento e automação para ambientes industriais" },
  { id: "automation", title: "Automação Residencial", description: "Controle de iluminação, climatização e acessos" },
  { id: "networks", title: "Redes", description: "Infraestrutura de rede cabeada e wireless" },
  { id: "infrastructure", title: "Infraestrutura", description: "Projetos de infraestrutura tecnológica" },
  { id: "smart", title: "Soluções Inteligentes", description: "Projetos sob medida com IA e IoT" },
] as const;

export const HOW_WE_WORK = [
  { step: 1, title: "Conversa inicial", description: "Você nos conta o que precisa. Por WhatsApp, ligação ou visita." },
  { step: 2, title: "Diagnóstico", description: "Visitamos o local, avaliamos as necessidades reais e levantamos o que já existe." },
  { step: 3, title: "Projeto e orçamento", description: "Elaboramos um projeto claro com equipamentos, valores e prazo de instalação." },
  { step: 4, title: "Instalação", description: "Nossa equipe instala e configura tudo com padrão profissional." },
  { step: 5, title: "Entrega e suporte", description: "Demonstramos o sistema funcionando e ficamos disponíveis para o que precisar." },
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: "Condomínio Villa Verde",
    category: "Residencial",
    location: "Anápolis, GO",
    description: "48 câmeras com reconhecimento facial e controle de acesso biométrico para 120 unidades.",
  },
  {
    id: 2,
    title: "Fazenda São Paulo Agro",
    category: "Rural",
    location: "Anápolis, GO",
    description: "Monitoramento perimetral de 800 hectares com câmeras de longo alcance e sensores solares.",
  },
  {
    id: 3,
    title: "Frota Express Logística",
    category: "Veicular",
    location: "Anápolis, GO",
    description: "Rastreamento de 35 veículos com telemetria, roteirização e dashboard de gestão.",
  },
  {
    id: 4,
    title: "Loja Malu Modas",
    category: "Empresarial",
    location: "Abadiânia, GO",
    description: "Sistema de segurança com analytics de clientes e detecção de comportamento suspeito.",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Carlos Henrique",
    role: "Síndico \u2022 Condomínio Villa Verde",
    content: "A Visao360 fez a segurança inteira do condomínio. O reconhecimento facial no portão eliminou as invasões. O suporte é muito rápido.",
  },
  {
    id: 2,
    name: "Maria Fernanda",
    role: "Proprietária \u2022 Fazenda São Paulo",
    content: "Monitorar 800 hectares parecia impossível. Hoje vejo tudo pelo celular, em tempo real, mesmo no meio do cerrado.",
  },
  {
    id: 3,
    name: "Roberto Almeida",
    role: "CEO \u2022 Express Logística",
    content: "Com o rastreamento da Visao360, reduzimos o combustível em 23% e aumentamos a eficiência das entregas. Retorno em 4 meses.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Vocês atendem em quais cidades?",
    answer: "Atendemos Anápolis, Abadiânia e toda a região. Para outros estados, consulte-nos sobre disponibilidade.",
  },
  {
    question: "Qual o prazo de instalação?",
    answer: "Uma residência padrão leva de 1 a 3 dias. Projetos maiores dependem da complexidade — sempre apresentamos o cronograma antes de começar.",
  },
  {
    question: "Vocês vendem equipamentos ou só instalam?",
    answer: "Ambos. Vendemos equipamentos com instalação inclusa e também fazemos projetos com equipamentos que o cliente já possui.",
  },
  {
    question: "Posso acompanhar pelo celular?",
    answer: "Sim. Todos os sistemas que instalamos podem ser acessados pelo celular — câmeras, alarmes, rastreadores. Te ensinamos a usar.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Garantia de 12 meses em mão de obra e garantia do fabricante nos equipamentos. Após a garantia, oferecemos planos de manutenção.",
  },
  {
    question: "Fazem orçamento gratuito?",
    answer: "Sim. O orçamento é gratuito e sem compromisso. Basta entrar em contato pelo WhatsApp ou agendar uma visita técnica.",
  },
] as const;
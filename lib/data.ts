// Fonte única de conteúdo do site. Edite aqui para atualizar o portfólio.

export const profile = {
  name: "João Ricardo de Brito",
  shortName: "João Ricardo",
  role: "Desenvolvedor Full-Stack · Engenharia de Software",
  location: "Teresina, PI",
  year: 2026,
  email: "ricardodebritojoao@gmail.com",
  phone: "(86) 99577-6891",
  whatsapp: "https://wa.me/5586995776891",
  github: "https://github.com/JoaoRicardoBrito",
  // TODO: preencher com a URL do LinkedIn (o ícone fica oculto enquanto vazio)
  linkedin: "",
  // Coloque a foto em /public/foto.jpg e troque para "/foto.jpg"
  photo: "/foto.jpg",
  summary:
    "Estudante de Engenharia de Software (ICEV) com experiência prática em sistemas web para clientes reais, de e-commerce a automação de dados, e atuação na criação de uma startup de IA. Stack principal em TypeScript (NestJS, React/Next.js), com interesse em IA aplicada, automação e produtos SaaS. Perfil empreendedor, com facilidade para aprender tecnologias novas e se comunicar com clientes.",
};

export const services = [
  {
    title: "Full-Stack Web",
    text: "Aplicações completas em Next.js e NestJS, do modelo de dados ao deploy na Vercel e Railway.",
  },
  {
    title: "IA Aplicada",
    text: "Integração de LLMs, agentes, RAG e bots de WhatsApp para resolver problemas reais de negócio.",
  },
  {
    title: "Automação & Dados",
    text: "RPA e web scraping com Python e Playwright, pipelines ETL e dashboards no Metabase.",
  },
  {
    title: "Integrações",
    text: "Pagamentos com Mercado Pago, frete com Melhor Envio e mensageria com WhatsApp Cloud API.",
  },
];

export const experience = [
  {
    role: "Desenvolvedor de Software",
    company: "Capybara Labs",
    period: "Fev/2025 — atual",
    type: "Criação de startup",
    items: [
      "Desenvolvimento ativo do LabsChat.AI, plataforma multi-modelo de IA (OpenAI, Gemini, Anthropic, DeepSeek, xAI) com construtor de agentes, biblioteca de agentes compartilhados e servidor MCP voltado ao meio jurídico.",
      "Produção de conteúdo sobre IA aplicada a negócios e ao Direito, incluindo a masterclass “RAG e Inteligência Artificial na Advocacia”.",
      "Criação do site institucional da empresa (capybaralabs.com.br), com páginas de soluções, produto e cases, em Next.js.",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack",
    company: "Freelancer",
    period: "2026 — atual",
    type: "Projetos para clientes",
    items: [
      "MyB Maison: e-commerce de moda feminina com 39 requisitos funcionais, Next.js + NestJS, Supabase, Mercado Pago, Melhor Envio e WhatsApp Cloud API.",
      "Santa Clara ECO: landing page com SEO local, painel administrativo de gestão e proposta comercial.",
      "Galeria Online: site para artista visual com carrossel, catálogo com filtros, página de obra com conversão de moeda e contato por WhatsApp.",
      "Publicação de aplicações na Vercel e configuração de domínios.",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  // Coloque imagens em /public/projetos/ e referencie aqui, ex: "/projetos/labschat.jpg"
  image?: string;
  // "contain" mostra a imagem inteira (bom para logos); padrão "cover" preenche o quadro
  imageFit?: "cover" | "contain";
  // cor de fundo atrás de imagens "contain"
  imageBg?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "LabsChat.AI",
    category: "Startup · IA",
    description:
      "Plataforma multi-modelo de IA com construtor de agentes, biblioteca de agentes compartilhados e servidor MCP voltado ao meio jurídico.",
    tags: ["Next.js", "LLMs", "MCP", "Agentes"],
    // Página do LabsChat no site da Capybara Labs (o app em si exige acesso)
    link: "https://www.capybaralabs.com.br/labschat",
    image: "/projetos/labschat.webp",
    imageFit: "contain",
    imageBg: "#000000",
  },
  {
    title: "MyB Maison",
    category: "E-commerce",
    description:
      "E-commerce de moda feminina com pagamentos, cálculo de frete e notificações por WhatsApp.",
    tags: ["Next.js", "NestJS", "Supabase", "Mercado Pago", "Melhor Envio"],
    image: "/projetos/myb-maison.webp",
    imageFit: "contain",
    imageBg: "#fdfaf0",
    link: "https://mybmaison.com.br",
  },
  {
    title: "Santa Clara ECO",
    category: "Landing page · Admin",
    description:
      "Landing page com SEO local para empresa de Teresina e painel administrativo de gestão.",
    tags: ["Next.js", "SEO", "Admin"],
    image: "/projetos/santa-clara-eco.webp",
    imageFit: "contain",
    imageBg: "#ffffff",
    link: "https://santaclaraeco.com/",
  },
  {
    title: "Desafio Investe Piauí",
    category: "BI · ICEV",
    description:
      "Dashboard de BI para indicadores ASG (ambiental, social e governança), liderando a frente de dashboards do grupo.",
    tags: ["BI", "Dashboards", "ASG"],
    image: "/projetos/investe-piaui.webp",
  },
  {
    title: "Capybara Labs",
    category: "Site institucional",
    description:
      "Site da empresa com páginas de soluções, produto e cases.",
    tags: ["Next.js", "Vercel"],
    image: "/projetos/capybara-labs.webp",
    imageFit: "contain",
    imageBg: "#778792",
    link: "https://capybaralabs.com.br",
  },
  {
    title: "Galeria Online",
    category: "Site para artista",
    description:
      "Galeria online do artista visual Carlos Ventura: carrossel na home, catálogo com filtros e ordenação, página de cada obra com conversão de moeda e contato por WhatsApp para aquisição.",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    image: "/projetos/galeria.webp",
    link: "https://github.com/JoaoRicardoBrito/Galeria-Online",
  },
];

export const skillGroups = [
  { label: "Linguagens", items: ["TypeScript", "JavaScript", "Python"] },
  { label: "Backend", items: ["NestJS", "Node.js", "APIs REST", "ETL"] },
  { label: "Frontend", items: ["React", "Next.js", "HTML", "CSS"] },
  { label: "Dados", items: ["PostgreSQL", "MySQL", "Supabase", "PostGIS", "Metabase"] },
  { label: "Automação", items: ["Python", "Playwright", "RPA", "Web scraping"] },
  { label: "Infra", items: ["Docker", "Git/GitHub", "Vercel", "Railway", "Cloudflare"] },
  { label: "Integrações", items: ["Mercado Pago", "Melhor Envio", "WhatsApp Cloud API"] },
  { label: "IA", items: ["APIs de LLMs", "Engenharia de prompts", "Agentes", "Bots WhatsApp", "RAG"] },
  { label: "Básico", items: ["Java", "C", "SvelteKit"] },
];

// Logos exibidos ao lado das tecnologias nos grupos de skills
export const techLogos: Record<string, string> = {
  TypeScript: "/logos/typescript.webp",
  JavaScript: "/logos/javascript.webp",
  Python: "/logos/python.webp",
  HTML: "/logos/html.webp",
  CSS: "/logos/css.webp",
  Java: "/logos/java.webp",
};

export const marqueeTop = [
  "TypeScript", "Next.js", "NestJS", "React", "Node.js", "Python", "PostgreSQL", "Supabase",
];
export const marqueeBottom = [
  "LLMs", "Agentes", "MCP", "Playwright", "Metabase", "PostGIS", "Docker", "Vercel", "Railway", "WhatsApp API",
];

// Linguagens mais usadas no GitHub (% do código). Cores validadas p/ fundo escuro e daltonismo.
// Projetos em andamento (seção no fim do currículo)
export const ongoing = [
  {
    title: "LIDOC",
    subtitle: "Leitura Inteligente de Documentos Contábeis",
    logo: "/projetos/lidoc.webp",
    status: "Em andamento",
    // 0–100: quanto da barra aparece preenchida
    progress: 65,
    problem:
      "Escritórios de contabilidade recebem por e-mail e WhatsApp PDFs de NFS-e, boletos, comprovantes e fotos de cupons — e a equipe abre um a um, descobre cliente e competência, digita os dados e lança no sistema contábil.",
    solution:
      "O LIDOC automatiza o caminho até o lançamento sem tirar o humano do controle: o documento chega, o Paperless-ngx guarda e faz OCR, o LIDOC identifica cliente, tipo e competência, extrai os campos com LLM e calcula a confiança de cada um. O contador revisa e o sistema gera o arquivo de importação para o Domínio ou o Fortes Contábil.",
    highlights: [
      "Confiança por campo calculada pelo próprio sistema (nunca pedida ao LLM), com a evidência no documento",
      "Leitura de QR code e código de barras, validadores de CNPJ/CPF e reconciliação entre fontes",
      "Segunda leitura com outro modelo para autoconsistência e detecção de duplicatas exatas e semânticas",
      "Multi-tenant com Row Level Security no Postgres e uma instância do Paperless por escritório",
      "Ingestão por e-mail (IMAP) e WhatsApp Cloud API oficial",
      "Deploy com Docker Compose, CI, rollback e foco em LGPD",
    ],
    stack: ["Python", "FastAPI", "HTMX", "Postgres", "Procrastinate", "Paperless-ngx", "OpenAI", "DeepSeek", "Docker"],
    goals: [
      { value: "≥ 85%", label: "acerto de cliente, tipo e competência" },
      { value: "< 30 s", label: "revisão de um documento" },
      { value: "< 2%", label: "erro com alta confiança" },
    ],
  },
];

export const githubLanguages = [
  { name: "TypeScript", logo: "/logos/typescript.webp", pct: 47.8, color: "#3987e5" },
  { name: "Python", logo: "/logos/python.webp", pct: 38.7, color: "#c98500" },
  { name: "HTML", logo: "/logos/html.webp", pct: 4.3, color: "#d95926" },
  { name: "JavaScript", logo: "/logos/javascript.webp", pct: 3.8, color: "#9085e9" },
  { name: "CSS", logo: "/logos/css.webp", pct: 2.3, color: "#199e70" },
  { name: "Outras", logo: "", pct: 3.1, color: "#8a8984" },
];

// Próximas linguagens. Para usar logo: coloque o PNG em /public/logos/ e preencha `logo`.
export const learningNext = [
  {
    name: "Rust",
    logo: "/logos/rust.webp",
    why: "Performance e segurança de memória para ferramentas e serviços de baixo nível.",
  },
  {
    name: "Go",
    logo: "/logos/go.webp",
    why: "Back-ends concorrentes, simples de manter e rápidos de colocar em produção.",
  },
  {
    name: "Ruby",
    logo: "/logos/ruby.webp",
    why: "Produtividade e o ecossistema Rails para construir produtos SaaS com rapidez.",
  },
];

export const education = {
  course: "Bacharelado em Engenharia de Software",
  school: "ICEV · Teresina",
  period: "Fev/2025 — 2028 (previsão)",
  subjects: [
    "POO",
    "Estruturas de Dados",
    "Banco de Dados",
    "Arquitetura e Padrões de Projeto (GoF)",
    "Clean Code",
    "IA e Machine Learning",
    "Estatística",
  ],
};

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário" },
];

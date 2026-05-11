export const translations = {
    pt: {
        metadata: {
            title: "Wylham Lima | Desenvolvedor Fullstack",
            description: "Wylham Lima - Desenvolvedor Fullstack. React, Node.js e TypeScript.",
        },
        nav: {
            links: [
                { label: "Sobre", href: "#sobre" },
                { label: "Experiência", href: "#experiencia" },
                { label: "Projetos", href: "#projetos" },
                { label: "Contato", href: "#contato" },
            ],
            cta: "Fale comigo",
            languageLabel: "Trocar idioma",
            openMenuLabel: "Abrir menu",
            closeMenuLabel: "Fechar menu",
        },
        hero: {
            badge: "< Desenvolvedor Fullstack />",
            subtitlePrefix: "Construo interfaces que as pessoas adoram e sistemas que ",
            subtitleHighlight: "não caem às 3h da manhã.",
            primaryCta: "Ver projetos",
            secondaryCta: "Baixar CV",
            codeFile: "deploy.ts",
            codeLines: [
                { text: "// A função que te salva às 3h da manhã", color: "text-[#6B7280]" },
                { text: "async function deployWithConfidence(", color: "text-[#F0F0F0]" },
                { text: "  config: DeployConfig", color: "text-[#3B82F6]" },
                { text: "): Promise<Success> {", color: "text-[#F0F0F0]" },
                { text: "", color: "" },
                { text: "  await runTests(config.env)", color: "text-[#F0F0F0]" },
                { text: "  await checkHealth(config.services)", color: "text-[#F0F0F0]" },
                { text: '  await notifyTeam("Todo mundo dormindo?")', color: "text-[#F0F0F0]" },
                { text: "", color: "" },
                { text: '  return { status: "success",', color: "text-[#F0F0F0]" },
                { text: '    message: "Em produção." }', color: "text-[#4ADE80]" },
                { text: "}", color: "text-[#F0F0F0]" },
            ],
            scrollLabel: "scroll",
            scrollAria: "Rolar para baixo",
        },
        about: {
            sectionNumber: "01.",
            title: "Sobre mim",
            intro:
                "Sou desenvolvedor full stack com experiência no desenvolvimento de aplicações web e soluções digitais construídas para funcionar na prática. Ao longo da minha trajetória, participei de diferentes etapas da criação e evolução de produtos em produção, desenvolvendo uma visão mais estratégica sobre estrutura, usabilidade e resolução de problemas. Meu foco é criar experiências ",
            highlight: "claras, funcionais e bem construídas",
            outro: ", unindo técnica, organização e propósito.",
            imageAlt: "Foto de Wylham Lima",
            stats: [
                { value: "+1", label: "Ano de experiência" },
                { value: "+10", label: "Projetos reais" },
                { value: "+20", label: "Soluções em produção" },
            ],
        },
        experience: {
            sectionNumber: "02.",
            title: "Experiência",
            currentLabel: "Atual",
            items: [
                {
                    company: "Onrota Tech",
                    role: "Desenvolvedor Full Stack",
                    period: "ago/2025 - atual",
                    location: "Rio Verde, GO",
                    current: true,
                    bullets: [
                        "Desenvolvi do zero o OnRisk, plataforma de gestão de risco para transportes e logística que substituiu um fluxo operacional fragmentado e reduziu em ~80% o tempo de consulta (125K+ consultas).",
                        "Construí API REST com Node.js, Express e Prisma, com autenticação via Better Auth em cookies httpOnly, autorização granular por roles, memberships, permissions e clients, e trilha de auditoria.",
                        "Estruturei o front-end em React e TypeScript com dashboards, filtros e componentes reutilizáveis, padronizando a base da aplicação.",
                    ],
                    stack: ["React", "TypeScript", "Node.js", "Prisma", "MongoDB", "Redis"],
                },
                {
                    company: "BRdata Tecnologia Ltda.",
                    role: "Analista de Suporte",
                    period: "abr/2025 - ago/2025",
                    location: "Rio Verde, GO",
                    bullets: [
                        "Sustentei o ERP da empresa monitorando servidores cloud com Prometheus e atuando sobre alertas críticos de disponibilidade.",
                        "Atuei em suporte N1/N2 com diagnóstico de incidentes, análise de logs e investigação de inconsistências em SQL Server.",
                    ],
                    stack: ["SQL Server", "Prometheus", "Linux", "Cloud"],
                },
                {
                    company: "Centro Universitário Unibras",
                    role: "Analista de T.I.",
                    period: "mai/2024 - abr/2025",
                    location: "Rio Verde, GO",
                    bullets: [
                        "Gerenciei a infraestrutura de TI: rede, equipamentos (roteadores, switches, firewalls) e suporte direto ao usuário.",
                        "Implementei rotinas de backup e apoiei rollouts de sistema, garantindo continuidade operacional.",
                    ],
                    stack: ["Infraestrutura", "Rede", "Firewall", "Backup"],
                },
            ],
        },
        projects: {
            sectionNumber: "03.",
            title: "Projetos",
            demoLabel: "Ver demo",
            items: [
                {
                    name: "FlowBoard",
                    description:
                        "Plataforma de gerenciamento de projetos em tempo real com boards Kanban, sprints e analytics de produtividade para equipes remotas.",
                    stack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
                    demo: "https://flowboard.demo",
                    github: "https://github.com/wylham/flowboard",
                },
                {
                    name: "AuthKit",
                    description:
                        "Biblioteca open source de autenticação para Node.js com suporte a OAuth2, JWT, MFA e integração com os principais providers.",
                    stack: ["TypeScript", "Node.js", "Redis", "Prisma"],
                    demo: null,
                    github: "https://github.com/wylham/authkit",
                },
                {
                    name: "PricePulse",
                    description:
                        "SaaS de monitoramento de preços e alertas inteligentes para e-commerce. Rastreia mais de 500 mil produtos diariamente.",
                    stack: ["Next.js", "Python", "Docker", "MongoDB"],
                    demo: "https://pricepulse.app",
                    github: "https://github.com/wylham/pricepulse",
                },
                {
                    name: "DevMetrics",
                    description:
                        "Dashboard de analytics para Git que transforma dados de repositórios em insights acionáveis sobre qualidade de código e velocidade de entrega.",
                    stack: ["React", "TypeScript", "GraphQL", "D3.js"],
                    demo: "https://devmetrics.io",
                    github: "https://github.com/wylham/devmetrics",
                },
            ],
        },
        contact: {
            sectionNumber: "04.",
            title: "Vamos conversar?",
            subtitle: "Aberto a projetos freelance, oportunidades remotas ou só uma boa conversa sobre tecnologia.",
        },
        footer: {
            tagline: "Feito com café e TypeScript.",
            rights: "© 2026 Wylham Lima. Todos os direitos reservados.",
        },
    },
    en: {
        metadata: {
            title: "Wylham Lima | Fullstack Developer",
            description: "Wylham Lima - Fullstack Developer. React, Node.js, and TypeScript.",
        },
        nav: {
            links: [
                { label: "About", href: "#sobre" },
                { label: "Experience", href: "#experiencia" },
                { label: "Projects", href: "#projetos" },
                { label: "Contact", href: "#contato" },
            ],
            cta: "Contact me",
            languageLabel: "Switch language",
            openMenuLabel: "Open menu",
            closeMenuLabel: "Close menu",
        },
        hero: {
            badge: "< Fullstack Developer />",
            subtitlePrefix: "I build interfaces people love and systems that ",
            subtitleHighlight: "do not fail at 3 AM.",
            primaryCta: "View projects",
            secondaryCta: "Download resume",
            codeFile: "deploy.ts",
            codeLines: [
                { text: "// The function that saves you at 3 AM", color: "text-[#6B7280]" },
                { text: "async function deployWithConfidence(", color: "text-[#F0F0F0]" },
                { text: "  config: DeployConfig", color: "text-[#3B82F6]" },
                { text: "): Promise<Success> {", color: "text-[#F0F0F0]" },
                { text: "", color: "" },
                { text: "  await runTests(config.env)", color: "text-[#F0F0F0]" },
                { text: "  await checkHealth(config.services)", color: "text-[#F0F0F0]" },
                { text: '  await notifyTeam("Is everyone asleep?")', color: "text-[#F0F0F0]" },
                { text: "", color: "" },
                { text: '  return { status: "success",', color: "text-[#F0F0F0]" },
                { text: '    message: "In production." }', color: "text-[#4ADE80]" },
                { text: "}", color: "text-[#F0F0F0]" },
            ],
            scrollLabel: "scroll",
            scrollAria: "Scroll down",
        },
        about: {
            sectionNumber: "01.",
            title: "About me",
            intro:
                "I am a full stack developer with experience building web applications and digital solutions designed to work in real-world environments. Throughout my journey, I have contributed across different stages of building and evolving production products, which helped me develop a more strategic view of structure, usability, and problem solving. My focus is creating experiences that are ",
            highlight: "clear, functional, and well crafted",
            outro: ", combining technical depth, organization, and purpose.",
            imageAlt: "Portrait of Wylham Lima",
            stats: [
                { value: "+1", label: "Year of experience" },
                { value: "+10", label: "Real projects" },
                { value: "+20", label: "Production solutions" },
            ],
        },
        experience: {
            sectionNumber: "02.",
            title: "Experience",
            currentLabel: "Current",
            items: [
                {
                    company: "Onrota Tech",
                    role: "Full Stack Developer",
                    period: "Aug/2025 - Present",
                    location: "Rio Verde, GO",
                    current: true,
                    bullets: [
                        "Built OnRisk from scratch, a risk management platform for transportation and logistics that replaced a fragmented operational flow and cut lookup time by ~80% (125K+ queries).",
                        "Built a REST API with Node.js, Express, and Prisma, with authentication via Better Auth on httpOnly cookies, granular authorization across roles, memberships, permissions, and clients, and an audit trail.",
                        "Structured the React/TypeScript front end with dashboards, filters, and reusable components, standardizing the app foundation.",
                    ],
                    stack: ["React", "TypeScript", "Node.js", "Prisma", "MongoDB", "Redis"],
                },
                {
                    company: "BRdata Tecnologia Ltda.",
                    role: "Support Analyst",
                    period: "Apr/2025 - Aug/2025",
                    location: "Rio Verde, GO",
                    bullets: [
                        "Sustained the company's ERP by monitoring cloud servers with Prometheus and acting on critical availability alerts.",
                        "Handled N1/N2 support with incident diagnosis, log analysis, and investigation of inconsistencies in SQL Server.",
                    ],
                    stack: ["SQL Server", "Prometheus", "Linux", "Cloud"],
                },
                {
                    company: "Centro Universitário Unibras",
                    role: "IT Analyst",
                    period: "May/2024 - Apr/2025",
                    location: "Rio Verde, GO",
                    bullets: [
                        "Managed IT infrastructure: network, equipment (routers, switches, firewalls), and direct end-user support.",
                        "Implemented backup routines and supported system rollouts, ensuring operational continuity.",
                    ],
                    stack: ["Infrastructure", "Networking", "Firewall", "Backup"],
                },
            ],
        },
        projects: {
            sectionNumber: "03.",
            title: "Projects",
            demoLabel: "Live demo",
            items: [
                {
                    name: "FlowBoard",
                    description:
                        "Real-time project management platform with Kanban boards, sprints, and productivity analytics for remote teams.",
                    stack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
                    demo: "https://flowboard.demo",
                    github: "https://github.com/wylham/flowboard",
                },
                {
                    name: "AuthKit",
                    description:
                        "Open source authentication library for Node.js with support for OAuth2, JWT, MFA, and integration with major providers.",
                    stack: ["TypeScript", "Node.js", "Redis", "Prisma"],
                    demo: null,
                    github: "https://github.com/wylham/authkit",
                },
                {
                    name: "PricePulse",
                    description:
                        "Price monitoring SaaS with smart alerts for e-commerce. Tracks more than 500 thousand products every day.",
                    stack: ["Next.js", "Python", "Docker", "MongoDB"],
                    demo: "https://pricepulse.app",
                    github: "https://github.com/wylham/pricepulse",
                },
                {
                    name: "DevMetrics",
                    description:
                        "Git analytics dashboard that turns repository data into actionable insights about code quality and delivery speed.",
                    stack: ["React", "TypeScript", "GraphQL", "D3.js"],
                    demo: "https://devmetrics.io",
                    github: "https://github.com/wylham/devmetrics",
                },
            ],
        },
        contact: {
            sectionNumber: "04.",
            title: "Let's talk?",
            subtitle: "Open to freelance projects, remote opportunities, or just a good conversation about technology.",
        },
        footer: {
            tagline: "Built with coffee and TypeScript.",
            rights: "© 2026 Wylham Lima. All rights reserved.",
        },
    },
};

export const defaultLanguage = "pt";

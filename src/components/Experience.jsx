import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "Onrota Tech",
    role: "Desenvolvedor Full Stack",
    period: "ago/2025 — atual",
    type: "Rio Verde, GO, Brasil",
    bullets: [
      "Contribuí para substituir um fluxo operacional fragmentado por uma experiência centralizada em uma única plataforma, reduzindo em cerca de 80% o tempo de consulta.",
      "Atuei como Desenvolvedor Full Stack na evolução do OnRisk, plataforma de gestão de risco para transportes e logística com mais de 70 mil consultas.",
      "Implementei e mantive API REST com Node.js, Express e Prisma, incluindo autenticação com JWT, autorização por perfil (RBAC), trilha de auditoria e integrações externas (CNH, CRLV, ANTT, Placa, Processos e Referências).",
      "Estruturei o front-end com React e TypeScript (dashboards, filtros, paginação e componentes reutilizáveis), melhorando a consistência e a manutenção da aplicação.",
      "Utilizei MongoDB Atlas e Redis (Upstash) para persistência e cache, com foco em tempo de resposta e estabilidade da plataforma.",
      "Apoiei infraestrutura e deploy em VPS Ubuntu (Nginx, SSL, PM2 e GitHub Actions), fortalecendo a estabilidade do ambiente e a padronização das entregas.",
      "Trabalhei com metodologias ágeis (Scrum e Kanban), utilizando Jira e Trello para organização de demandas, priorização e acompanhamento de entregas.",
    ],
  },
  {
    company: "BRdata Tecnologia Ltda.",
    role: "Analista de Suporte",
    period: "abr/2025 — ago/2025",
    type: "Rio Verde, GO, Brasil",
    bullets: [
      "Atuei na sustentação do ERP da empresa, com foco em administração de servidores em nuvem, suporte técnico e continuidade operacional.",
      "Administrei servidores em nuvem, realizando monitoramento e alertas dos provedores com Prometheus para apoiar disponibilidade, estabilidade e performance do sistema.",
      "Realizei suporte N1/N2 com diagnóstico e tratamento de incidentes, análise de logs e validação de rotinas e cadastros.",
      "Apoiei troubleshooting e investigação de inconsistências com Microsoft SQL Server, realizando consultas e validações em banco de dados.",
      "Contribuí para a continuidade operacional do ambiente por meio da resolução de problemas técnicos e suporte às rotinas críticas do sistema.",
    ],
  },
  {
    company: "Centro Universitário Unibras",
    role: "Analista de T.I.",
    period: "mai/2024 — abr/2025",
    type: "Rio Verde, GO, Brasil",
    bullets: [
      "Gestão e manutenção da infraestrutura de TI e suporte técnico a usuários.",
      "Monitoramento de rede e administração de equipamentos (roteadores, switches e firewalls).",
      "Rotinas de backup e apoio na implantação de sistemas, garantindo continuidade operacional.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.12}s`;
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiencia" ref={sectionRef} className="py-24 md:py-32 bg-black-card">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0F0F0] mt-1 tracking-tight">
            Experiência
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, rgba(37,99,235,0.6), rgba(37,99,235,0.05))",
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="reveal relative md:pl-10 group">
                {/* Timeline dot */}
                <div
                  className="absolute left-[-5px] top-5 hidden md:block w-[10px] h-[10px]
                    rounded-full bg-primary border-2 border-dark-card z-10
                    group-hover:scale-125 transition-transform duration-300"
                />

                {/* Card */}
                <div
                  className="p-6 bg-dark-elevated rounded-xl border transition-all duration-300
                    hover:border-white/10 hover:bg-white/[0.02]
                    group-hover:translate-x-1"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-[#F0F0F0]">{exp.role}</h3>
                      <p className="font-body text-primary text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="font-mono text-xs text-[#6B7280]">{exp.period}</span>
                      <span className="font-mono text-xs text-[#6B7280] opacity-60">{exp.type}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                        <span className="font-body text-sm text-[#6B7280] leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

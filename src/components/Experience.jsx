import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "NovaTech Solutions",
    role: "Desenvolvedor Fullstack Sênior",
    period: "Jan 2023 — Presente",
    type: "Remoto",
    bullets: [
      "Liderou a migração de uma aplicação monolítica para microserviços, reduzindo o tempo de deploy em 60%.",
      "Construiu APIs REST e GraphQL em Node.js consumidas por mais de 50 mil usuários ativos.",
      "Implementou sistema de autenticação com OAuth2 e RBAC para plataforma SaaS B2B.",
      "Mentorou 3 desenvolvedores júnior, conduzindo code reviews e pair programming semanais.",
    ],
  },
  {
    company: "Ignite Digital",
    role: "Desenvolvedor Frontend",
    period: "Mar 2022 — Dez 2022",
    type: "Híbrido · São Paulo",
    bullets: [
      "Desenvolveu interfaces em React com foco em performance e acessibilidade (WCAG 2.1).",
      "Reduziu o bundle size em 40% através de lazy loading e code splitting.",
      "Integrou design system próprio da empresa com Storybook e Figma tokens.",
    ],
  },
  {
    company: "Freelance",
    role: "Desenvolvedor Web",
    period: "Jun 2021 — Mar 2022",
    type: "Remoto",
    bullets: [
      "Desenvolveu e entregou mais de 8 projetos para clientes do Brasil e Europa.",
      "Stack principal: React, Next.js, Node.js, MongoDB e Tailwind CSS.",
      "Gerenciou comunicação direta com stakeholders, levantamento de requisitos e prazos.",
    ],
  },
  {
    company: "CodeLab Academy",
    role: "Estagiário de Desenvolvimento",
    period: "Jan 2021 — Jun 2021",
    type: "Presencial · Belo Horizonte",
    bullets: [
      "Contribuiu para plataforma de ensino online com React e Firebase.",
      "Implementou funcionalidades de gamificação e sistema de progresso de cursos.",
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
                    group-hover:shadow-glow-blue-sm transition-shadow duration-300"
                />

                {/* Card */}
                <div
                  className="p-6 bg-dark-elevated rounded-xl border transition-all duration-300
                    group-hover:border-primary/30 group-hover:shadow-glow-blue-sm
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

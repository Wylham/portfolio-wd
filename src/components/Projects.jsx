import { useEffect, useRef } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
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
      "Biblioteca open-source de autenticação para Node.js com suporte a OAuth2, JWT, MFA e integração com os principais providers.",
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
      "Dashboard de git analytics que transforma dados de repositórios em insights acionáveis sobre qualidade de código e velocidade de entrega.",
    stack: ["React", "TypeScript", "GraphQL", "D3.js"],
    demo: "https://devmetrics.io",
    github: "https://github.com/wylham/devmetrics",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.1}s`;
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
    <section id="projetos" ref={sectionRef} className="py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0F0F0] mt-1 tracking-tight">Projetos</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="reveal group relative bg-dark-card border rounded-xl overflow-hidden
                transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue
                flex flex-col"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              {/* Preview area */}
              <div
                className="relative h-44 bg-dark-elevated flex items-center justify-center
                  overflow-hidden transition-all duration-300"
              >
                <div
                  className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-50"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.3) 0%, transparent 70%)`,
                  }}
                />
                <Code2
                  size={40}
                  className="text-primary/30 group-hover:text-primary/50 transition-colors duration-300
                    group-hover:scale-110 transform"
                />
                {/* Hover border accent */}
                <div
                  className="absolute inset-0 border rounded-t-xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300"
                  style={{ borderColor: "rgba(37,99,235,0.3)" }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="font-display font-semibold text-xl text-[#F0F0F0] tracking-tight">{project.name}</h3>
                <p className="font-body text-sm text-[#6B7280] leading-relaxed line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-1 bg-dark-elevated rounded-md
                        text-[#6B7280] border"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-1">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-primary
                        hover:text-primary-glow transition-colors"
                    >
                      <ExternalLink size={13} />
                      Ver Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-[#6B7280]
                      hover:text-[#F0F0F0] transition-colors"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Left border accent on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0
                  group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-l-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

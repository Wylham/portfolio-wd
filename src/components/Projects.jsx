import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/csr/ArrowSquareOut";
import { CodeBlockIcon } from "@phosphor-icons/react/dist/csr/CodeBlock";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";

import { useLanguage } from "../i18n/useLanguage";

function CardCover({ src, alt }) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="relative h-44 bg-dark-elevated overflow-hidden transition-all duration-300
        flex items-center justify-center"
    >
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(37,99,235,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(37,99,235,0.08) 0%, transparent 50%)",
        }}
      />
      <CodeBlockIcon
        size={40}
        weight="duotone"
        className="text-[#6B7280] group-hover:text-[#F0F0F0] transition-colors duration-300
          group-hover:scale-110 transform relative z-[1]"
      />
      {src && !errored && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover z-[2]"
        />
      )}
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const { projects } = t;
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
        <div className="reveal mb-16">
          <span className="font-mono text-sm text-primary">{projects.sectionNumber}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0F0F0] mt-1 tracking-tight">
            {projects.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.items.map((project) => (
            <div
              key={project.name}
              className="reveal group relative bg-dark-card border rounded-xl overflow-hidden
                transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.02]
                flex flex-col"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <CardCover src={project.cover} alt={project.name} />

              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="font-display font-semibold text-xl text-[#F0F0F0] tracking-tight">{project.name}</h3>
                <p className="font-body text-sm text-[#6B7280] leading-relaxed line-clamp-2 flex-1">
                  {project.description}
                </p>

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

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                  {project.slug && project.details && (
                    <Link
                      to={`/projetos/${project.slug}`}
                      className="flex items-center gap-1.5 font-mono text-xs text-primary
                        hover:text-primary-glow transition-colors"
                    >
                      {projects.viewMoreLabel}
                      <ArrowRightIcon size={13} weight="bold" />
                    </Link>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-primary
                        hover:text-primary-glow transition-colors"
                    >
                      <ArrowSquareOutIcon size={13} weight="bold" />
                      {projects.demoLabel}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-[#6B7280]
                        hover:text-[#F0F0F0] transition-colors"
                    >
                      <GithubLogoIcon size={13} weight="fill" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

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

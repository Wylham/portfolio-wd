import { useEffect, useRef } from "react";

import { useLanguage } from "../i18n/useLanguage";

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;
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
        <div className="reveal mb-16">
          <span className="font-mono text-sm text-primary">{experience.sectionNumber}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0F0F0] mt-1 tracking-tight">
            {experience.title}
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, rgba(37,99,235,0.6), rgba(37,99,235,0.05))",
            }}
          />

          <div className="flex flex-col gap-8">
            {experience.items.map((item) => (
              <div key={`${item.company}-${item.period}`} className="reveal relative md:pl-10 group">
                <div
                  className="absolute left-[-5px] top-5 hidden md:block w-[10px] h-[10px]
                    rounded-full bg-primary border-2 border-dark-card z-10
                    group-hover:scale-125 transition-transform duration-300"
                />

                <div
                  className="p-6 bg-dark-elevated rounded-xl border transition-all duration-300
                    hover:border-white/10 hover:bg-white/[0.02]
                    group-hover:translate-x-1"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <h3 className="font-display font-semibold text-lg text-[#F0F0F0]">{item.company}</h3>
                    {item.current && (
                      <span
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md
                          bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      >
                        {experience.currentLabel}
                      </span>
                    )}
                  </div>

                  <p className="font-mono text-sm text-[#F0F0F0]/80">{item.role}</p>
                  <p className="font-mono text-xs text-[#6B7280] mt-0.5 mb-4">
                    {item.period}
                    <span className="opacity-50"> · {item.location}</span>
                  </p>

                  <ul className="flex flex-col gap-2 mb-4">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-px bg-[#6B7280]/40 flex-shrink-0" />
                        <span className="font-body text-sm text-[#9CA3AF] leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {item.stack && item.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2 py-1 bg-dark-card rounded-md
                            text-[#6B7280] border"
                          style={{ borderColor: "rgba(255,255,255,0.07)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

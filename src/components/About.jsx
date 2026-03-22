import { useEffect, useRef } from "react";

import profilePic from "../assets/foto.png";
import { useLanguage } from "../i18n/useLanguage";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;
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
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid items-stretch gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 reveal relative flex h-full min-h-[500px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-[#050505] shadow-2xl sm:min-h-[560px] lg:min-h-[700px]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <img
              src={profilePic}
              alt={about.imageAlt}
              className="absolute inset-x-0 -bottom-px h-[calc(100%+1px)] w-full object-contain object-bottom scale-[1.14] sm:scale-100 sm:object-cover sm:object-[center_30%] lg:object-top lg:scale-[1.08]"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center gap-6 pt-1 sm:gap-8 sm:pt-4 lg:gap-8 lg:py-16">
            <div className="reveal">
              <span className="font-mono text-sm text-primary">{about.sectionNumber}</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0F0F0] mt-1 tracking-tight">
                {about.title}
              </h2>
            </div>

            <div className="reveal flex flex-col gap-4">
              <p className="font-body text-[#6B7280] leading-relaxed">
                {about.intro}
                <span className="text-[#F0F0F0]">{about.highlight}</span>
                {about.outro}
              </p>
            </div>

            <div className="reveal flex flex-nowrap gap-0 pt-2">
              {about.stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i !== 0 && <div className="h-8 w-px bg-white/10 mx-5" />}
                  <div>
                    <div className="font-display font-bold text-2xl text-[#F0F0F0]">{stat.value}</div>
                    <div className="font-mono text-xs text-[#6B7280]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

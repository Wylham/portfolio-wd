import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

import profilePic from "../assets/foto.png";

const stats = [
  { value: "+1", label: "Ano de Experiência" },
  { value: "+10", label: "Projetos Reais" },
  { value: "+20", label: "Soluções em produção" },
];

export default function About() {
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* ── Left — Avatar (Aumentado) ── */}
          <div className="lg:col-span-6 reveal relative flex flex-col justify-end w-full h-full min-h-[400px] lg:min-h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img
              src={profilePic}
              alt="Wylham"
              className="absolute inset-0 w-full h-full object-cover object-top scale-[1.15]"
            />
          </div>

          {/* ── Right — Text ── */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-8 py-8 lg:py-16">
            <div className="reveal">
              <span className="font-mono text-sm text-primary">01.</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0F0F0] mt-1 tracking-tight">
                Sobre mim
              </h2>
            </div>

            <div className="reveal flex flex-col gap-4">
              <p className="font-body text-[#6B7280] leading-relaxed">
                Sou desenvolvedor full stack com experiência no desenvolvimento de aplicações web e soluções digitais
                construídas para funcionar na prática. Ao longo da minha trajetória, participei de diferentes etapas da
                criação e evolução de produtos em produção, desenvolvendo uma visão mais estratégica sobre estrutura,
                usabilidade e resolução de problemas. Meu foco é criar experiências{" "}
                <span className="text-[#F0F0F0]">claras, funcionais e bem construídas</span>, unindo técnica,
                organização e propósito.
              </p>
            </div>

            {/* Stats */}
            <div className="reveal flex flex-nowrap gap-0 pt-2">
              {stats.map((stat, i) => (
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

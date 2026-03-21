import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

const stats = [
  { value: "+3", label: "Anos de Experiência" },
  { value: "+20", label: "Projetos Entregues" },
  { value: "+10", label: "Clientes Atendidos" },
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
    <section id="sobre" ref={sectionRef} className="py-24 md:py-32 bg-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left — Avatar ── */}
          <div className="reveal flex justify-center lg:justify-start">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.15) rotate(-3deg)",
                }}
              />
              {/* Avatar placeholder */}
              <div
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl bg-dark-elevated
                  border flex items-center justify-center overflow-hidden"
                style={{
                  borderColor: "rgba(37,99,235,0.35)",
                  transform: "rotate(-2deg)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="text-center pointer-events-none select-none">
                  <div className="font-display font-bold text-6xl text-primary/30">WR</div>
                  <p className="font-mono text-xs text-[#6B7280] mt-1">foto aqui</p>
                </div>
              </div>
              {/* Badge flutuante */}
              <div
                className="absolute -bottom-4 -right-4 flex items-center gap-2 px-3 py-2
                  bg-dark-card border rounded-lg shadow-glow-blue-sm"
                style={{ borderColor: "rgba(37,99,235,0.3)" }}
              >
                <MapPin size={14} className="text-primary" />
                <span className="font-mono text-xs text-[#F0F0F0]">Disponível remotamente</span>
              </div>
            </div>
          </div>

          {/* ── Right — Text ── */}
          <div className="flex flex-col gap-6">
            <div className="reveal">
              <span className="font-mono text-sm text-primary">01.</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0F0F0] mt-1 tracking-tight">
                Sobre mim
              </h2>
            </div>

            <div className="reveal flex flex-col gap-4">
              <p className="font-body text-[#6B7280] leading-relaxed">
                Sou desenvolvedor fullstack com mais de 3 anos de experiência construindo produtos digitais do zero —
                desde o design de banco de dados até a última interação do usuário na tela.
              </p>
              <p className="font-body text-[#6B7280] leading-relaxed">
                Me especializo em <span className="text-[#F0F0F0]">React, Node.js e TypeScript</span>, com forte foco em
                performance, escalabilidade e experiência do usuário. Gosto de código limpo, arquitetura sólida e de
                entregar antes do prazo.
              </p>
              <p className="font-body text-[#6B7280] leading-relaxed">
                Minha abordagem é simples: entender o problema real antes de escrever a primeira linha de código. O
                resto é engenharia.
              </p>
            </div>

            {/* Availability tag */}
            <div
              className="reveal inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-lg
              bg-primary/10 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-sm text-primary">Aberto a oportunidades remotas</span>
            </div>

            {/* Stats */}
            <div className="reveal flex flex-wrap gap-0 pt-2">
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

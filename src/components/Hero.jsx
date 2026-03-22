import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";

import { useLanguage } from "../i18n/useLanguage";

const techStack = [
  { name: "Node.js", src: "/logos/node-js-svgrepo-com.svg" },
  { name: "TypeScript", src: "/logos/typescript-svgrepo-com.svg" },
  { name: "React", src: "/logos/react-svgrepo-com.svg" },
  { name: "Tailwind CSS", src: "/logos/tailwind-svgrepo-com.svg" },
  { name: "PostgreSQL", src: "/logos/postgresql-svgrepo-com.svg" },
  { name: "MongoDB", src: "/logos/mongodb-svgrepo-com.svg" },
  { name: "AWS", src: "/logos/awsicon.svg" },
];

function HeroCodeCard({ hero, compact = false, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border bg-dark-card transition-colors duration-300 hover:border-white/20 ${className}`}
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div
        className={`flex items-center gap-2 border-b bg-dark-elevated ${compact ? "px-3 py-2.5" : "px-4 py-3"}`}
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-[#6B7280]">{hero.codeFile}</span>
      </div>

      <div className={`font-mono ${compact ? "p-4 text-[13px] leading-6" : "p-5 text-sm leading-7"}`}>
        {hero.codeLines.map((line, i) => (
          <div key={i} className={line.color || "h-4"}>
            {line.text && (
              <>
                <span className={`select-none text-[#6B7280] opacity-40 ${compact ? "mr-3 text-[11px]" : "mr-4 text-xs"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={line.color}>{line.text}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const { hero } = t;

  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[100svh] items-start overflow-hidden bg-black-card lg:items-center">
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(37,99,235,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-24 sm:pb-16 md:px-12 lg:px-24 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col items-center gap-5 text-center sm:gap-6 lg:items-start lg:gap-7 lg:text-left">
            <div
              className="inline-flex w-fit max-w-full items-center gap-2 px-3 py-1.5 rounded-lg
              bg-dark-elevated border border-white/10 overflow-hidden"
            >
              <span className="typing-text font-mono text-xs sm:text-sm text-primary whitespace-nowrap">
                {hero.badge}
              </span>
            </div>

            <div className="reveal visible">
              <h1
                className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight
                text-[#F0F0F0] tracking-tight"
              >
                <span className="inline sm:block">Wylham </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
                  Lima
                </span>
              </h1>
            </div>

            <div className="w-full max-w-[340px] lg:hidden">
              <HeroCodeCard hero={hero} compact className="max-w-[340px]" />
            </div>

            <p className="max-w-md font-body text-base leading-relaxed text-[#6B7280] sm:text-lg">
              {hero.subtitlePrefix}
              <span className="text-[#F0F0F0]">{hero.subtitleHighlight}</span>
            </p>

            <div className="grid w-full max-w-md grid-cols-2 gap-3">
              <button
                onClick={scrollToProjects}
                className="flex min-h-[52px] w-full items-center justify-center rounded-lg bg-primary px-5 py-3
                  text-center font-body font-medium text-white transition-all duration-200
                  hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
              >
                {hero.primaryCta}
              </button>
              <a
                href="/cv.pdf"
                download
                className="flex min-h-[52px] w-full items-center justify-center rounded-lg border border-white/20
                  px-5 py-3 text-center font-body font-medium text-[#F0F0F0] transition-all duration-200
                  hover:border-white/40 hover:bg-white/5"
              >
                {hero.secondaryCta}
              </a>
            </div>

            <div className="flex max-w-md flex-wrap items-center justify-center gap-x-4 gap-y-3 pt-1 sm:gap-5 sm:pt-2 lg:justify-start">
              {techStack.map((tech) => (
                <div key={tech.name} className="relative group">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-7 h-7 object-contain opacity-100
                      transition-all duration-200 hover:scale-110"
                  />
                  <span
                    className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2
                      font-mono text-[10px] text-[#F0F0F0] bg-dark-elevated border px-1.5 py-0.5
                      rounded whitespace-nowrap opacity-0 group-hover:opacity-100
                      transition-opacity duration-150"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col items-center gap-1 self-center pt-2 lg:hidden">
              <span className="font-mono text-xs text-[#6B7280]">{hero.scrollLabel}</span>
              <button
                onClick={scrollToBottom}
                className="text-[#6B7280] transition-colors hover:text-primary animate-bounce-slow"
                aria-label={hero.scrollAria}
              >
                <CaretDownIcon size={20} weight="bold" />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-float">
            <HeroCodeCard hero={hero} />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 lg:flex">
          <span className="font-mono text-xs text-[#6B7280]">{hero.scrollLabel}</span>
          <button
            onClick={scrollToBottom}
            className="text-[#6B7280] hover:text-primary transition-colors animate-bounce-slow"
            aria-label={hero.scrollAria}
          >
            <CaretDownIcon size={20} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}

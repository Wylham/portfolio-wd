import { ChevronDown } from "lucide-react";

const techStack = [
  { name: "Node.js", src: "/logos/node-js-svgrepo-com.svg" },
  { name: "TypeScript", src: "/logos/typescript-svgrepo-com.svg" },
  { name: "React", src: "/logos/react-svgrepo-com.svg" },
  { name: "Tailwind CSS", src: "/logos/tailwind-svgrepo-com.svg" },
  { name: "PostgreSQL", src: "/logos/postgresql-svgrepo-com.svg" },
  { name: "MongoDB", src: "/logos/mongodb-svgrepo-com.svg" },
  { name: "AWS", src: "/logos/awsicon.svg" },
];

const codeLines = [
  { text: "// A função que te salva às 3h da manhã", color: "text-[#6B7280]" },
  { text: "async function deployWithConfidence(", color: "text-[#F0F0F0]" },
  { text: "  config: DeployConfig", color: "text-[#3B82F6]" },
  { text: "): Promise<Success> {", color: "text-[#F0F0F0]" },
  { text: "", color: "" },
  { text: "  await runTests(config.env)", color: "text-[#F0F0F0]" },
  { text: "  await checkHealth(config.services)", color: "text-[#F0F0F0]" },
  { text: '  await notifyTeam("Todos dormindo? 👀")', color: "text-[#F0F0F0]" },
  { text: "", color: "" },
  { text: '  return { status: "success",', color: "text-[#F0F0F0]" },
  { text: '    message: "🚀 Em produção." }', color: "text-[#4ADE80]" },
  { text: "}", color: "text-[#F0F0F0]" },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black-card">
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(37,99,235,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <div
              className="inline-flex w-fit max-w-full items-center gap-2 px-3 py-1.5 rounded-lg
              bg-dark-elevated border border-white/10 overflow-hidden"
            >
              <span className="typing-text font-mono text-xs sm:text-sm text-primary whitespace-nowrap">
                &lt; Fullstack Developer /&gt;
              </span>
            </div>

            {/* H1 */}
            <div className="reveal visible">
              <h1
                className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight
                text-[#F0F0F0] tracking-tight"
              >
                Wylham
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
                  Lima
                </span>
              </h1>
            </div>

            {/* Subtítulo */}
            <p className="font-body text-[#6B7280] text-lg leading-relaxed max-w-md">
              Construo interfaces que as pessoas adoram e sistemas que{" "}
              <span className="text-[#F0F0F0]">não caem às 3h da manhã.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-primary hover:bg-primary-hover font-body font-medium text-white
                  rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Ver Projetos
              </button>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 border border-white/20 hover:border-white/40 font-body font-medium
                  text-[#F0F0F0] rounded-lg transition-all duration-200 hover:bg-white/5"
              >
                Download CV
              </a>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              {techStack.map((tech) => (
                <div key={tech.name} className="relative group">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-7 h-7 object-contain opacity-100
                      transition-all duration-200 hover:scale-110"
                  />
                  {/* Tooltip */}
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
          </div>

          {/* ── Right Column — Code Card ── */}
          <div className="relative hidden lg:block animate-float">
            <div
              className="relative bg-dark-card border rounded-xl overflow-hidden transition-colors duration-300 hover:border-white/20"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              {/* Window header */}
              <div
                className="flex items-center gap-2 px-4 py-3 bg-dark-elevated border-b"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="font-mono text-xs text-[#6B7280] ml-3">deploy.ts</span>
              </div>

              {/* Code body */}
              <div className="p-5 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <div key={i} className={line.color || "h-4"}>
                    {line.text && (
                      <>
                        <span className="text-[#6B7280] select-none mr-4 text-xs opacity-40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className={line.color}>{line.text}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="font-mono text-xs text-[#6B7280]">scroll</span>
          <button
            onClick={scrollToBottom}
            className="text-[#6B7280] hover:text-primary transition-colors animate-bounce-slow"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

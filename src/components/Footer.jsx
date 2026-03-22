import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/username", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/username", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/username", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      {/* Decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(37,99,235,0.4), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center select-none">
            <img
              src="/logos/LogoWhiteWDEV.webp"
              alt="WDEV Logo"
              className="h-6 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Tagline */}
          <p className="font-mono text-sm text-[#6B7280] text-center">
            Feito com café e TypeScript.{" "}
            <span className="text-[#F0F0F0]/30">© 2026 Wylham Lima. Todos os direitos reservados.</span>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#6B7280] hover:text-primary transition-colors duration-200
                  hover:scale-110 transform"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

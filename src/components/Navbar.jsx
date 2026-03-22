import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // active link detection
      const sections = ["sobre", "experiencia", "projetos", "contato"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-black/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : "bg-transparent"}`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center select-none"
        >
          <img src="/logos/LogoWhiteWDEV.webp" alt="WDEV Logo" className="h-6 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <li key={id}>
                <button
                  onClick={() => handleNav(href)}
                  className={`font-body text-sm transition-colors duration-200 relative group
                    ${active === id ? "text-[#F0F0F0]" : "text-[#6B7280] hover:text-[#F0F0F0]"}`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300
                      ${active === id ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </button>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => handleNav("#contato")}
              className="ml-2 px-4 py-1.5 text-sm font-body border border-primary/60 text-primary rounded-lg
                hover:bg-primary/10 hover:border-primary transition-all duration-200"
            >
              Fale comigo
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#6B7280] hover:text-[#F0F0F0] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col bg-dark/98 backdrop-blur-md border-t border-white/5 px-6 py-4 gap-4">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className="text-[#6B7280] hover:text-[#F0F0F0] font-body text-sm transition-colors w-full text-left"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav("#contato")}
              className="w-full text-left px-4 py-2 text-sm font-body border border-primary/60 text-primary
                rounded-lg hover:bg-primary/10 transition-all duration-200"
            >
              Fale comigo
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

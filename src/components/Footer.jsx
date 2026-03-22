import { useLanguage } from "../i18n/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  const { footer } = t;

  return (
    <footer className="relative bg-dark border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(37,99,235,0.4), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center select-none">
            <img
              src="/logos/LogoWhiteWDEV.webp"
              alt="WDEV Logo"
              className="h-6 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>

          <p className="font-mono text-sm text-[#6B7280] text-center">
            {footer.tagline} <span className="text-[#F0F0F0]/30">{footer.rights}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

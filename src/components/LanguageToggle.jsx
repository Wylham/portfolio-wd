import { GlobeHemisphereWestIcon } from "@phosphor-icons/react/dist/csr/GlobeHemisphereWest";

import { useLanguage } from "../i18n/useLanguage";

export default function LanguageToggle({ className = "" }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.nav.languageLabel}
      title={t.nav.languageLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 font-mono text-xs transition-all duration-200 hover:border-primary/40 hover:bg-white/5 ${className}`}
    >
      <GlobeHemisphereWestIcon size={14} weight="duotone" className="text-primary" />
      <span className={language === "pt" ? "text-[#F0F0F0]" : "text-[#6B7280]"}>PT</span>
      <span className="text-[#6B7280]/60">/</span>
      <span className={language === "en" ? "text-[#F0F0F0]" : "text-[#6B7280]"}>EN</span>
    </button>
  );
}

import { useEffect, useRef } from "react";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/csr/InstagramLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/csr/LinkedinLogo";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/csr/WhatsappLogo";

import { useLanguage } from "../i18n/useLanguage";

const contacts = [
  {
    label: "LinkedIn",
    icon: LinkedinLogoIcon,
    href: "https://linkedin.com/in/username",
    hint: "/in/username",
  },
  {
    label: "GitHub",
    icon: GithubLogoIcon,
    href: "https://github.com/username",
    hint: "@username",
  },
  {
    label: "Instagram",
    icon: InstagramLogoIcon,
    href: "https://instagram.com/username",
    hint: "@username",
  },
  {
    label: "WhatsApp",
    icon: WhatsappLogoIcon,
    href: "https://wa.me/5500000000000",
    hint: "+55 (00) 00000-0000",
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const { contact } = t;
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
    <section id="contato" ref={sectionRef} className="py-24 md:py-32 bg-black-card">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="reveal mb-4">
          <span className="font-mono text-sm text-primary">{contact.sectionNumber}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0F0F0] mt-1 tracking-tight">
            {contact.title}
          </h2>
        </div>

        <p className="reveal font-body text-[#6B7280] text-lg max-w-xl mb-14 leading-relaxed">{contact.subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contacts.map((contactItem) => {
            const ContactIcon = contactItem.icon;

            return (
              <a
                key={contactItem.label}
                href={contactItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group flex flex-col items-center gap-3 p-4 sm:p-6 md:p-8
                  bg-dark-elevated border rounded-xl transition-all duration-300
                  hover:border-white/20 hover:bg-white/[0.02] hover:-translate-y-1"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center
                    bg-dark-card border transition-all duration-300
                    group-hover:bg-white/5 group-hover:border-white/10
                    group-hover:scale-110"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <ContactIcon
                    size={22}
                    weight={contactItem.label === "GitHub" ? "fill" : "regular"}
                    className="text-[#6B7280] group-hover:text-[#F0F0F0] transition-colors duration-300"
                  />
                </div>

                <div className="text-center">
                  <div className="font-display font-semibold text-[#F0F0F0] text-sm group-hover:text-white">
                    {contactItem.label}
                  </div>
                  <div
                    className="font-mono text-xs text-[#6B7280] mt-1 group-hover:text-[#9CA3AF]
                    transition-colors duration-300"
                  >
                    {contactItem.hint}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

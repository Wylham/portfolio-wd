import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/csr/ArrowLeft";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/csr/ArrowSquareOut";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { LockKeyIcon } from "@phosphor-icons/react/dist/csr/LockKey";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { ImageSquareIcon } from "@phosphor-icons/react/dist/csr/ImageSquare";

import { useLanguage } from "../i18n/useLanguage";

function MediaFrame({ src, alt, className = "", aspect = "aspect-video", showChrome = true }) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-xl border bg-dark-card
        shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] ${className}`}
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      {showChrome && (
        <div
          className="absolute top-0 left-0 right-0 z-[3] h-8 flex items-center gap-1.5 px-3 border-b
            bg-dark-elevated/80 backdrop-blur-sm"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
        </div>
      )}

      <div className={`absolute inset-0 ${showChrome ? "pt-8" : ""} bg-dark-elevated`}>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(37,99,235,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(37,99,235,0.06) 0%, transparent 55%)",
          }}
        >
          <ImageSquareIcon size={40} weight="duotone" className="text-[#6B7280]/60" />
        </div>
        {src && !errored && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setErrored(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const { projects } = t;

  const project = projects.items.find((item) => item.slug === slug);

  if (!project || !project.details) {
    return <Navigate to="/" replace />;
  }

  const { details } = project;

  return (
    <article className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-dark overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <Link
          to="/#projetos"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#6B7280]
            hover:text-[#F0F0F0] transition-colors group"
        >
          <ArrowLeftIcon
            size={14}
            weight="bold"
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          {projects.backLabel}
        </Link>

        <header className="mt-12 md:mt-16 grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-20 items-end">
          <div className="space-y-6">
            <span className="font-mono text-xs text-primary tracking-wider">
              {projects.sectionNumber} / {projects.featuredLabel}
            </span>

            <h1 className="font-display font-semibold text-6xl sm:text-7xl lg:text-[88px] xl:text-[104px]
              leading-[0.98] text-[#F0F0F0] tracking-[-0.03em]">
              {project.name}
            </h1>
          </div>

          <div className="space-y-6 lg:pb-3 lg:text-right">
            <p className="font-body text-base md:text-lg text-[#9CA3AF] leading-relaxed lg:ml-auto max-w-md">
              {details.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium
                    px-6 py-3 rounded-full bg-primary text-white
                    hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200
                    shadow-[0_12px_32px_-12px_rgba(37,99,235,0.7)]"
                >
                  {projects.demoLabel}
                  <ArrowSquareOutIcon size={15} weight="bold" />
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 font-body text-sm
                    px-6 py-3 rounded-full bg-white/[0.04] text-[#9CA3AF] border"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <LockKeyIcon size={14} weight="duotone" />
                  {projects.privateLabel}
                </span>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm
                    px-6 py-3 rounded-full border text-[#F0F0F0]
                    hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                >
                  <GithubLogoIcon size={15} weight="fill" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </header>

        <section className="relative mt-16 md:mt-24">
          <div
            className="pointer-events-none absolute -inset-x-12 inset-y-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(37,99,235,0.16) 0%, transparent 65%)",
            }}
          />

          <div className="relative mx-auto max-w-5xl">
            <div
              className="relative transition-transform duration-700 ease-out
                lg:[transform:perspective(1600px)_rotateX(6deg)_rotateY(-4deg)]
                lg:hover:[transform:perspective(1600px)_rotateX(3deg)_rotateY(-2deg)]
                [transform-style:preserve-3d]"
            >
              <MediaFrame src={project.cover} alt={project.name} aspect="aspect-[16/9]" />
              <div
                className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 h-24 w-3/4
                  rounded-full blur-3xl"
                style={{ background: "rgba(37,99,235,0.25)" }}
              />
            </div>

            {details.floatingTags && details.floatingTags.length >= 3 && (
              <>
                <div
                  className="hidden md:flex absolute -top-4 -left-6 lg:-left-10 z-10
                    items-center gap-2 px-4 py-2 rounded-full bg-dark-card/90 backdrop-blur-md border
                    shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)]
                    animate-fade-in-up"
                  style={{ borderColor: "rgba(255,255,255,0.10)", animationDelay: "0.2s" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-body text-sm text-[#F0F0F0]">{details.floatingTags[0]}</span>
                </div>

                <div
                  className="hidden md:flex absolute top-1/2 -right-4 lg:-right-10 -translate-y-1/2 z-10
                    items-center gap-2 px-4 py-2 rounded-full bg-dark-card/90 backdrop-blur-md border
                    shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)]
                    animate-fade-in-up"
                  style={{ borderColor: "rgba(255,255,255,0.10)", animationDelay: "0.35s" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-body text-sm text-[#F0F0F0]">{details.floatingTags[1]}</span>
                </div>

                <div
                  className="hidden md:flex absolute -bottom-6 left-12 lg:left-24 z-10
                    items-center gap-2 px-4 py-2 rounded-full bg-dark-card/90 backdrop-blur-md border
                    shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)]
                    animate-fade-in-up"
                  style={{ borderColor: "rgba(255,255,255,0.10)", animationDelay: "0.5s" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-body text-sm text-[#F0F0F0]">{details.floatingTags[2]}</span>
                </div>
              </>
            )}
          </div>
        </section>

        {details.meta && (
          <section className="mt-20 md:mt-28">
            <dl
              className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden border-y bg-dark-card/40"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              {[
                { key: "role", value: details.meta.role },
                { key: "year", value: details.meta.year },
                { key: "company", value: details.meta.company },
                { key: "status", value: details.meta.status },
              ].map((entry) => (
                <div key={entry.key} className="bg-dark px-4 py-6 md:py-8">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280] mb-2">
                    {projects.detailsLabels[entry.key]}
                  </dt>
                  <dd className="font-display text-base md:text-lg text-[#F0F0F0] tracking-tight">
                    {entry.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {details.metrics && details.metrics.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border
                bg-dark-card/40"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              {details.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="relative bg-dark-card p-6 md:p-8 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="font-display font-bold text-3xl md:text-4xl tracking-tight
                    text-transparent bg-clip-text bg-gradient-to-br from-[#F0F0F0] to-[#9CA3AF]">
                    {metric.value}
                  </div>
                  <div className="font-body text-xs md:text-sm text-[#6B7280] mt-2 leading-relaxed">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-24 md:mt-32">
          <div className="grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">
            <div className="lg:sticky lg:top-28 self-start">
              <span className="font-mono text-xs text-primary">{projects.sectionNumber}</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F0F0F0] mt-1 tracking-tight">
                {projects.detailsLabels.overview}
              </h2>
            </div>

            <div className="space-y-12">
              {details.sections.map((sec, i) => (
                <div key={sec.heading} className="grid sm:grid-cols-[auto_1fr] gap-4 sm:gap-8">
                  <span className="font-mono text-xs text-[#6B7280] pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-xl md:text-2xl text-[#F0F0F0] tracking-tight">
                      {sec.heading}
                    </h3>
                    <p className="font-body text-base text-[#9CA3AF] leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {details.screenshots && details.screenshots.length > 0 && (
          <section className="mt-24 md:mt-32">
            <div className="mb-10 md:mb-12">
              <span className="font-mono text-xs text-primary">04.</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F0F0F0] mt-1 tracking-tight">
                {projects.detailsLabels.screenshots}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {details.screenshots.map((shot) => (
                <figure key={shot.src} className="space-y-3 group">
                  <div className="transition-transform duration-500 group-hover:-translate-y-1">
                    <MediaFrame src={shot.src} alt={shot.caption} />
                  </div>
                  <figcaption className="font-mono text-xs text-[#6B7280] leading-relaxed px-1">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {details.highlights && details.highlights.length > 0 && (
          <section className="mt-24 md:mt-32">
            <div className="grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">
              <div className="lg:sticky lg:top-28 self-start">
                <span className="font-mono text-xs text-primary">05.</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F0F0F0] mt-1 tracking-tight">
                  {projects.detailsLabels.highlights}
                </h2>
              </div>

              <ul className="grid sm:grid-cols-2 gap-4 self-start">
                {details.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 p-4 rounded-xl border bg-dark-card/40
                      hover:bg-dark-card hover:border-white/15 transition-colors"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <CheckCircleIcon size={18} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-[#9CA3AF] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {details.fullStack && details.fullStack.length > 0 && (
          <section className="mt-24 md:mt-32">
            <div className="grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 items-start">
              <div>
                <span className="font-mono text-xs text-primary">06.</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F0F0F0] mt-1 tracking-tight">
                  {projects.detailsLabels.stack}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {details.fullStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-sm px-3.5 py-1.5 rounded-lg bg-dark-card border
                      text-[#9CA3AF] hover:text-[#F0F0F0] hover:border-white/20 transition-colors"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mt-24 md:mt-32">
          <Link
            to="/#projetos"
            className="group flex items-center justify-between gap-6 p-6 md:p-8 rounded-2xl border
              bg-dark-card hover:bg-white/[0.02] hover:border-white/15 transition-all duration-300"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div>
              <span className="font-mono text-xs text-primary">↵</span>
              <h3 className="font-display font-semibold text-xl md:text-2xl text-[#F0F0F0] mt-1 tracking-tight">
                {projects.seeMoreProjectsLabel}
              </h3>
            </div>
            <ArrowRightIcon
              size={22}
              weight="bold"
              className="text-[#6B7280] group-hover:text-primary group-hover:translate-x-1
                transition-all duration-300 shrink-0"
            />
          </Link>
        </section>
      </div>
    </article>
  );
}

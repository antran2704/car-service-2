import { AnimateSection } from "@/shared/components/ui/AnimateSection";
import { PHONE_NUMBER } from "@/shared/constants";
import { getTranslations } from "next-intl/server";

export default async function CTABanner() {
  const t = await getTranslations("cta");

  return (
    <section
      id="cta"
      className="relative py-section overflow-hidden bg-surface-container">
      {/* Luminous radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 luminous-cta"
      />

      <div className="section-container relative z-10 flex flex-col items-center gap-10 text-center">
        <AnimateSection className="flex flex-col items-center gap-5">
          <span className="font-display text-label text-primary uppercase tracking-[0.2em]">
            {t("overline")}
          </span>
          <h2 className="font-display text-h1 text-on-surface max-w-2xl text-balance">
            {t("heading")}
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
            {t("subheading")}
          </p>
        </AnimateSection>

        <AnimateSection delay={0.15} className="w-full max-w-md">
          <a href={"tel:" + PHONE_NUMBER}>
            <button className="btn-action px-6 py-3 text-body-md whitespace-nowrap">
              {t("submit")}
            </button>
          </a>
          <p className="mt-3 font-body text-chip text-on-surface-variant">
            {t("note")}
          </p>
        </AnimateSection>
      </div>
    </section>
  );
}

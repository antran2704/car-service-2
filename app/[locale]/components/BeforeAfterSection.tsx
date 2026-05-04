import { getTranslations } from "next-intl/server";
import { AnimateSection } from "@/shared/components/ui/AnimateSection";
import BeforeAfterSlider from "@/shared/components/ui/BeforeAfterSlider";

export default async function BeforeAfterSection() {
  const t = await getTranslations("slider");

  return (
    <section id="process" className="relative spacing-section">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 luminous-cta opacity-60"
      />

      <div className="section-container flex flex-col gap-14">
        <AnimateSection className="flex flex-col items-center gap-4 text-center">
          <span className="font-display text-label text-primary uppercase tracking-[0.2em]">
            {t("overline")}
          </span>
          <h2 className="font-display text-h2 text-on-surface">
            {t("heading")}
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-lg">
            {t("subheading")}
          </p>
        </AnimateSection>

        <AnimateSection delay={0.15}>
          <BeforeAfterSlider
            className="md:h-[80vh] h-[60vh] max-h-[540px]"
            beforeSrc="/images/before.jpg"
            afterSrc="/images/after.jpg"
            beforeLabel={t("before_label")}
            afterLabel={t("after_label")}
          />
        </AnimateSection>
      </div>
    </section>
  );
}

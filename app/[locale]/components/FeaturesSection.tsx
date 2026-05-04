import { getTranslations } from "next-intl/server";
import {
  AnimateSection,
  StaggerGrid,
  StaggerItem,
} from "@/shared/components/ui/AnimateSection";

export default async function FeaturesSection() {
  const t = await getTranslations("specs");

  // TODO: Optimize this function
  const getSpec = (order: number) => {
    switch (order) {
      case 0:
        return {
          label: t("item0_label"),
          value: t("item0_value"),
          chip: t("item0_chip"),
        };
      case 1:
        return {
          label: t("item1_label"),
          value: t("item1_value"),
          chip: t("item1_chip"),
        };
      case 2:
        return {
          label: t("item2_label"),
          value: t("item2_value"),
          chip: t("item2_chip"),
        };
      case 3:
        return {
          label: t("item3_label"),
          value: t("item3_value"),
          chip: t("item3_chip"),
        };
      case 4:
        return {
          label: t("item4_label"),
          value: t("item4_value"),
          chip: t("item4_chip"),
        };

      default:
        return {};
    }
  };

  return (
    <section id="specs" className="py-section bg-surface-container/40">
      <div className="section-container flex flex-col lg:flex-row lg:gap-16 gap-4 items-start">
        {/* Left — header */}
        <AnimateSection className="lg:w-80 shrink-0 flex flex-col gap-4 lg:sticky lg:top-28">
          <span className="font-display text-label text-primary uppercase tracking-[0.2em]">
            {t("overline")}
          </span>
          <h2 className="font-display text-h2 text-on-surface">
            {t("heading")}
          </h2>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            {t("subheading")}
          </p>
        </AnimateSection>

        {/* Right — specs list */}
        <StaggerGrid className="flex-1 w-full flex flex-col">
          {[0, 1, 2, 3, 4].map((order, i) => {
            const { label, value, chip } = getSpec(order);

            return (
              <StaggerItem key={i}>
                <div className="w-full flex sm:flex-row flex-col sm:items-center justify-between py-5">
                  <span className="font-body text-body-md text-on-surface-variant">
                    {label}
                  </span>
                  <div className="flex sm:flex-row flex-col sm:items-center gap-4">
                    <span className="font-display font-semibold text-body-md text-on-surface">
                      {value}
                    </span>
                    <span className="chip chip-available w-fit">{chip}</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import {
  AnimateSection,
  StaggerGrid,
  StaggerItem,
} from "@/shared/components/ui/AnimateSection";
import { Building2, CarFront, Truck, Wrench } from "lucide-react";

export default async function ServicesSection() {
  const t = await getTranslations("services");

  return (
    <section id="services" className="relative">
      <div className="section-container spacing-section flex flex-col gap-16">
        <AnimateSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-display text-label text-primary uppercase tracking-[0.2em]">
              {t("overline")}
            </span>
            <h2 className="font-display text-h2 text-on-surface">
              {t("heading")}
            </h2>
          </div>
          <p className="font-body text-body-md text-on-surface-variant max-w-md">
            {t("subheading")}
          </p>
        </AnimateSection>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <StaggerItem>
            <article className="glass inner-edge h-full flex flex-col gap-4 p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/20 shrink-0">
                <CarFront className="size-5" />
              </div>
              <h3 className="font-display font-semibold text-h3 text-on-surface">
                {t("card0_title")}
              </h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                {t("card0_desc")}
              </p>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="glass inner-edge h-full flex flex-col gap-4 p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/20 shrink-0">
                <Truck className="size-5" />
              </div>
              <h3 className="font-display font-semibold text-h3 text-on-surface">
                {t("card1_title")}
              </h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                {t("card1_desc")}
              </p>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="glass inner-edge h-full flex flex-col gap-4 p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/20 shrink-0">
                <Wrench className="size-5" />
              </div>
              <h3 className="font-display font-semibold text-h3 text-on-surface">
                {t("card2_title")}
              </h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                {t("card2_desc")}
              </p>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="glass inner-edge h-full flex flex-col gap-4 p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/20 shrink-0">
                <Building2 className="size-5" />
              </div>
              <h3 className="font-display font-semibold text-h3 text-on-surface">
                {t("card3_title")}
              </h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                {t("card3_desc")}
              </p>
            </article>
          </StaggerItem>
        </StaggerGrid>
      </div>
    </section>
  );
}

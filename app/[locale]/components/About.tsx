import { getTranslations } from "next-intl/server";
import {
  StaggerGrid,
  StaggerItem,
} from "@/shared/components/ui/AnimateSection";
import Image from "next/image";

export default async function AboutSection() {
  const t = await getTranslations("about");
  const tMeta = await getTranslations("meta");

  return (
    <section id="about" className="bg-surface-container/40">
      <StaggerGrid className="section-container spacing-section flex flex-col lg:flex-row gap-16 items-start">
        <StaggerItem className="lg:w-1/2 shrink-0 flex flex-col gap-4 lg:sticky lg:top-28">
          <span className="font-display text-label text-primary uppercase tracking-[0.2em]">
            {t("overline")}
          </span>
          <h2 className="font-display text-h2 text-on-surface">
            {t("heading")}
          </h2>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            {t.rich("subheading1", {
              bold: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            {t.rich("subheading2", {
              bold: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            {t("subheading3")}
          </p>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            {t("subheading4")}
          </p>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            {t("subheading5")}
          </p>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            {t("subheading6")}
          </p>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            {t("subheading7")}
          </p>
        </StaggerItem>

        <StaggerItem className="lg:w-1/2 w-full">
          <div className="glass">
            <Image
              src="/images/about.png"
              alt={tMeta("title")}
              title={tMeta("title")}
              width={300}
              height={300}
              className="glass w-full lg:h-[80vh] h-[50vh] max-h-[600px] object-cover"
              loading="lazy"
            />
          </div>
        </StaggerItem>
      </StaggerGrid>
    </section>
  );
}

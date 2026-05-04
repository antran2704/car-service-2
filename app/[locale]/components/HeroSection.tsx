import { getTranslations } from "next-intl/server";
import {
  AnimateSection,
  StaggerGrid,
  StaggerItem,
} from "@/shared/components/ui/AnimateSection";
import Image from "next/image";
import { THeroGalleryItem } from "@/shared/type";
import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
} from "@/shared/components/ui/Carousel";

const GALLERY_IMAGES: THeroGalleryItem[] = [
  {
    src: "/images/banner/banner_1.jpg",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/banner/banner_2.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/banner/banner_3.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/banner/banner_4.png",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/banner/banner_5.png",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/banner/banner_6.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/banner/banner_7.jpg",
    span: "col-span-1 row-span-1",
  },
];

export default async function HeroSection() {
  const t = await getTranslations("hero");
  const tMeta = await getTranslations("meta");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-10 overflow-hidden luminous-hero">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 luminous-hero"
      />

      <div className="section-container spacing-section flex flex-col gap-16 w-full">
        {/* Text block */}
        <AnimateSection className="flex flex-col items-center gap-5 text-center">
          <span className="font-display text-label text-primary uppercase tracking-[0.2em]">
            {t("overline")}
          </span>
          <h1 className="font-display lg:text-display md:text-h1 text-h2 text-on-surface max-w-3xl text-balance">
            {t("heading")}
          </h1>
          <p className="font-body md:text-body-lg text-body-md text-on-surface-variant max-w-xl">
            {t("subheading")}
          </p>
          <div className="flex sm:flex-nowrap flex-wrap items-center gap-4 mt-2">
            <a
              href="#cta"
              className="btn-action px-7 py-3 text-body-md sm:w-fit w-full">
              {t("free_consultation")}
            </a>
            <a
              href="#services"
              className="btn-ghost px-7 py-3 text-body-md sm:w-fit w-full">
              {t("our_services")}
            </a>
          </div>
        </AnimateSection>

        {/* Gallery grid */}
        <StaggerGrid className="md:grid hidden grid-cols-5 grid-rows-2 gap-4 h-[600px]">
          {GALLERY_IMAGES.map((img, i) => (
            <StaggerItem
              key={i}
              className={`relative overflow-hidden rounded-md ${img.span}`}>
              <Image
                src={img.src}
                alt={tMeta("title")}
                title={tMeta("title")}
                width={400}
                height={400}
                className="absolute inset-0 w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              {/* Gradient overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
              />
              {img.label && (
                <div className="absolute bottom-5 left-5">
                  <span className="font-display font-bold text-h3 text-on-surface">
                    {img.label}
                  </span>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Carousel
          className="md:hidden"
          options={{
            slidesToScroll: 1,
            loop: true,
          }}>
          <CarouselContent>
            {GALLERY_IMAGES.map((img, i) => (
              <CarouselItem
                key={i}
                asChild
                className="lg:w-1/4 md:w-2/4 w-full max-h-[400px]">
                <Image
                  src={img.src}
                  alt={tMeta("title")}
                  title={tMeta("title")}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselDotButtons
            classNames={{
              container: "items-center justify-center mt-5",
            }}
          />
        </Carousel>
      </div>
    </section>
  );
}

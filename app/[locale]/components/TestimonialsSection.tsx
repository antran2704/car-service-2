import { getTranslations } from "next-intl/server";
import {
  AnimateSection,
  StaggerGrid,
  StaggerItem,
} from "@/shared/components/ui/AnimateSection";
import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
} from "@/shared/components/ui/Carousel";
import Image from "next/image";

/* Figma MCP avatar assets */
const AVATARS = [
  "/images/feedback/feedback_1.png",
  "/images/feedback/feedback_2.png",
  "/images/feedback/feedback_3.png",
  "/images/feedback/feedback_4.png",
];

export default async function TestimonialsSection() {
  const t = await getTranslations("testimonials");

  const testimonials = [0, 1, 2, 3].map((i) => ({
    quote: t(`t${i}_quote` as any),
    name: t(`t${i}_name` as any),
    vehicle: t(`t${i}_vehicle` as any),
    avatar: AVATARS[i],
  }));

  return (
    <section id="testimonials" className="py-section relative">
      <div className="section-container flex flex-col gap-14">
        {/* Header */}
        <AnimateSection className="flex flex-col items-center gap-4 text-center">
          <span className="font-display text-label text-primary uppercase tracking-[0.2em]">
            {t("overline")}
          </span>
          <h2 className="font-display text-h2 text-on-surface">
            {t("heading")}
          </h2>
        </AnimateSection>

        {/* Crystal Cards grid */}
        <StaggerGrid>
          <Carousel
            options={{
              slidesToScroll: 1,
              loop: true,
              breakpoints: {
                "(min-width: 768px)": {
                  slidesToScroll: 2,
                },
                "(min-width: 1024px)": {
                  slidesToScroll: 3,
                },
              },
            }}>
            <CarouselContent>
              {testimonials.map(({ quote, name, vehicle, avatar }, i) => (
                <CarouselItem
                  key={i}
                  asChild
                  className="lg:w-1/3 md:w-2/4 w-full">
                  <StaggerItem className="h-full">
                    <article className="glass inner-edge h-full flex flex-col gap-6 p-10">
                      {/* Open-quote mark */}
                      <span
                        aria-hidden
                        className="font-display text-[40px] leading-none text-primary select-none">
                        &ldquo;
                      </span>

                      {/* Quote */}
                      <blockquote className="font-body text-body-md text-on-surface leading-relaxed flex-1">
                        {quote}
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-2">
                        <Image
                          width={48}
                          height={48}
                          src={avatar}
                          alt={name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 shrink-0"
                        />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-body font-bold text-body-md text-on-surface">
                            {name}
                          </span>
                          <span className="font-body text-chip text-primary">
                            {vehicle}
                          </span>
                        </div>
                      </div>
                    </article>
                  </StaggerItem>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselDotButtons
              classNames={{
                container: "items-center justify-center mt-5",
              }}
            />
          </Carousel>
        </StaggerGrid>
      </div>
    </section>
  );
}

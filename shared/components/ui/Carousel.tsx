"use client";

import { ComponentPropsWithRef, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
  CarouselContext,
  useDotButton,
  usePrevNextButtons,
} from "@/shared/hooks/Carousel";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Slot } from "radix-ui";

type TPrevNextButtonProp = ComponentPropsWithRef<"button">;

const disablePrevNextButtonClassName =
  "opacity-50 cursor-not-allowed text-on-surface-variant hover:text-on-surface-variant";

const prevNextButtonClassName =
  "size-10 flex items-center justify-center border border-action hover:text-action rounded-full transition duration-200 ease-in-out cursor-pointer";

export const CarouselPrevious = (props: TPrevNextButtonProp) => {
  const { children, disabled, className, ...restProps } = props;

  const { emblaApi } = useContext(CarouselContext);
  const { prevBtnDisabled, onPrevButtonClick } = usePrevNextButtons(emblaApi);

  const isDisabled = disabled || prevBtnDisabled;

  return (
    <button
      className={cn(
        prevNextButtonClassName,
        isDisabled && disablePrevNextButtonClassName,
        className,
      )}
      type="button"
      onClick={onPrevButtonClick}
      disabled={isDisabled}
      {...restProps}>
      <ChevronLeft className="w-1/2 h-1/2" />
      {children}
    </button>
  );
};

export const CarouselNext = (props: TPrevNextButtonProp) => {
  const { children, disabled, className, ...restProps } = props;

  const { emblaApi } = useContext(CarouselContext);
  const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const isDisabled = disabled || nextBtnDisabled;

  return (
    <button
      className={cn(
        prevNextButtonClassName,
        isDisabled && disablePrevNextButtonClassName,
        className,
      )}
      type="button"
      onClick={onNextButtonClick}
      disabled={isDisabled}
      {...restProps}>
      <ChevronRight className="w-1/2 h-1/2" />
      {children}
    </button>
  );
};

type TDotButtonProp = TPrevNextButtonProp;

const CarouselDotButton = (props: TDotButtonProp) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

type TDotButtonsProp = {
  classNames?: {
    container?: string;
    dotButton?: string;
    activeButton?: string;
  };
};

export const CarouselDotButtons = ({ classNames }: TDotButtonsProp) => {
  const { emblaApi } = useContext(CarouselContext);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { container, dotButton, activeButton } = classNames || {};

  return (
    <div className={cn("flex items-center gap-1", container)}>
      {scrollSnaps.map((_, index) => (
        <CarouselDotButton
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={cn(
            "size-3 rounded-full transition duration-200 ease-in-out bg-on-surface-variant",
            index === selectedIndex && ["bg-action", activeButton],
            dotButton,
          )}
        />
      ))}
    </div>
  );
};

type TCarouselContent = {
  children?: React.ReactNode;
  className?: string;
};

export const CarouselContent = ({ children, className }: TCarouselContent) => {
  return <div className={cn("embla__container", className)}>{children}</div>;
};

type TCarouselItem = {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

export const CarouselItem = ({
  children,
  className,
  asChild,
}: TCarouselItem) => {
  const Comp = asChild ? Slot.Root : "div";

  return (
    <div className={cn("embla__slide shrink-0 w-full", className)}>
      <Comp className="glass min-h-[var(--slide-height)]">{children}</Comp>
    </div>
  );
};

type TCarouselProp = {
  options?: EmblaOptionsType;
  children?: React.ReactNode;
  className?: string;
};

export function Carousel({ options, children, className }: TCarouselProp) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className={cn("embla", className)}>
      <div className="embla__viewport" ref={emblaRef}>
        <CarouselContext.Provider value={{ emblaApi }}>
          {children}
        </CarouselContext.Provider>
      </div>
    </div>
  );
}

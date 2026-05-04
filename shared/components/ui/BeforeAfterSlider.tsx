"use client";

import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  const calcPosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPosition(clamp(((clientX - left) / width) * 100));
  }, []);

  const preventScroll = useCallback((e: Event) => e.preventDefault(), []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    calcPosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    calcPosition(e.clientX);
  };

  const onPointerUp = () => {
    isDragging.current = false;
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-lg select-none cursor-ew-resize",
        "aspect-video",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      aria-label={`Before / After slider: drag to compare ${beforeLabel} and ${afterLabel}`}>
      <div className="absolute inset-0 ">
        <Image
          width={600}
          height={600}
          src={afterSrc}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* After label */}
        <span className="absolute top-4 right-4 px-3 py-0.5 rounded-full bg-action pointer-events-none z-0">
          {afterLabel}
        </span>
      </div>

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          width={600}
          height={600}
          src={beforeSrc}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Before label */}
        <span className="absolute top-4 left-4 px-3 py-0.5 rounded-full bg-action pointer-events-none z-10">
          {beforeLabel}
        </span>
      </div>

      {/* Divider line */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 w-px bg-action z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Drag handle */}
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
        style={{ left: `${position}%` }}>
        <div className="w-11 h-11 rounded-full bg-action shadow-glow-sm flex items-center justify-center">
          <ChevronsLeftRight className="size-5 text-white" />
        </div>
      </div>
    </div>
  );
}

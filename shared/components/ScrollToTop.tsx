"use client";

import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWindowScroll } from "@/shared/hooks/useWindowScroll";

export function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <button
      onClick={() => scrollTo(0)}
      className={cn(
        "glass items-center justify-center rounded-full md:w-12 md:h-12 w-10 h-10 border-2 border-outline text-on-surface hover:border-action hover:bg-action hover:text-white transition-all duration-150",
        scroll.y > 100 ? "flex" : "hidden",
      )}>
      <ChevronUp className="text-2xl" />
    </button>
  );
}

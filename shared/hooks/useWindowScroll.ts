"use client";

import { useEffect, useState, useCallback } from "react";

type TScrollPosition = {
  x: number;
  y: number;
};

type TScrollToFn = (position: number | { x?: number; y?: number }) => void;

export function useWindowScroll(): [TScrollPosition, TScrollToFn] {
  const [scroll, setScroll] = useState<TScrollPosition>({ x: 0, y: 0 });

  const scrollTo = useCallback<TScrollToFn>((position) => {
    if (typeof position === "number") {
      window.scrollTo({ top: position, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: position.y ?? window.scrollY,
        left: position.x ?? window.scrollX,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () =>
      setScroll({ x: window.scrollX, y: window.scrollY });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [scroll, scrollTo];
}

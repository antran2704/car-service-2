"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { SwitchLanguage } from "@/shared/components/SwitchLanguage";
import { LOGO } from "@/shared/constants";

export default function Navbar() {
  const t = useTranslations("nav");

  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#process", label: t("process") },
    { href: "#testimonials", label: t("testimonials") },
    { href: "#faq", label: t("faq") },
  ] as const;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-300",
      )}>
      <nav className="section-container flex h-16 items-center justify-between gap-8">
        <Image
          src={LOGO}
          alt="AutoGlass Pro"
          width={48}
          height={48}
          className="h-10 w-20"
        />

        <ul className="hidden md:flex items-center gap-8 text-body-md font-body">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-on-surface-variant hover:text-on-surface transition-colors duration-150">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <SwitchLanguage />

          <Link
            href="#cta"
            className="md:block hidden btn-action px-5 py-2 text-body-md">
            {t("cta")}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-on-surface-variant p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div className="md:hidden glass-nav border-t border-outline-variant/40 px-8 py-6 flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-on-surface-variant hover:text-on-surface font-body text-body-md"
                onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
            <Link
              href="#cta"
              className="btn-action px-5 py-2.5 text-body-md text-center mt-2"
              onClick={() => setMobileOpen(false)}>
              {t("cta")}
            </Link>
          </div>

          <div
            className="absolute inset-0 w-screen h-screen bg-transparent -z-10"
            onClick={() => setMobileOpen(false)}
          />
        </>
      )}
    </header>
  );
}

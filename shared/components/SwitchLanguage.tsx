import { Link, usePathname } from "@/lib/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export const SwitchLanguage = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <>
      <Link href={pathname} locale={locale === "vi" ? "en" : "vi"}>
        <button
          aria-label="Switch language"
          className="text-on-surface-variant hover:text-primary transition-colors duration-150 md:text-base text-sm">
          {t("lang")}
        </button>
      </Link>
    </>
  );
};

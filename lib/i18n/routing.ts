import { ELanguage } from "@/shared/enum";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [ELanguage.EN, ELanguage.VI],

  // Used when no locale matches
  defaultLocale: ELanguage.VI,
});

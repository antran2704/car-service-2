import { routing } from "@/lib/i18n/routing";
import enMessages from "../messages/en.json";

type Messages = typeof enMessages;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

import { routing } from "@/lib/i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except if they start with `/api`, `/_next` or `/_vercel`
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

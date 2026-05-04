import {
  FACEBOOK_LINK,
  LOGO,
  PHONE_NUMBER,
  TIKTOK_LINK,
} from "@/shared/constants";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  const t = await getTranslations("footer");

  const homePages = [
    {
      name: t("about"),
      href: "#about",
    },
    {
      name: t("services"),
      href: "#services",
    },
    {
      name: t("process"),
      href: "#process",
    },
    {
      name: t("testimonials"),
      href: "#testimonials",
    },
    {
      name: t("faq"),
      href: "#faq",
    },
  ];

  const services = [
    {
      name: t("s0"),
      href: "#services",
    },
    {
      name: t("s1"),
      href: "#services",
    },
    {
      name: t("s2"),
      href: "#services",
    },
    {
      name: t("s3"),
      href: "#services",
    },
  ];

  return (
    <footer className="bg-surface-container border-t border-outline-variant/40 pt-16 pb-8">
      <div className="section-container flex flex-col gap-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Image
              src={LOGO}
              alt="AutoGlass Pro"
              width={48}
              height={48}
              className="h-10 w-20"
            />
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed md:max-w-[220px]">
              {t("tagline")}
            </p>
          </div>

          <nav aria-label="Home Page" className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-label uppercase tracking-[0.12em] text-on-surface">
              {t("home_page_heading")}
            </h3>
            <ul className="flex flex-col gap-2">
              {homePages.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="font-body text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services" className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-label uppercase tracking-[0.12em] text-on-surface">
              {t("services_heading")}
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((item, i) => (
                <li key={i}>
                  <Link
                    href="#services"
                    className="font-body text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <nav aria-label="Company" className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-label uppercase tracking-[0.12em] text-on-surface">
              {t("contact_heading")}
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-body text-body-md text-on-surface-variant">
                {t("phoneNumber")}
                <Link
                  href={"tel:" + PHONE_NUMBER}
                  className=" hover:text-action transition-colors duration-150">
                  {PHONE_NUMBER}
                </Link>
              </li>
              <li className="font-body text-body-md text-on-surface-variant">
                {t("address")}
                225/7 Phạm Ngũ Lão, Cư Ê Bua, Buôn Ma Thuột, Tỉnh Đak Lak
              </li>
              <li className="flex items-center mt-2 gap-5">
                <Link
                  href={FACEBOOK_LINK}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-150">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                {/* Youtube */}
                <Link
                  href={TIKTOK_LINK}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-150">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden>
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  href={TIKTOK_LINK}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-150">
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden>
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>{" "}
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-outline-variant/30">
          <p className="font-body text-chip text-on-surface-variant">
            @ {new Date().getFullYear()} Chau47. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

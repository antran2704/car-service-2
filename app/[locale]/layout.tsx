import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import { spaceGrotesk, manrope } from "@/lib/fonts";
import { routing } from "@/lib/i18n/routing";

import "@/app/globals.css";
import "@/app/carousel.css";
import { DOMAIN, LOGO } from "@/shared/constants";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: (typeof routing.locales)[0] }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    icons: LOGO,
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      images: LOGO,
      locale,
      url: DOMAIN,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: LOGO,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: DOMAIN ? new URL(DOMAIN) : null,
    alternates: {
      canonical: DOMAIN,
      languages: {
        "en-US": "/en-US",
      },
    },
    keywords: [
      "chau 47",
      "Châu 47",
      "Đánh bóng kính",
      "Tẩy ố",
      "tay o",
      "đánh kính xe",
      "danh kinh xe",
      "han kinh",
      "hàn kính",
      "Tây Nguyên",
      "tay nguyen",
      "Dak Lak",
      "dak lak",
      "Buôn Ma Thuót",
      "buon ma thuot",
    ],
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { routing } from "@/lib/i18n/routing";

export type TPage = {
  params: { locale: (typeof routing.locales)[0] };
};

export type THeroGalleryItem = {
  src: string;
  span: string;
  label?: string;
};

import { SocialLinks } from "@/shared/components/SocialLinks";
import { ScrollToTop } from "@/shared/components/ScrollToTop";

export async function FloatingActions() {
  return (
    <div className="fixed md:right-5 right-2 bottom-6 flex flex-col items-center transition-all duration-150 gap-2">
      <SocialLinks />
      <ScrollToTop />
    </div>
  );
}

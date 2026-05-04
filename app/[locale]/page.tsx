import Navbar from "@/shared/components/Navbar";
import HeroSection from "@/app/[locale]/components/HeroSection";
import ServicesSection from "@/app/[locale]/components/ServicesSection";
import BeforeAfterSection from "@/app/[locale]/components/BeforeAfterSection";
import FeaturesSection from "@/app/[locale]/components/FeaturesSection";
import TestimonialsSection from "@/app/[locale]/components/TestimonialsSection";
import CTABanner from "@/app/[locale]/components/CTABanner";
import FAQSection from "@/app/[locale]/components/FAQSection";
import Footer from "@/shared/components/Footer";
import AboutSection from "@/app/[locale]/components/About";
import { FloatingActions } from "@/shared/components/FloatingActions";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BeforeAfterSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTABanner />
        <FAQSection />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}

import AboutSection from "../sections/AboutSection";
import ComparisonSection from "../sections/ComparisonSection";
import DemoSection from "../sections/DemoSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import ScreenshotSection from "../sections/ScreenshotSection";
import SupportSection from "../sections/SupportSection";
import TestimonialsSection from "../sections/TestimonialsSection";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeneralPageLayout from "../layouts/GeneralPageLayout";
import PrivacyPolicySection from "../sections/PrivacyPolicySection";

export default function HomePage() {
  const sections = [
    { id: "about", component: AboutSection },
    { id: "features", component: FeaturesSection },
    { id: "screenshots", component: ScreenshotSection },
    { id: "demo", component: DemoSection },
    { id: "comparison", component: ComparisonSection },
    { id: "testimonials", component: TestimonialsSection },
    { id: "support", component: SupportSection },
    { id: "privacy", component: PrivacyPolicySection },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, [location]);

  return (
    <main className="pt-8">
      <HeroSection
        id="#"
        className="scroll-mt-20 min-h-[90vh] flex items-center"
      />
      <GeneralPageLayout sections={sections} />
    </main>
  );
}

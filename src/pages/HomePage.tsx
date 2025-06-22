import AboutSection from "../sections/home/AboutSection";
import ComparisonSection from "../sections/home/ComparisonSection";
import DemoSection from "../sections/home/DemoSection";
import FeaturesSection from "../sections/home/FeaturesSection";
import HeroSection from "../sections/home/HeroSection";
import ScreenshotSection from "../sections/home/ScreenshotSection";
import SupportSection from "../sections/home/SupportSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeneralPageLayout from "../layouts/GeneralPageLayout";

export default function HomePage() {
  const sections = [
    { id: "about", component: AboutSection },
    { id: "features", component: FeaturesSection },
    { id: "screenshots", component: ScreenshotSection },
    { id: "demo", component: DemoSection },
    { id: "comparison", component: ComparisonSection },
    { id: "testimonials", component: TestimonialsSection },
    { id: "support", component: SupportSection },
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

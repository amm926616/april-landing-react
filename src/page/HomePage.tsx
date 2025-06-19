import { motion } from "framer-motion";
import AboutSection from "../sections/AboutSection";
import ComparisonSection from "../sections/ComparisonSection";
import DemoSection from "../sections/DemoSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import ScreenshotSection from "../sections/ScreenshotSection";
import SupportSection from "../sections/SupportSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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

      <div className="space-y-24 pb-24">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <section.component id={section.id} className="scroll-mt-20" />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

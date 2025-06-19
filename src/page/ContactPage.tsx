// src/pages/ContactPage.tsx
import { motion } from "framer-motion";
import ContactPlatformsSection from "../sections/ContactPlatformsSection";
import TeamSection from "../sections/TeamSection";
import SupportHourSection from "../sections/SupportHourSection";
import ContactFormSection from "../sections/ContactFormSection";

export default function ContactPage() {
  return (
    <main className="pt-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <ContactPlatformsSection
          id="contact"
          className="scroll-mt-20 min-h-[80vh]"
        />
        <TeamSection id="team" className="scroll-mt-20" />
        <SupportHourSection id="support" className="scroll-mt-20" />
        <ContactFormSection id="contact-form" className="scroll-mt-20" />
      </motion.div>
    </main>
  );
}

import { motion } from "framer-motion";
import React from "react";

type SectionProps = {
  id: string;
  component: React.ComponentType<{ id: string; className?: string }>;
};

type GeneralPageLayoutProps = {
  sections: SectionProps[];
};

export default function GeneralPageLayout({
  sections,
}: GeneralPageLayoutProps) {
  return (
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
  );
}

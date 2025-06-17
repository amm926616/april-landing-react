import RoadmapSection from "../sections/RoadmapSection";
import UpdatesSection from "../sections/UpdatesSection";
import FAQSection from "../sections/FAQSection";
import { motion } from "framer-motion";

export default function UpdatesPage() {
  const sections = [
    { id: "roadmap", component: RoadmapSection },
    { id: "updates", component: UpdatesSection },
    { id: "faq", component: FAQSection },
  ];

  return (
    <main className="pt-8">
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

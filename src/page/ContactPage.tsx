import ContactSection from "../sections/ContactSection";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="pt-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ContactSection id="contact" className="scroll-mt-20 min-h-[80vh]" />
      </motion.div>
    </main>
  );
}

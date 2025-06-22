import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does April help with language learning?",
    answer:
      "April provides real-time lyric translations and pronunciation guides while you listen to music. You can study lyrics in your target language and get instant translations to help you learn new words and phrases naturally.",
  },
  {
    question: "What languages does April support?",
    answer:
      "Currently, April supports over 20 languages including English, Spanish, French, German, Chinese, Japanese, and more. We're constantly adding new languages based on user demand.",
  },
  {
    question: "Is April free to use?",
    answer:
      "April offers a free trial period with basic features. Premium features like advanced language learning tools and unlimited translations require a subscription.",
  },
  {
    question: "Can I use April offline?",
    answer:
      "Yes! You can download songs and their lyrics for offline use. This is perfect for learning languages on the go without an internet connection.",
  },
  {
    question: "How accurate are the translations?",
    answer:
      "April uses advanced AI to provide accurate translations while maintaining the original meaning and context of the lyrics. We continuously improve our translation quality.",
  },
];

interface FAQSectionProps {
  id?: string;
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ id, className }) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  return (
    <section id={id} className={`${className} py-20 `}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-[var(--crimson)] mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-6 bg-[#1a1a24]/80 rounded-xl cursor-pointer border border-[#2e2e3a] hover:border-[#e63946]/50 transition-all duration-300"
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              >
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                  className="text-[#e63946] text-2xl"
                >
                  ▼
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#1a1a24]/60 rounded-b-xl overflow-hidden"
                  >
                    <div className="p-6 text-gray-300 border-t border-[#2e2e3a]">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

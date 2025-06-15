import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does April help with language learning?",
    answer: "April provides real-time lyric translations and pronunciation guides while you listen to music. You can study lyrics in your target language and get instant translations to help you learn new words and phrases naturally."
  },
  {
    question: "What languages does April support?",
    answer: "Currently, April supports over 20 languages including English, Spanish, French, German, Chinese, Japanese, and more. We're constantly adding new languages based on user demand."
  },
  {
    question: "Is April free to use?",
    answer: "April offers a free trial period with basic features. Premium features like advanced language learning tools and unlimited translations require a subscription."
  },
  {
    question: "Can I use April offline?",
    answer: "Yes! You can download songs and their lyrics for offline use. This is perfect for learning languages on the go without an internet connection."
  },
  {
    question: "How accurate are the translations?",
    answer: "April uses advanced AI to provide accurate translations while maintaining the original meaning and context of the lyrics. We continuously improve our translation quality."
  }
];

interface FAQSectionProps {
  id?: string;
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ id, className }) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  return (
    <section id={id} className={className + "py-20 bg-[#1a1a24]"}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4"
              onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
            >
              <div className="flex items-center justify-between p-4 bg-[#1a1a24]/90 rounded-lg cursor-pointer hover:bg-[#1a1a24] transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <div className="text-[#e63946]">
                  {activeFAQ === index ? "▼" : "▶"}
                </div>
              </div>
              {activeFAQ === index && (
                <div className="p-4 bg-[#1a1a24]/80 rounded-b-lg text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

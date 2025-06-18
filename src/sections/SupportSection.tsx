import { motion } from "framer-motion";

interface SupportSectionProps {
  id?: string;
  className?: string;
}

const SupportSection: React.FC<SupportSectionProps> = ({ id, className }) => {
  const supportOptions = [
    {
      title: "Documentation",
      description: "Find detailed guides and tutorials",
      link: "#documentation",
      icon: "📚",
      color: "bg-[#e63946]/10",
    },
    {
      title: "Community Forum",
      description: "Join our community and get help",
      link: "#forum",
      icon: "👥",
      color: "bg-[#e63946]/10",
    },
    {
      title: "Contact Support",
      description: "Get direct support from our team",
      link: "#contact",
      icon: "📞",
      color: "bg-[#e63946]/10",
    },
    {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions",
      link: "#faq",
      icon: "❓",
      color: "bg-[#e63946]/10",
    },
    {
      title: "Report a Bug",
      description: "Help us improve by reporting issues",
      link: "#bug",
      icon: "🐛",
      color: "bg-[#e63946]/10",
    },
    {
      title: "Language Support",
      description: "Get help in your language",
      link: "#languages",
      icon: "🌐",
      color: "bg-[#e63946]/10",
    },
  ];

  return (
    <section
      id={id}
      className={`${className} py-20 bg-gradient-to-b from-[#0d0d12] to-[#1a1a24]`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-[var(--crimson)] mb-12"
        >
          Support & Resources
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${option.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2e2e3a] hover:border-[#e63946]/50 group cursor-pointer`}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl p-3 rounded-full bg-[#1a1a24] border border-[#e63946]/30 group-hover:bg-[#e63946]/20 transition-colors duration-300"
                >
                  {option.icon}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{option.description}</p>
                  <motion.div
                    className="mt-3 text-[#e63946] text-sm font-medium flex items-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

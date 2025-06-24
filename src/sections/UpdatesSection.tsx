import { motion } from "framer-motion";
import SectionComponent from "../components/global/SectionComponent";

const updates = [
  {
    version: "1.2.0",
    date: "June 15, 2025",
    features: [
      "Added real-time lyric translations for 5 new languages",
      "Improved pronunciation guide accuracy",
      "Added offline learning mode",
      "Enhanced user interface with dark mode",
      "Performance improvements and bug fixes",
    ],
  },
  {
    version: "1.1.0",
    date: "May 15, 2025",
    features: [
      "Initial language learning features",
      "Basic lyric translations",
      "Offline music playback",
      "Playlist creation and management",
      "Smart search and discovery",
    ],
  },
  {
    version: "1.0.0",
    date: "April 15, 2025",
    features: [
      "Initial release",
      "Basic music player functionality",
      "Playlist support",
      "Basic user interface",
      "Cross-platform compatibility",
    ],
  },
];

interface UpdatesSectionProps {
  id: string;
  className?: string;
}

const UpdatesSection: React.FC<UpdatesSectionProps> = ({ id, className }) => {
  return (
    <SectionComponent id={id} className={`${className} py-20 `}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-[var(--crimson)] mb-12"
        >
          Recent Updates
        </motion.h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              // FIX: Replaced "transition-all" with specific transition classes
              className="bg-[#1a1a24]/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transition-colors duration-300 border border-[#2e2e3a] hover:border-[#e63946]/30"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Version {update.version}
                  </h3>
                  <p className="text-gray-400">Released {update.date}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="text-[#e63946] text-xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </div>
              <ul className="space-y-3">
                {update.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-[#e63946] mr-3 mt-1">•</span>
                    <p className="text-gray-300">{feature}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionComponent>
  );
};

export default UpdatesSection;

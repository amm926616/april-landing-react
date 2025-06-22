import { motion } from "framer-motion";
import image1 from "../../assets/images/screenshots/Screenshot 2025-05-10 205551.png";
import image2 from "../../assets/images/screenshots/Screenshot 2025-05-10 210243.png";

interface ScreenshotSectionProps {
  id?: string;
  className?: string;
}

const ScreenshotSection: React.FC<ScreenshotSectionProps> = ({
  id,
  className,
}) => {
  return (
    <section id={id} className={`${className} py-20 `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[var(--crimson)] text-center mb-12"
        >
          Product Screenshots
        </motion.h2>

        {/* First Screenshot Pair */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#2e2e3a] hover:border-[#e63946]/50 transition-all duration-300"
          >
            <img
              src={image1}
              alt="App screenshot 1"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg font-medium">
                Main Player Interface
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Beautiful and Intuitive Interface
            </h3>
            <p className="text-gray-300">
              Our application features a modern, clean interface that makes it
              easy to navigate and use. Every feature is thoughtfully designed
              to provide the best user experience possible.
            </p>
            <ul className="space-y-2">
              {[
                "Responsive design for all devices",
                "Dark theme for better visibility",
                "Intuitive navigation",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-[#e63946] mr-2 mt-1">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Second Screenshot Pair */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 md:order-1"
          >
            <h3 className="text-2xl font-semibold text-white">
              Advanced Features
            </h3>
            <p className="text-gray-300">
              Access powerful features that help you get the most out of our
              application. From advanced settings to custom configurations,
              we've got you covered.
            </p>
            <ul className="space-y-2">
              {[
                "Customizable settings",
                "Advanced analytics",
                "Real-time updates",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-[#e63946] mr-2 mt-1">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#2e2e3a] hover:border-[#e63946]/50 transition-all duration-300 order-1 md:order-2"
          >
            <img
              src={image2}
              alt="App screenshot 2"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg font-medium">
                Language Learning Features
              </p>
            </div>
          </motion.div>
        </motion.div>
        {/* Third Screenshot Pair */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#2e2e3a] hover:border-[#e63946]/50 transition-all duration-300"
          >
            <img
              src={image1}
              alt="App screenshot 1"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg font-medium">
                Main Player Interface
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Beautiful and Intuitive Interface
            </h3>
            <p className="text-gray-300">
              Our application features a modern, clean interface that makes it
              easy to navigate and use. Every feature is thoughtfully designed
              to provide the best user experience possible.
            </p>
            <ul className="space-y-2">
              {[
                "Responsive design for all devices",
                "Dark theme for better visibility",
                "Intuitive navigation",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-[#e63946] mr-2 mt-1">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        {/* fourth Screenshot Pair */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 md:order-1"
          >
            <h3 className="text-2xl font-semibold text-white">
              Advanced Features
            </h3>
            <p className="text-gray-300">
              Access powerful features that help you get the most out of our
              application. From advanced settings to custom configurations,
              we've got you covered.
            </p>
            <ul className="space-y-2">
              {[
                "Customizable settings",
                "Advanced analytics",
                "Real-time updates",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-[#e63946] mr-2 mt-1">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#2e2e3a] hover:border-[#e63946]/50 transition-all duration-300 order-1 md:order-2"
          >
            <img
              src={image2}
              alt="App screenshot 2"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg font-medium">
                Language Learning Features
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Fifth Screenshot Pair */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#2e2e3a] hover:border-[#e63946]/50 transition-all duration-300"
          >
            <img
              src={image1}
              alt="App screenshot 1"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg font-medium">
                Main Player Interface
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Beautiful and Intuitive Interface
            </h3>
            <p className="text-gray-300">
              Our application features a modern, clean interface that makes it
              easy to navigate and use. Every feature is thoughtfully designed
              to provide the best user experience possible.
            </p>
            <ul className="space-y-2">
              {[
                "Responsive design for all devices",
                "Dark theme for better visibility",
                "Intuitive navigation",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-[#e63946] mr-2 mt-1">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenshotSection;

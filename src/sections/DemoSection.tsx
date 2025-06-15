import { motion } from "framer-motion";

interface DemoComponentProps {
  id?: string;
  className?: string;
}

const DemoSection: React.FC<DemoComponentProps> = ({ id, className }) => {
  return (
    <section
      id={id}
      className={`${className} py-20 bg-gradient-to-b from-[#0d0d12] to-[#1a1a24]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[var(--crimson)] mb-4">
            Product Demo
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See April Music Player in action with our comprehensive demo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#1a1a24]/80 rounded-2xl p-6 shadow-xl border border-[#2e2e3a]"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              See How It Works
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Watch our comprehensive demo video to see all the features in
              action. Learn how to get the most out of our application and
              discover its full potential.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;

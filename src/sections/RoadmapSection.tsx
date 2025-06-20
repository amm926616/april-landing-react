import { motion } from "framer-motion";

interface RoadmapSectionProps {
  id?: string;
  className?: string;
}

const RoadmapSection = ({ id, className }: RoadmapSectionProps) => {
  const roadmap = [
    {
      title: "Q3 2025",
      features: [
        "Enhanced language learning algorithms",
        "AI-powered pronunciation practice",
        "New language support (Japanese, Portuguese)",
        "Improved offline capabilities",
        "User feedback integration",
      ],
      status: "In Progress",
      color: "bg-[#e63946]",
    },
    {
      title: "Q4 2025",
      features: [
        "Advanced grammar learning modules",
        "Interactive language exercises",
        "Voice recognition integration",
        "Social learning features",
        "Detailed progress analytics",
      ],
      status: "Planned",
      color: "bg-[#a8dadc]",
    },
    {
      title: "2026 & Beyond",
      features: [
        "AI conversation practice partners",
        "Cross-platform synchronization",
        "Advanced learning modes",
        "Personalized learning paths",
        "Community sharing features",
      ],
      status: "Future",
      color: "bg-[#457b9d]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id={id} className={`${className} py-20 `}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#e63946] mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-indigo-500 mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e63946] to-[#a8dadc] mb-4">
            Development Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our planned features and improvements to enhance your language
            learning experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {roadmap.map((quarter, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl p-0.5 bg-gradient-to-br ${index === 0 ? "from-[#e63946] to-[#ff6b6b]" : index === 1 ? "from-[#a8dadc] to-[#457b9d]" : "from-[#457b9d] to-[#1d3557]"}`}
            >
              <div className="bg-[#1a1a24] h-full p-6 rounded-[15px]">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {quarter.title}
                  </h3>
                  <span
                    className={`text-xs font-semibold ${quarter.color} text-white px-3 py-1 rounded-full`}
                  >
                    {quarter.status}
                  </span>
                </div>

                <ul className="space-y-4">
                  {quarter.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div
                        className={`${quarter.color} w-2 h-2 rounded-full mt-2 mr-3`}
                      ></div>
                      <p className="text-gray-300">{feature}</p>
                    </motion.li>
                  ))}
                </ul>

                {/* Progress indicator for current quarter */}
                {index === 0 && (
                  <div className="mt-8">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>30%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`${quarter.color} h-2 rounded-full`}
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-400"
        >
          <p>
            Have suggestions? We'd love to hear your ideas for April's
            development!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;

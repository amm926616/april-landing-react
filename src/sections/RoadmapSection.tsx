
const RoadmapSection = () => {
  const roadmap = [
    {
      title: "Q3 2025",
      features: [
        "Enhanced language learning algorithms",
        "AI-powered pronunciation practice",
        "New language support",
        "Improved offline capabilities",
        "User feedback integration"
      ]
    },
    {
      title: "Q4 2025",
      features: [
        "Advanced grammar learning",
        "Interactive language exercises",
        "Voice recognition integration",
        "Social learning features",
        "Progress analytics"
      ]
    },
    {
      title: "2026",
      features: [
        "AI conversation practice",
        "Cross-platform synchronization",
        "Advanced learning modes",
        "Custom learning paths",
        "Community features"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#1a1a24]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Roadmap
        </h2>
        <div className="space-y-12">
          {roadmap.map((quarter, index) => (
            <div key={index} className="bg-[#1a1a24]/90 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {quarter.title}
              </h3>
              <div className="space-y-4">
                {quarter.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="text-[#e63946] mr-2">•</div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

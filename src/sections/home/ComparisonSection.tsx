import React from "react";
import SectionComponent from "../../components/global/SectionComponent";

interface ComparisonSectionProps {
  id: string;
  className?: string;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  id,
  className,
}) => {
  const features = [
    {
      name: "Language Learning",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "Real-time lyric translations and pronunciation guides",
      icon: "🌐",
    },
    {
      name: "Offline Mode",
      april: "Yes",
      spotify: "Yes",
      apple: "Yes",
      description: "Download songs and lyrics for offline use",
      icon: "📱",
    },
    {
      name: "Lyric Analysis",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "Detailed word-by-word translations and explanations",
      icon: "🔍",
    },
    {
      name: "Pronunciation Guide",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "AI-powered pronunciation assistance",
      icon: "🗣️",
    },
    {
      name: "Custom Learning Mode",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "Personalized language learning paths",
      icon: "🎯",
    },
    {
      name: "Progress Tracking",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "Track your language learning progress",
      icon: "📊",
    },
  ];

  return (
    <SectionComponent id={id} className={className}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 mb-4">
            Why Choose April?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See how April stands out from other music platforms with these
            unique features
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {/* Header row */}
            <div className="p-6 bg-gray-800/80 border-b border-gray-700/50 md:border-b-0">
              <h3 className="text-lg font-semibold text-gray-300">Features</h3>
            </div>
            <div className="p-6 bg-gray-800/70 border-b border-gray-700/50 text-center">
              <h3 className="text-lg font-semibold text-white">April Music</h3>
            </div>
            <div className="p-6 bg-gray-800/60 border-b border-gray-700/50 text-center">
              <h3 className="text-lg font-semibold text-gray-300">Spotify</h3>
            </div>
            <div className="p-6 bg-gray-800/50 border-b border-gray-700/50 text-center">
              <h3 className="text-lg font-semibold text-gray-300">
                Apple Music
              </h3>
            </div>

            {/* Feature rows */}
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div
                  className={`p-6 ${index !== features.length - 1 ? "border-b border-gray-700/30" : ""} flex items-start`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <h4 className="text-lg font-medium text-white">
                        {feature.name}
                      </h4>
                    </div>
                    <p className="text-gray-400 mt-2 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-6 ${index !== features.length - 1 ? "border-b border-gray-700/30" : ""} flex items-center justify-center`}
                >
                  <span
                    className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium ${
                      feature.april === "Yes"
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/20"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {feature.april}
                  </span>
                </div>

                <div
                  className={`p-6 ${index !== features.length - 1 ? "border-b border-gray-700/30" : ""} flex items-center justify-center`}
                >
                  <span
                    className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium ${
                      feature.spotify === "Yes"
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/20"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {feature.spotify}
                  </span>
                </div>

                <div
                  className={`p-6 ${index !== features.length - 1 ? "border-b border-gray-700/30" : ""} flex items-center justify-center`}
                >
                  <span
                    className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium ${
                      feature.apple === "Yes"
                        ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/20"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {feature.apple}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default ComparisonSection;

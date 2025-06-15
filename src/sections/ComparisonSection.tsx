
interface ComparisonSectionProps {
  id?: string;
  className?: string;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ id, className }) => {
  const features = [
    {
      name: "Language Learning",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "Real-time lyric translations and pronunciation guides"
    },
    {
      name: "Offline Mode",
      april: "Yes",
      spotify: "Yes",
      apple: "Yes",
      description: "Download songs and lyrics for offline use"
    },
    {
      name: "Lyric Analysis",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "Detailed word-by-word translations and explanations"
    },
    {
      name: "Pronunciation Guide",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "AI-powered pronunciation assistance"
    },
    {
      name: "Custom Learning Mode",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "Personalized language learning paths"
    },
    {
      name: "Progress Tracking",
      april: "Yes",
      spotify: "No",
      apple: "No",
      description: "Track your language learning progress"
    }
  ];

  return (
    <section id={id} className={className + "py-20 bg-[#1a1a24]"}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Why Choose April?
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#1a1a24]/90">
                <th className="px-6 py-3 text-left text-white font-semibold">Features</th>
                <th className="px-6 py-3 text-center text-white font-semibold">
                  April Music Player
                </th>
                <th className="px-6 py-3 text-center text-white font-semibold">Spotify</th>
                <th className="px-6 py-3 text-center text-white font-semibold">Apple Music</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#1a1a24]/90" : "bg-[#1a1a24]/80"}
                >
                  <td className="px-6 py-4 text-gray-300">
                    <div className="flex items-center space-x-4">
                      <span className="text-xl">•</span>
                      <span>{feature.name}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        feature.april === "Yes"
                          ? "bg-[#e63946] text-white"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {feature.april}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        feature.spotify === "Yes"
                          ? "bg-[#e63946] text-white"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {feature.spotify}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        feature.apple === "Yes"
                          ? "bg-[#e63946] text-white"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {feature.apple}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

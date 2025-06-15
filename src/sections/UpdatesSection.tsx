import React from 'react';

const updates = [
  {
    version: "1.2.0",
    date: "June 15, 2025",
    features: [
      "Added real-time lyric translations for 5 new languages",
      "Improved pronunciation guide accuracy",
      "Added offline learning mode",
      "Enhanced user interface with dark mode",
      "Performance improvements and bug fixes"
    ]
  },
  {
    version: "1.1.0",
    date: "May 15, 2025",
    features: [
      "Initial language learning features",
      "Basic lyric translations",
      "Offline music playback",
      "Playlist creation and management",
      "Smart search and discovery"
    ]
  },
  {
    version: "1.0.0",
    date: "April 15, 2025",
    features: [
      "Initial release",
      "Basic music player functionality",
      "Playlist support",
      "Basic user interface",
      "Cross-platform compatibility"
    ]
  }
];

interface UpdatesSectionProps {
  id?: string;
  className?: string;
}

const UpdatesSection: React.FC<UpdatesSectionProps> = ({ id, className }) => {
  return (
    <section id={id} className={className + "py-20 bg-[#1a1a24]"}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Recent Updates
        </h2>
        <div className="space-y-8">
          {updates.map((update, index) => (
            <div key={index} className="bg-[#1a1a24]/90 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Version {update.version}
                  </h3>
                  <p className="text-gray-400">Released {update.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#e63946]">⭐</span>
                  <span className="text-[#e63946]">⭐</span>
                  <span className="text-[#e63946]">⭐</span>
                  <span className="text-[#e63946]">⭐</span>
                  <span className="text-[#e63946]">⭐</span>
                </div>
              </div>
              <ul className="space-y-2">
                {update.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-[#e63946] mr-2">•</span>
                    <p className="text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;

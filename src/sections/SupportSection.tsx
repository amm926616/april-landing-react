import React from 'react';

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
      icon: "📚"
    },
    {
      title: "Community Forum",
      description: "Join our community and get help",
      link: "#forum",
      icon: "👥"
    },
    {
      title: "Contact Support",
      description: "Get direct support from our team",
      link: "#contact",
      icon: "📞"
    },
    {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions",
      link: "#faq",
      icon: "❓"
    },
    {
      title: "Report a Bug",
      description: "Help us improve by reporting issues",
      link: "#bug",
      icon: "🐛"
    },
    {
      title: "Language Support",
      description: "Get help in your language",
      link: "#languages",
      icon: "🌐"
    }
  ];

  return (
    <section id={id} className={className + "py-20 bg-[#1a1a24]"}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Support & Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className="bg-[#1a1a24]/90 p-6 rounded-2xl hover:bg-[#1a1a24] transition-colors duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-[#e63946] text-2xl">{option.icon}</div>
                <div>
                  <h3 className="font-semibold text-white">{option.title}</h3>
                  <p className="text-gray-400">{option.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

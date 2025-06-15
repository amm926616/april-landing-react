import React from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaFacebookMessenger, FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

interface ContactSectionProps {
  id?: string;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, className }) => {
  const contactLinks = [
    {
      icon: <FaTelegram className="text-2xl" />,
      text: "Telegram",
      url: "https://t.me/april_music_player",
      color: "text-blue-500"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      text: "Email",
      url: "mailto:support@april-music.com",
      color: "text-gray-300"
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      text: "Facebook",
      url: "https://facebook.com/aprilmusicplayer",
      color: "text-blue-600"
    },
    {
      icon: <FaFacebookMessenger className="text-2xl" />,
      text: "Messenger",
      url: "https://m.me/aprilmusicplayer",
      color: "text-blue-600"
    }
  ];

  return (
    <section id={id} className={className + "py-20 bg-[var(--raven)]"}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Connect with us through your preferred platform. We're always here to help!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-[var(--crimson)]/5 rounded-xl hover:bg-[var(--crimson)]/10 transition-colors"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white hover:text-[var(--crimson)] transition-colors"
                >
                  <div className={`rounded-full p-3 bg-white/10 ${link.color} hover:bg-white/20 transition-colors`}>
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.text}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

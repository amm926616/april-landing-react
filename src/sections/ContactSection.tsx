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
      icon: <FaTelegram />,
      text: "Telegram",
      url: "https://t.me/april_music_player",
      color: "text-blue-400",
    },
    {
      icon: <FaEnvelope />,
      text: "Email",
      url: "mailto:support@april-music.com",
      color: "text-gray-300",
    },
    {
      icon: <FaFacebook />,
      text: "Facebook",
      url: "https://facebook.com/aprilmusicplayer",
      color: "text-blue-500",
    },
    {
      icon: <FaFacebookMessenger />,
      text: "Messenger",
      url: "https://m.me/aprilmusicplayer",
      color: "text-blue-400",
    },
  ];

  return (
    <section
      id={id}
      className={`${className} py-20 bg-gradient-to-b from-[#0d0d12] to-[#1a1a24]`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--crimson)] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Connect with us through your preferred platform. We're always here
              to help!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.text}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#1a1a24]/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2e2e3a] hover:border-[#e63946]/30"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`${link.color} bg-[#1a1a24] p-4 rounded-full mb-4 text-2xl`}
                  >
                    {link.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">
                    {link.text}
                  </h3>
                  <motion.div
                    className="mt-3 text-[#e63946] text-sm font-medium flex items-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Contact us
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import {
  FaTelegram,
  FaFacebookMessenger,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6"; // Make sure you're using `fa6` to access latest icons

interface ContactSectionProps {
  id?: string;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, className }) => {
  const topLinks = [
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
      icon: <FaFacebookMessenger />,
      text: "Messenger",
      url: "https://m.me/aprilmusicplayer",
      color: "text-blue-400",
    },
  ];

  const bottomLinks = [
    {
      icon: <FaFacebook />,
      text: "Facebook",
      url: "https://facebook.com/aprilmusicplayer",
      color: "text-blue-500",
    },
    {
      icon: <FaYoutube />,
      text: "YouTube",
      url: "https://youtu.be/V9PVRfjEBTI?si=VcIyzavsWbFEsPH5",
      color: "text-red-500",
    },
    {
      icon: <FaTiktok />,
      text: "TikTok",
      url: "https://www.tiktok.com/@aprilmusicplayer",
      color: "text-pink-400",
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

          {/* TOP ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {topLinks.map((link, index) => (
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
                </div>
              </motion.a>
            ))}
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomLinks.map((link, index) => (
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

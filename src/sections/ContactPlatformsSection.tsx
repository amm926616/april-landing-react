import {
  FaEnvelope,
  FaFacebook,
  FaFacebookMessenger,
  FaHeadphones,
  FaMusic,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import SectionComponent from "../components/SectionComponent";

interface ContactPlatformsSectionProps {
  id: string;
  className?: string;
}

const ContactPlatformsSection = ({
  id,
  className,
}: ContactPlatformsSectionProps) => {
  const contactMethods = [
    {
      name: "Telegram Channel",
      icon: <FaTelegram className="text-3xl" />,
      link: "https://t.me/april_music_player",
      color: "bg-blue-400",
      description:
        "Join our Telegram channel for updates, announcements, and community discussions.",
      screenshot: "/telegram-screenshot.jpg",
      username: "@april_music_player",
    },
    {
      name: "Email Support",
      icon: <FaEnvelope className="text-3xl" />,
      link: "mailto:support@april-music.com",
      color: "bg-gray-300",
      description:
        "Our support team responds within 24 hours to help with any issues or questions.",
      screenshot: "/email-screenshot.jpg",
      username: "support@april-music.com",
    },
    {
      name: "Messenger Chat",
      icon: <FaFacebookMessenger className="text-3xl" />,
      link: "https://m.me/aprilmusicplayer",
      color: "bg-blue-400",
      description:
        "Instant messaging support through Facebook Messenger for quick assistance.",
      screenshot: "/messenger-screenshot.jpg",
      username: "@aprilmusicplayer",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook Page",
      icon: <FaFacebook className="text-3xl" />,
      link: "https://facebook.com/aprilmusicplayer",
      color: "bg-blue-500",
      description: "Follow us for news, feature updates, and community events.",
      screenshot: "/facebook-screenshot.jpg",
      username: "@aprilmusicplayer",
      followers: "12K+",
    },
    {
      name: "YouTube Channel",
      icon: <FaYoutube className="text-3xl" />,
      link: "https://youtu.be/V9PVRfjEBTI?si=VcIyzavsWbFEsPH5",
      color: "bg-red-500",
      description:
        "Watch tutorials, feature guides, and music showcases on our channel.",
      screenshot: "/youtube-screenshot.jpg",
      username: "April Music Official",
      subscribers: "8K+",
    },
    {
      name: "TikTok Profile",
      icon: <FaTiktok className="text-3xl" />,
      link: "https://www.tiktok.com/@aprilmusicplayer",
      color: "bg-pink-400",
      description:
        "Short videos showcasing app features, music discoveries, and behind-the-scenes.",
      screenshot: "/tiktok-screenshot.jpg",
      username: "@aprilmusicplayer",
      followers: "15K+",
    },
  ];

  return (
    <SectionComponent id={id} className={className}>
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--crimson)] mb-6">
            Connect With{" "}
            <span className="text-[var(--crimson)]">April Music</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help you with any questions, feedback, or support you
            need. Choose your preferred way to connect with us.
          </p>
        </div>

        {/* Contact Methods Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaHeadphones className="text-3xl text-[var(--crimson)] mr-4" />
            <h2 className="text-3xl font-bold">Direct Support Channels</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div
                key={method.name}
                className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl overflow-hidden hover:border-[var(--crimson)] transition-all duration-300 hover:shadow-[var(--crimson)/20%]"
              >
                <div className={`${method.color} h-2 w-full`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`${method.color.replace("bg", "text")} mr-3`}
                    >
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{method.name}</h3>
                  </div>
                  <p className="text-gray-400 mb-5">{method.description}</p>

                  <div className="mb-5 bg-gray-900 rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-800 flex items-center justify-center text-gray-500">
                      [Screenshot Preview]
                    </div>
                  </div>

                  <div className="bg-[#252532] p-3 rounded-lg mb-5">
                    <p className="text-sm text-gray-400 mb-1">Username:</p>
                    <p className="font-mono text-white">{method.username}</p>
                  </div>

                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 px-4 text-center rounded-lg bg-[var(--crimson)] hover:bg-[var(--crimson-dark)] transition font-medium`}
                  >
                    Connect via {method.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaMusic className="text-3xl text-[var(--crimson)] mr-4" />
            <h2 className="text-3xl font-bold">Our Social Community</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialLinks.map((social) => (
              <div
                key={social.name}
                className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl overflow-hidden hover:border-[var(--crimson)] transition-all duration-300 hover:shadow-[var(--crimson)/20%]"
              >
                <div className={`${social.color} h-2 w-full`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`${social.color.replace("bg", "text")} mr-3`}
                    >
                      {social.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{social.name}</h3>
                  </div>
                  <p className="text-gray-400 mb-5">{social.description}</p>

                  <div className="mb-5 bg-gray-900 rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-800 flex items-center justify-center text-gray-500">
                      [Screenshot Preview]
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-[#252532] p-3 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">Username:</p>
                      <p className="font-mono text-white truncate">
                        {social.username}
                      </p>
                    </div>
                    <div className="bg-[#252532] p-3 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">Followers:</p>
                      <p className="font-mono text-white">{social.followers}</p>
                    </div>
                  </div>

                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 px-4 text-center rounded-lg bg-[var(--crimson)] hover:bg-[var(--crimson-dark)] transition font-medium`}
                  >
                    Follow on {social.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default ContactPlatformsSection;

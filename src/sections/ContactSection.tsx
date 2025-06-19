import {
  FaTelegram,
  FaEnvelope,
  FaFacebookMessenger,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaHeadphones,
  FaMusic,
  FaPaperPlane,
  FaUsers,
  FaClock,
  FaPhone,
} from "react-icons/fa6";
import { useState } from "react";

const ContactPage = () => {
  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    {
      name: "Telegram Channel",
      icon: <FaTelegram className="text-3xl" />,
      link: "https://t.me/april_music_player",
      color: "bg-blue-400",
      description: "Join our Telegram channel for updates, announcements, and community discussions.",
      screenshot: "/telegram-screenshot.jpg",
      username: "@april_music_player"
    },
    {
      name: "Email Support",
      icon: <FaEnvelope className="text-3xl" />,
      link: "mailto:support@april-music.com",
      color: "bg-gray-300",
      description: "Our support team responds within 24 hours to help with any issues or questions.",
      screenshot: "/email-screenshot.jpg",
      username: "support@april-music.com"
    },
    {
      name: "Messenger Chat",
      icon: <FaFacebookMessenger className="text-3xl" />,
      link: "https://m.me/aprilmusicplayer",
      color: "bg-blue-400",
      description: "Instant messaging support through Facebook Messenger for quick assistance.",
      screenshot: "/messenger-screenshot.jpg",
      username: "@aprilmusicplayer"
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
      followers: "12K+"
    },
    {
      name: "YouTube Channel",
      icon: <FaYoutube className="text-3xl" />,
      link: "https://youtu.be/V9PVRfjEBTI?si=VcIyzavsWbFEsPH5",
      color: "bg-red-500",
      description: "Watch tutorials, feature guides, and music showcases on our channel.",
      screenshot: "/youtube-screenshot.jpg",
      username: "April Music Official",
      subscribers: "8K+"
    },
    {
      name: "TikTok Profile",
      icon: <FaTiktok className="text-3xl" />,
      link: "https://www.tiktok.com/@aprilmusicplayer",
      color: "bg-pink-400",
      description: "Short videos showcasing app features, music discoveries, and behind-the-scenes.",
      screenshot: "/tiktok-screenshot.jpg",
      username: "@aprilmusicplayer",
      followers: "15K+"
    },
  ];

  const teamMembers = [
    {
      name: "John Doe",
      role: "Support Lead",
      image: "/team/john.jpg",
      contact: "john@april-music.com"
    },{
      name: "David",
      role: "Support Lead",
      image: "/team/david.jpg",
      contact: "david@april-music.com"
    },{
      name: "Lisa",
      role: "Co-Lead",
      image: "/team/Lisa.jpg",
      contact: "Lisa@april-music.com"
    },{
      name: "MMM",
      role: "Co-Lead",
      image: "/team/mmm.jpg",
      contact: "mmm@april-music.com"
    },
    // Add more team members as needed
  ];

  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
};
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0d0d12] to-[#1a1a24] py-20 px-4 sm:px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--crimson)] mb-6">
            Connect With <span className="text-[var(--crimson)]">April Music</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help you with any questions, feedback, or support you need. Choose your preferred way to connect with us.
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
              <div key={method.name} className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl overflow-hidden hover:border-[var(--crimson)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--crimson)/20%]">
                <div className={`${method.color} h-2 w-full`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${method.color.replace('bg', 'text')} mr-3`}>
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
                    Connect via {method.name.split(' ')[0]}
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
              <div key={social.name} className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl overflow-hidden hover:border-[var(--crimson)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--crimson)/20%]">
                <div className={`${social.color} h-2 w-full`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${social.color.replace('bg', 'text')} mr-3`}>
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
                      <p className="font-mono text-white truncate">{social.username}</p>
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
                    Follow on {social.name.split(' ')[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaPaperPlane className="text-3xl text-[var(--crimson)] mr-4" />
            <h2 className="text-3xl font-bold">Send Us a Message</h2>
          </div>
          
          <div className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#252532] border border-[#3a3a4a] rounded-lg px-4 py-3 text-white focus:border-[var(--crimson)] focus:outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#252532] border border-[#3a3a4a] rounded-lg px-4 py-3 text-white focus:border-[var(--crimson)] focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#252532] border border-[#3a3a4a] rounded-lg px-4 py-3 text-white focus:border-[var(--crimson)] focus:outline-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[var(--crimson)] hover:bg-[var(--crimson-dark)] text-white rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaUsers className="text-3xl text-[var(--crimson)] mr-4" />
            <h2 className="text-3xl font-bold">Meet Our Support Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-700 overflow-hidden">
                  {/* Team member image */}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[var(--crimson)] mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.contact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Hours Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaClock className="text-3xl text-[var(--crimson)] mr-4" />
            <h2 className="text-3xl font-bold">Support Hours</h2>
          </div>
          
          <div className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">General Support</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Monday-Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
                <p className="text-gray-400 mb-4">For critical issues affecting your service:</p>
                <div className="flex items-center">
                  <FaPhone className="text-[var(--crimson)] mr-3" />
                  <span className="font-mono">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;
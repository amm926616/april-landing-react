import SectionComponent from "../../components/global/SectionComponent";
import { motion } from "framer-motion";

type PrivacyPolicySectionProps = {
  id: string;
  className?: string;
};

const PrivacyPolicySection = ({ id, className }: PrivacyPolicySectionProps) => {
  const paragraphs = [
    {
      title: "1. Information We Collect",
      content: `When you use April Music, we may collect:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Account Information:</strong> Email, username, and profile details</li>
          <li><strong>Usage Data:</strong> Songs played, playlists created, and listening habits</li>
          <li><strong>Device Information:</strong> Device type, operating system, and app performance data</li>
        </ul>`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use your data to:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Provide and personalize the April Music service</li>
          <li>Improve our app and develop new features</li>
          <li>Communicate with you about updates and offers</li>
        </ul>`,
    },
    {
      title: "3. Data Sharing",
      content: `We do not sell your personal data. We may share information with:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Service providers who help operate our business</li>
          <li>Legal authorities when required by law</li>
        </ul>`,
    },
    {
      title: "4. Your Rights",
      content: `You can:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Access, update, or delete your account information</li>
          <li>Opt-out of marketing communications</li>
          <li>Request a copy of your personal data</li>
        </ul>`,
    },
    {
      title: "5. Security",
      content:
        "We implement industry-standard security measures to protect your data, but no system is 100% secure.",
    },
    {
      title: "6. Changes to This Policy",
      content:
        "We may update this policy periodically. We'll notify you of significant changes through the app or email.",
    },
    {
      title: "7. Contact Us",
      content: `For privacy questions, contact our Data Protection Officer at:
        <div class="mt-2">
          <a href="mailto:privacy@aprilmusic.app" class="text-red-400 underline hover:text-white">
            privacy@aprilmusic.app
          </a>
        </div>`,
    },
  ];

  return (
    <SectionComponent id={id} className={`py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[var(--crimson)] mb-4">
            Privacy Policy
          </h2>
          <p className="text-gray-400">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 md:p-8 backdrop-blur-sm space-y-8"
        >
          {paragraphs.map((para, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-red-400 mb-2">
                {para.title}
              </h3>
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: para.content }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </SectionComponent>
  );
};

export default PrivacyPolicySection;

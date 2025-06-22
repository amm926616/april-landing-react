import SectionComponent from "../../components/global/SectionComponent";
import { motion } from "framer-motion";

type TermsOfServiceSectionProps = {
  id: string;
  className?: string;
};

const TermsOfServiceSection = ({
  id,
  className,
}: TermsOfServiceSectionProps) => {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: `By downloading, installing, or using April Music Player, you agree to be bound by these Terms of Service:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>You must be at least 13 years old to use this software</li>
          <li>These terms apply to all features and functionalities of the app</li>
          <li>Updates to the software may include updated terms</li>
          <li>Continued use after updates constitutes acceptance of new terms</li>
        </ul>`,
    },
    {
      title: "2. Service Description",
      content: `April Music Player is an offline music management application that:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Organizes and plays your personal music library</li>
          <li>Displays synchronized lyrics from public APIs when available</li>
          <li>Provides tools to download music from your Spotify account</li>
          <li>Operates primarily offline with optional online features</li>
          <li>Supports multiple audio formats and playlist management</li>
        </ul>`,
    },
    {
      title: "3. User Obligations",
      content: `You agree to use April Music Player responsibly:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Only download music you own or have legal rights to access</li>
          <li>Comply with all applicable copyright laws and regulations</li>
          <li>Respect third-party service terms (Spotify, LRCLIB, etc.)</li>
          <li>Not attempt to circumvent any security measures</li>
          <li>Not redistribute copyrighted content without authorization</li>
          <li>Use the software for personal, non-commercial purposes only</li>
        </ul>`,
    },
    {
      title: "4. Privacy & Data Collection",
      content: `We respect your privacy and data:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>No personal data is transmitted to our servers</li>
          <li>Your music library data remains on your device</li>
          <li>Settings and preferences are stored locally</li>
          <li>Third-party API calls may be logged by those services</li>
          <li>We don't track your listening habits or music preferences</li>
        </ul>`,
    },
    {
      title: "5. Limitations & Disclaimers",
      content: `Please understand these important limitations:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>We cannot guarantee availability of third-party services</li>
          <li>Lyrics accuracy depends on external databases</li>
          <li>Audio quality depends on your source files</li>
          <li>Some features require active internet connection</li>
          <li>Software performance varies by device specifications</li>
        </ul>
        <p class="mt-2 text-yellow-400 text-sm">
          <strong>Important:</strong> This software is provided "as is" without warranty of any kind.
        </p>`,
    },
    {
      title: "6. Prohibited Uses",
      content: `The following activities are strictly prohibited:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Commercial redistribution of the software or music content</li>
          <li>Reverse engineering for malicious purposes</li>
          <li>Using the app to infringe on others' intellectual property</li>
          <li>Attempting to access restricted or premium content illegally</li>
          <li>Sharing login credentials with unauthorized parties</li>
        </ul>`,
    },
    {
      title: "7. Updates & Modifications",
      content: `Software updates and service changes:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>We may update the software to improve functionality</li>
          <li>Some updates may be automatic for security purposes</li>
          <li>New features may be added or removed at our discretion</li>
          <li>Third-party service integrations may change or be discontinued</li>
          <li>We'll notify users of significant changes when possible</li>
        </ul>`,
    },
    {
      title: "8. Termination",
      content: `These terms remain in effect until terminated:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>You may stop using the software at any time</li>
          <li>Uninstalling the app terminates your use of the service</li>
          <li>We may discontinue support or updates at our discretion</li>
          <li>Violation of these terms may result in restricted functionality</li>
        </ul>`,
    },
  ];

  return (
    <SectionComponent id={id} className={`py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[var(--crimson)] mb-4 tracking-tight">
            Terms of Service
          </h2>
          <p className="text-gray-400">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 md:p-8 backdrop-blur-sm space-y-8"
        >
          {/* Introduction */}
          <div className="text-center py-4 border-b border-gray-600">
            <p className="text-gray-300 italic text-lg">
              "Your music, your rules, your responsibility. April empowers you
              to enjoy your personal music collection while respecting the
              digital music ecosystem."
            </p>
          </div>

          {/* Terms sections */}
          {terms.map((term, index) => (
            <div key={index} className="pb-4">
              <h3 className="text-xl font-semibold text-[var(--crimson)] mb-3">
                {term.title}
              </h3>
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: term.content }}
              />
            </div>
          ))}

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-gray-600">
            <h3 className="text-lg font-semibold text-[var(--crimson)] mb-2">
              Questions About These Terms?
            </h3>
            <p className="text-gray-300">
              If you have questions about these Terms of Service, please contact
              us through:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              <li>Our official website support section</li>
              <li>The help documentation within the app</li>
              <li>Community forums and support channels</li>
            </ul>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 text-gray-400 text-sm space-y-2"
        >
          <p>
            These terms are designed to protect both users and developers while
            promoting responsible music enjoyment.
          </p>
          <p>
            By using April Music Player, you acknowledge that you have read,
            understood, and agreed to these Terms of Service.
          </p>
          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} April Music Player. Terms subject to
            change with notice.
          </p>
        </motion.div>
      </div>
    </SectionComponent>
  );
};

export default TermsOfServiceSection;

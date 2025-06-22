import SectionComponent from "../../components/global/SectionComponent";
import { motion } from "framer-motion";

type CopyrightAgreementSectionProps = {
  id: string;
  className?: string;
};

const CopyrightAgreementSection = ({
  id,
  className,
}: CopyrightAgreementSectionProps) => {
  const paragraphs = [
    {
      title: "1. Open Source Foundation",
      content: `April Music Player is built upon open-source technologies and respects the open-source philosophy. The software utilizes:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Open-source libraries and frameworks for core functionality</li>
          <li>Public APIs for lyrics retrieval (LRCLIB)</li>
          <li>Community-driven tools for audio processing</li>
        </ul>`,
    },
    {
      title: "2. User Responsibility",
      content: `As the user, you understand and agree that:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>April provides tools to interact with your own Spotify account</li>
          <li>You are solely responsible for complying with Spotify's Terms of Service</li>
          <li>Lyrics are obtained through free, public APIs and we don't control their content</li>
          <li>Any copyright infringement through song usage is between you and the content provider</li>
        </ul>`,
    },
    {
      title: "3. Ownership & Modifications",
      content: `After purchase:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>You own your copy of the software for personal use</li>
          <li>You may modify, experiment, and reverse-engineer the software</li>
          <li>You may not redistribute modified versions as original work</li>
          <li>The original copyright notice must remain intact in all copies</li>
        </ul>`,
    },
    {
      title: "4. No Warranty",
      content: `The software is provided "as is" without warranties:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>We don't guarantee uninterrupted access to third-party services</li>
          <li>Features may change based on API availability</li>
          <li>You assume all risks related to software modification</li>
        </ul>`,
    },
    {
      title: "5. License Grant",
      content: `By using April Music Player, you're granted:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>A personal, non-transferable license to use the software</li>
          <li>Freedom to study how the program works</li>
          <li>Permission to adapt the software for personal use</li>
          <li>The right to distribute unmodified copies</li>
        </ul>
        <p class="mt-2 italic text-sm text-gray-400">
          This doesn't affect your statutory rights under copyright law.
        </p>`,
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
            Copyright & License Agreement
          </h2>
          <p className="text-gray-400">
            Effective:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>

        {/* One unified card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 md:p-8 backdrop-blur-sm space-y-8"
        >
          {/* Quote */}
          <p className="text-gray-300 text-center italic mb-2">
            "April provides the tools — you choose how to use them responsibly.
            We empower music exploration while respecting artists' rights."
          </p>

          {/* Paragraphs */}
          {paragraphs.map((para, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-[var(--crimson)] mb-2">
                {para.title}
              </h3>
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: para.content }}
              />
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 text-gray-400 text-sm"
        >
          <p>
            This agreement doesn't constitute legal advice. Consult an attorney
            for specific questions.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} April Music Player. All rights
            reserved to original authors of included open-source components.
          </p>
        </motion.div>
      </div>
    </SectionComponent>
  );
};

export default CopyrightAgreementSection;

import SectionComponent from "../components/global/SectionComponent";

const PrivacyPolicySection = ({
  id,
  className,
}: {
  id: string;
  className?: string;
}) => {
  return (
    <SectionComponent id={id} className={`py-16 ${className || ""}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Privacy Policy</h2>
        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h3 className="text-xl mt-8 mb-4">1. Information We Collect</h3>
        <p className="mb-4">When you use April Music, we may collect:</p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>
            <strong className="font-semibold">Account Information:</strong>{" "}
            Email, username, and profile details
          </li>
          <li>
            <strong className="font-semibold">Usage Data:</strong> Songs played,
            playlists created, and listening habits
          </li>
          <li>
            <strong className="font-semibold">Device Information:</strong>{" "}
            Device type, operating system, and app performance data
          </li>
        </ul>

        <h3 className="text-xl mt-8 mb-4">2. How We Use Your Information</h3>
        <p className="mb-4">We use your data to:</p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Provide and personalize the April Music service</li>
          <li>Improve our app and develop new features</li>
          <li>Communicate with you about updates and offers</li>
        </ul>

        <h3 className="text-xl mt-8 mb-4">3. Data Sharing</h3>
        <p className="mb-4">
          We do not sell your personal data. We may share information with:
        </p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Service providers who help operate our business</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h3 className="text-xl mt-8 mb-4">4. Your Rights</h3>
        <p className="mb-4">You can:</p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Access, update, or delete your account information</li>
          <li>Opt-out of marketing communications</li>
          <li>Request a copy of your personal data</li>
        </ul>

        <h3 className="text-xl mt-8 mb-4">5. Security</h3>
        <p className="mb-8">
          We implement industry-standard security measures to protect your data,
          but no system is 100% secure.
        </p>

        <h3 className="text-xl mt-8 mb-4">6. Changes to This Policy</h3>
        <p className="mb-8">
          We may update this policy periodically. We'll notify you of
          significant changes through the app or email.
        </p>

        <h3 className="text-xl mt-8 mb-4">7. Contact Us</h3>
        <p className="mb-4">
          For privacy questions, contact our Data Protection Officer at:
        </p>
        <p className="font-bold text-lg mb-8">privacy@aprilmusic.app</p>
      </div>
    </SectionComponent>
  );
};

export default PrivacyPolicySection;

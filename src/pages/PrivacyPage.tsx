import GeneralPageLayout from "../layouts/GeneralPageLayout";
import PrivacyPolicySection from "../sections/PrivacyPolicySection";

const sections = [
  {
    id: "privacy-policy",
    component: PrivacyPolicySection,
  },
];

export default function PrivacyPage() {
  return <GeneralPageLayout sections={sections} />;
}

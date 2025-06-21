import GeneralPageLayout from "../layouts/GeneralPageLayout";
import CopyrightAgreementSection from "../sections/CopyRightAggrementSection";
import PrivacyPolicySection from "../sections/PrivacyPolicySection";
import TermsOfServiceSection from "../sections/TermsOfServiceSection";

const sections = [
  { id: "terms-of-service", component: TermsOfServiceSection },
  { id: "copyright-agreement", component: CopyrightAgreementSection },
  { id: "privacy-policy", component: PrivacyPolicySection },
];

export default function LegalPage() {
  return (
    <>
      <GeneralPageLayout sections={sections} />
    </>
  );
}

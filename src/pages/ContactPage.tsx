import GeneralPageLayout from "../layouts/GeneralPageLayout";
import ContactFormSection from "../sections/ContactFormSection";
import SupportHourSection from "../sections/SupportHourSection";
import TeamSection from "../sections/TeamSection";

const sections = [
  { id: "team", component: TeamSection },
  { id: "support", component: SupportHourSection },
  { id: "contact-form", component: ContactFormSection },
];

export default function ContactPage() {
  return (
    <main className="pt-8">
      <GeneralPageLayout sections={sections} />
    </main>
  );
}

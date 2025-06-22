import GeneralPageLayout from "../layouts/GeneralPageLayout";
import ContactFormSection from "../sections/contact/ContactFormSection";
import SupportHourSection from "../sections/contact/SupportHourSection";
import TeamSection from "../sections/contact/TeamSection";

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

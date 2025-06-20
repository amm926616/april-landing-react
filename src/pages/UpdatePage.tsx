import GeneralPageLayout from "../layouts/GeneralPageLayout";
import FAQSection from "../sections/FAQSection";
import RoadmapSection from "../sections/RoadmapSection";
import UpdatesSection from "../sections/UpdatesSection";

export default function UpdatesPage() {
  const sections = [
    { id: "roadmap", component: RoadmapSection },
    { id: "updates", component: UpdatesSection },
    { id: "faq", component: FAQSection },
  ];

  return (
    <main className="pt-8">
      <GeneralPageLayout sections={sections} />;
    </main>
  );
}

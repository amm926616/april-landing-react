import GeneralPageLayout from "../layouts/GeneralPageLayout";
import DownloadSection from "../sections/download/DownloadSection";
import FAQSection from "../sections/download/FAQSection";
import RoadmapSection from "../sections/download/RoadmapSection";
import UpdatesSection from "../sections/download/UpdatesSection";

export default function UpdatesPage() {
  const sections = [
    { id: "download", component: DownloadSection },
    { id: "roadmap", component: RoadmapSection },
    { id: "updates", component: UpdatesSection },
    { id: "faq", component: FAQSection },
  ];

  return (
    <main className="pt-8">
      <GeneralPageLayout sections={sections} />
    </main>
  );
}

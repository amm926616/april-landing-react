import GeneralPageLayout from "../layouts/GeneralPageLayout";
import ShortcutSection from "../sections/ShortcutSection";

const sections = [{ id: "shortcuts", component: ShortcutSection }];

export default function DocumentationPage() {
  return (
    <>
      <GeneralPageLayout sections={sections} />
    </>
  );
}

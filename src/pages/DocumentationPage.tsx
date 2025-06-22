import GeneralPageLayout from "../layouts/GeneralPageLayout";
import MenubarSection from "../sections/documentation/MenubarSection";
import ShortcutSection from "../sections/documentation/ShortcutSection";

const sections = [
  { id: "shortcuts", component: ShortcutSection },
  { id: "menubar", component: MenubarSection },
];

export default function DocumentationPage() {
  return (
    <>
      <GeneralPageLayout sections={sections} />
    </>
  );
}

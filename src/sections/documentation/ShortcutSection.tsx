import DocumentationSectionComponent from "../../components/pages/documentation/DocumentationSectionComponent";
import shortcutGroups from "../../data/shortcuts.data";
import { DocumentationType } from "../../types/documentations.type";

const shortcutSectionProps: DocumentationType = {
  id: "shortcut",
  className: "px-20",
  title: "April's Shortcuts",
  description:
    "Master these shortcuts to navigate and control the app effortlessly.",
  footer:
    "Tip: Use these shortcuts to streamline your workflow and enhance your music experience!",
  groups: shortcutGroups,
};

export default function ShortcutSection() {
  return <DocumentationSectionComponent {...shortcutSectionProps} />;
}

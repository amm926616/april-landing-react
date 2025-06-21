import DocumentationSectionComponent from "../components/pages/documentation/DocumentationSectionComponent";
import menuBarGroups from "../data/menubar.data";
import { DocumentationType } from "../types/documentations.type";

const menubarSectionProps: DocumentationType = {
  id: "menubar",
  className: "px-20",
  title: "Menu Bar",
  description:
    "Navigate through April Music Player's comprehensive menu system with keyboard shortcuts and visual indicators. Each menu provides access to essential features for managing your music library, customizing your experience, and optimizing your workflow.",
  footer:
    "💡 Pro Tip: Items marked with ✓ are toggle settings that remember your preferences. Use keyboard shortcuts for quick access to frequently used features!",
  groups: menuBarGroups,
};

export default function MenubarSection() {
  return <DocumentationSectionComponent {...menubarSectionProps} />;
}

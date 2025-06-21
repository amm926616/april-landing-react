export type DocumentationSubsection = {
  title: string;
  shortcuts: string[][];
};

export type DocumentationGroup = {
  heading: string;
  description?: string;
  shortcuts?: string[][];
  subsections?: DocumentationSubsection[];
};

export type DocumentationType = {
  id: string;
  className?: string;
  title?: string;
  description?: string;
  footer?: string;
  groups: DocumentationGroup[];
};

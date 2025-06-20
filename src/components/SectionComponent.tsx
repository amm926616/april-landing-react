// src/components/SectionComponent.tsx
import { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export default function SectionComponent({
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

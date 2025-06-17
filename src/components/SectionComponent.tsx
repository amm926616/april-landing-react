type sectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export default function SectionComponent({
  id,
  className,
  children,
}: sectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

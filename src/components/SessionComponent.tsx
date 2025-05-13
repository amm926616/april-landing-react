import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  ...rest
}) => {
  return (
    <section
      id={id}
      className={twMerge(
        "scroll-mt-30 py-24 px-4 sm:px-8 md:px-16 lg:px-32 w-full max-w-7xl mx-auto",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;

import { forwardRef } from "react";

const FeaturesComponent = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  return (
    <div ref={ref} id="features" className="my-16 scroll-mt-24" {...props}>
      <h2 className="text-3xl font-bold text-center text-white">Features</h2>
      {/* ... */}
    </div>
  );
});

export default FeaturesComponent;

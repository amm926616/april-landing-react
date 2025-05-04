import { forwardRef } from "react";

const FeaturesComponent = forwardRef<HTMLDivElement>((ref) => {
  return (
    <div ref={ref} id="features" className="my-16">
      {/* Your feature content goes here */}
      <h2 className="text-3xl font-bold text-center text-white">Features</h2>
      {/* ... */}
    </div>
  );
});

export default FeaturesComponent;

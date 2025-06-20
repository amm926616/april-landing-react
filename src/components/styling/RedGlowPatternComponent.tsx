export default function RedGlowPatternComponent() {
  return (
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500 rounded-full mix-blend-overlay filter blur-xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-pink-500 rounded-full mix-blend-overlay filter blur-xl"></div>
    </div>
  );
}

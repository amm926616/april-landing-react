export default function HeroComponent() {
  return (
    <div className="flex flex-col justify-center items-center h-[160px] w-full bg-slate-500 my-2">
      <div className="text-red-500 text-xl font-bold font-caskaydia mb-2">
        Hero Component
      </div>
      <div className="btn-primary cursor-pointer">A new Button</div>
    </div>
  );
}

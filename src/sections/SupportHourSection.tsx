// src/sections/SupportHourSection.tsx
import { FaPhone, FaClock } from "react-icons/fa6";
import SectionComponent from "../components/SectionComponent";

interface SupportHourSectionProps {
  id: string;
  className?: string;
}

export default function SupportHourSection({
  id,
  className,
}: SupportHourSectionProps) {
  return (
    <SectionComponent id={id} className={className}>
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center mb-8">
      <FaClock className="text-3xl text-[var(--crimson)] mr-4" />
      <h2 className="text-3xl font-bold">Support Availability</h2>
    </div>

    <div className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Leave Us a Message Anytime</h3>
          <p className="text-gray-400">
            We’re always listening! Drop your message anytime,
            and we’ll get back to you as soon as we can. 💌
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">For Urgent Help</h3>
          <p className="text-gray-400 mb-4">
            Facing a critical issue? Contact us directly:
          </p>
          <div className="flex items-center">
            <FaPhone className="text-[var(--crimson)] mr-3" />
            <span className="font-mono">09 780 450 460</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</SectionComponent>

  );
}

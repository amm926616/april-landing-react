import { FaPhone } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
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
      <div className="mb-20">
        <div className="flex items-center mb-8">
          <FaClock className="text-3xl text-[var(--crimson)] mr-4" />
          <h2 className="text-3xl font-bold">Support Hours</h2>
        </div>

        <div className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">General Support</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-400">Monday-Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
              <p className="text-gray-400 mb-4">
                For critical issues affecting your service:
              </p>
              <div className="flex items-center">
                <FaPhone className="text-[var(--crimson)] mr-3" />
                <span className="font-mono">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}

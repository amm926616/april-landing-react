// src/sections/TeamSection.tsx
import { FaUsers } from "react-icons/fa";
import SectionComponent from "../components/SectionComponent";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  contact: string;
}

interface TeamSectionProps {
  id: string;
  className?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "Support Lead",
    image: "/team/john.jpg",
    contact: "john@april-music.com",
  },
  {
    name: "David",
    role: "Support Lead",
    image: "/team/david.jpg",
    contact: "david@april-music.com",
  },
  {
    name: "Lisa",
    role: "Co-Lead",
    image: "/team/Lisa.jpg",
    contact: "Lisa@april-music.com",
  },
  {
    name: "MMM",
    role: "Co-Lead",
    image: "/team/mmm.jpg",
    contact: "mmm@april-music.com",
  },
];

export default function TeamSection({ id, className }: TeamSectionProps) {
  return (
    <SectionComponent id={id} className={className}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <FaUsers className="text-3xl text-[var(--crimson)] mr-4" />
          <h2 className="text-3xl font-bold">Meet Our Support Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl p-6 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-700 overflow-hidden">
                {/* Team member image */}
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-[var(--crimson)] mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionComponent>
  );
}

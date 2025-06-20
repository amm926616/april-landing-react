// src/sections/ContactFormSection.tsx
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import SectionComponent from "../components/SectionComponent";

interface ContactFormSectionProps {
  id: string;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormSection({
  id,
  className,
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <SectionComponent id={id} className={className}>
      <div className="mb-10 max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <FaPaperPlane className="text-3xl text-[var(--crimson)] mr-4" />
          <h2 className="text-3xl font-bold">Send Us a Message</h2>
        </div>

        <div className="bg-[#1a1a24] border border-[#2e2e3a] rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-[#252532] border border-[#3a3a4a] rounded-lg px-4 py-3 text-white focus:border-[var(--crimson)] focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#252532] border border-[#3a3a4a] rounded-lg px-4 py-3 text-white focus:border-[var(--crimson)] focus:outline-none"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-[#252532] border border-[#3a3a4a] rounded-lg px-4 py-3 text-white focus:border-[var(--crimson)] focus:outline-none"
                placeholder="How can we help you?"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[var(--crimson)] hover:bg-[var(--crimson-dark)] text-white rounded-lg font-medium transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SectionComponent>
  );
}

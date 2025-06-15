import React from "react";
import { motion } from "framer-motion";

interface Plan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic playback controls",
      "Standard audio quality",
      "Limited playlists",
      "No ads"
    ]
  },
  {
    name: "Premium",
    price: "$9.99/month",
    features: [
      "High-quality audio",
      "Unlimited playlists",
      "Offline listening",
      "Custom themes",
      "No ads"
    ],
    isPopular: true
  },
  {
    name: "Pro",
    price: "$19.99/month",
    features: [
      "All Premium features",
      "Advanced audio processing",
      "Cloud sync",
      "Priority support",
      "Custom shortcuts"
    ]
  }
];

interface PricingSectionProps {
  id?: string;
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ id, className }) => {
  return (
    <section id={id} className={className + "py-20 bg-[var(--raven)]/90"}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[var(--crimson)] mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your music listening needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-[var(--raven)]/80 p-8 rounded-lg hover:bg-[var(--raven)]/70 transition-colors ${
                plan.isPopular ? 'border-4 border-[var(--crimson)] shadow-lg' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-[var(--crimson)] mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 text-gray-400">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 text-[var(--crimson)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 px-6 py-3 bg-[var(--crimson)] text-white rounded-full hover:bg-[var(--crimson)]/90 transition-colors">
                {plan.isPopular ? "Get Started" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

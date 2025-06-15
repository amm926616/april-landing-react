import { motion } from "framer-motion";

interface TestimonialsSectionProps {
  id?: string;
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ id, className }) => {
  const testimonials = [
    {
      quote: "April has completely transformed my language learning journey. I can now study lyrics in real-time while enjoying my favorite songs!",
      name: "Sarah Chen",
      role: "Language Learner",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "As a music enthusiast and language student, April is a game-changer. The ability to learn new languages through music is incredibly effective!",
      name: "Michael Kim",
      role: "Music & Language Enthusiast",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "I've never found a music player that combines entertainment and education so seamlessly. April makes learning new languages fun and engaging!",
      name: "Emma Rodriguez",
      role: "Student",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section id={id} className={`${className} py-20 bg-gradient-to-b from-[#0d0d12] to-[#1a1a24]`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-[var(--crimson)] mb-12"
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a24]/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2e2e3a] hover:border-[#e63946]/30"
            >
              <div className="relative mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-[#e63946] object-cover"
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-[#e63946] opacity-0"
                  whileHover={{ opacity: 0.3, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <blockquote className="text-gray-300 mb-4 text-lg italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="text-[#e63946] text-xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
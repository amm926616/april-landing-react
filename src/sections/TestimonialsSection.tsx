import { motion } from "framer-motion";

interface TestimonialsSectionProps {
  id?: string;
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  id,
  className,
}) => {
  const testimonials = [
    {
      quote:
        "April has completely transformed my language learning journey. I can now study lyrics in real-time while enjoying my favorite songs!",
      name: "Sarah Chen",
      role: "Language Learner",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      quote:
        "As a music enthusiast and language student, April is a game-changer. The ability to learn new languages through music is incredibly effective!",
      name: "Michael Kim",
      role: "Music & Language Enthusiast",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
    },
    {
      quote:
        "I've never found a music player that combines entertainment and education so seamlessly. April makes learning new languages fun and engaging!",
      name: "Emma Rodriguez",
      role: "Student",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
    },
  ];

  return (
    <section
      id={id}
      className={`${className} py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-20 w-64 h-64 bg-red-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it - hear from our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-red-500/30 relative overflow-hidden"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-6 text-7xl text-red-500/10 font-serif">
                "
              </div>

              <div className="relative mb-6">
                <div className="relative w-20 h-20 mx-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover border-4 border-gray-700"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-red-500/50 transition-all duration-300"></div>
                </div>
              </div>

              <blockquote className="text-gray-300 mb-6 text-lg italic relative z-10">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-white text-xl">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className={`text-xl ${i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
                    >
                      ★
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

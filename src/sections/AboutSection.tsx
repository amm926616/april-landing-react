import React from 'react';

interface AboutSectionProps {
  id?: string;
  className?: string;
}

const AboutSection = ({ id, className }: AboutSectionProps) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a24] ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/about-image.jpg" 
              alt="About our product" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              About Our Product
            </h2>
            <p className="text-xl text-gray-300">
              Our innovative solution is designed to revolutionize the way you work. 
              With cutting-edge technology and user-centric design, we provide a seamless experience 
              that enhances productivity and efficiency.
            </p>
            
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#e63946] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Advanced Technology
                  </h3>
                  <p className="text-gray-400">
                    Built with the latest technologies to ensure maximum performance and reliability.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#e63946] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    User-Friendly Design
                  </h3>
                  <p className="text-gray-400">
                    Intuitive interface that makes complex tasks simple and straightforward.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#e63946] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-gray-400">
                    Dedicated support team available around the clock to help you succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

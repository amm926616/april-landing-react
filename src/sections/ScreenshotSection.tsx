import image1 from "../assets/images/screenshots/Screenshot 2025-05-10 205551.png";
import image2 from "../assets/images/screenshots/Screenshot 2025-05-10 210243.png";


interface ScreenshotSectionProps {
  id?: string;
  className?: string;
}

const ScreenshotSection: React.FC<ScreenshotSectionProps> = ({ id, className }) => {
  return (
    <section id={id} className={className + "py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a24]"}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Product Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Screenshot 1 */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src={image1} 
              alt="App screenshot 1" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Beautiful and Intuitive Interface
            </h3>
            <p className="text-gray-300">
              Our application features a modern, clean interface that makes it easy to navigate and use. 
              Every feature is thoughtfully designed to provide the best user experience possible.
            </p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Responsive design for all devices</li>
              <li>Dark theme for better visibility</li>
              <li>Intuitive navigation</li>
            </ul>
          </div>

          {/* Screenshot 2 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Advanced Features
            </h3>
            <p className="text-gray-300">
              Access powerful features that help you get the most out of our application. 
              From advanced settings to custom configurations, we've got you covered.
            </p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Customizable settings</li>
              <li>Advanced analytics</li>
              <li>Real-time updates</li>
            </ul>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src={image2} 
              alt="App screenshot 2" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;

// for video explanation

import React from 'react';

interface DemoComponentProps {
  id?: string;
  className?: string;
}

const DemoComponent: React.FC<DemoComponentProps> = ({ id, className }) => {
  return (
    <section id={id} className={className + "py-20 px-4 sm:px-6 lg:px-8"}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Product Demo
        </h2>
        <div className="bg-[#1a1a24] rounded-2xl p-8">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            {/* Replace this iframe src with your actual YouTube video embed URL */}
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              See How It Works
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Watch our comprehensive demo video to see all the features in action. 
              Learn how to get the most out of our application and discover its full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoComponent;

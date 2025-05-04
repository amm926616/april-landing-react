import React, { useEffect, useRef, useState } from "react";

export interface HeroProps {
  scrollToFeatures: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToFeatures }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const typingIntervalRef = useRef<number | null>(null);
  const cursorIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const fullText = "Welcome to April Music Player";
    let currentIndex = 0;

    // Typing animation
    typingIntervalRef.current = window.setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        if (typingIntervalRef.current) {
          window.clearInterval(typingIntervalRef.current);
        }

        // Start cursor blinking after typing completes
        cursorIntervalRef.current = window.setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
      }
    }, 100);

    // Cleanup function
    return () => {
      if (typingIntervalRef.current) {
        window.clearInterval(typingIntervalRef.current);
      }
      if (cursorIntervalRef.current) {
        window.clearInterval(cursorIntervalRef.current);
      }
    };
  }, []);

  return (
    <section
      id="banner"
      className="relative min-h-screen flex items-center justify-center bg-[var(--raven)] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--raven) 0%, #1a1a24 100%)",
      }}
    >
      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        <div className="mb-6 min-h-[120px] md:min-h-[160px] flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {displayText}
            <span
              className={`ml-1 transition-opacity duration-100 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            >
              |
            </span>
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          April Music Player is more than a music app.
          <br />
          It is also a learning companion.
        </p>

        <div className="flex justify-center mb-12">
          <img
            src="/src/images/april-icon.png"
            alt="april-music-player"
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-lg animate-float"
            draggable="false"
          />
        </div>

        <button
          onClick={scrollToFeatures}
          className="inline-block px-8 py-3 bg-[var(--crimson)] text-white rounded-full font-medium hover:bg-[#0e0d0d] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--crimson)] focus:ring-opacity-50"
          aria-label="Scroll to features section"
        >
          Let's dive in!
        </button>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

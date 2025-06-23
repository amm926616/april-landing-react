import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import aprilHeroIcon from "/src/assets/images/april-icon.png";

export interface HeroProps {
  scrollToFeatures: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToFeatures }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const typingIntervalRef = useRef<number | null>(null);
  const cursorIntervalRef = useRef<number | null>(null);

  // Memoized music note particles data
  const musicNotes = useMemo(() => {
    const notes = ["♪", "♫", "♬", "♩", "♭", "♮", "♯"];
    return Array.from({ length: 25 }).map((_, i) => {
      const size = Math.random() * 16 + 8;
      return {
        id: i,
        note: notes[Math.floor(Math.random() * notes.length)],
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        yMovement: (Math.random() - 0.5) * 80,
        xMovement: (Math.random() - 0.5) * 40,
        duration: Math.random() * 15 + 10,
        opacity: Math.random() * 0.4 + 0.1,
        rotate: Math.random() * 360,
      };
    });
  }, []);

  useEffect(() => {
    const fullText = "Welcome to April Music Player";
    let currentIndex = 0;

    typingIntervalRef.current = globalThis.setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
        }
        cursorIntervalRef.current = globalThis.setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
      }
    }, 100);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, []);

  return (
    <section
      id="banner"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, var(--raven) 0%, #0a0a0f 100%)",
      }}
    >
      {/* Animated music note particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {musicNotes.map((note) => (
          <motion.div
            key={note.id}
            className="absolute text-[var(--crimson)]"
            style={{
              fontSize: `${note.size}px`,
              left: `${note.left}%`,
              top: `${note.top}%`,
              opacity: note.opacity,
              rotate: note.rotate,
            }}
            animate={{
              y: [0, note.yMovement, 0],
              x: [0, note.xMovement, 0],
              rotate: [note.rotate, note.rotate + 360],
              opacity: [note.opacity, note.opacity * 1.5, note.opacity],
            }}
            transition={{
              duration: note.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {note.note}
          </motion.div>
        ))}
      </div>

      {/* Glassy overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/30 to-black/50 backdrop-blur-[1px]" />

      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        <div className="mb-6 min-h-[120px] md:min-h-[160px] flex items-center justify-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayText}
            <span
              className={`ml-1 transition-opacity duration-100 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            >
              |
            </span>
          </motion.h2>
        </div>

        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          April Music Player is more than a music app.
          <br />
          It is also a learning companion.
        </motion.p>

        <div className="flex justify-center mb-12">
          <motion.img
            src={aprilHeroIcon}
            alt="april-music-player"
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-lg"
            draggable="false"
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: 1,
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: 0.4 },
            }}
          />
        </div>

        <motion.button
          onClick={scrollToFeatures}
          className="relative px-8 py-3 bg-[var(--crimson)] text-white rounded-full font-medium shadow-lg overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(230, 57, 70, 0.7)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Let's dive in!</span>
          {/* Button glow effect */}
          <motion.span
            className="absolute inset-0 bg-[var(--crimson)] opacity-0 rounded-full"
            whileHover={{
              opacity: 0.3,
              scale: 1.5,
              transition: { duration: 0.3 },
            }}
          />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

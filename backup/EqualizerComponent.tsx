import { motion } from 'framer-motion';

const Equalizer = () => (
  <div className="flex items-end h-8 space-x-1">
    {[3, 6, 4, 8, 5, 7, 4].map((height, i) => (
      <motion.div
        key={i}
        className="w-1 bg-[var(--crimson)]"
        animate={{
          height: [height, height/2, height],
        }}
        transition={{
          duration: 0.5 + i * 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ height: `${height}px` }}
      />
    ))}
  </div>
);

export default Equalizer;

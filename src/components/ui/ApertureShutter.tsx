import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const ApertureShutter = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsClosing(true), 500);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      >
        {/* Shutter Ring */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
              scale: isClosing ? 0 : 1,
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.5, ease: "backIn" }
            }}
            className="absolute inset-0 border-2 border-accent-gold/30 rounded-full"
          />
          
          <motion.div
            animate={{
              rotate: -360,
              scale: isClosing ? 0 : 0.9,
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.5, ease: "backIn", delay: 0.1 }
            }}
            className="absolute inset-4 border border-white/10 rounded-full"
          />

          {/* Inner Shutter Blades (Visualizing with a ring that tightens) */}
          <motion.div
            animate={{
              width: isClosing ? '100%' : `${progress}%`,
              height: isClosing ? '100%' : `${progress}%`,
              opacity: isClosing ? [1, 0] : 1,
            }}
            className="absolute bg-accent-gold/10 rounded-full blur-xl"
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />

          {/* Percentage */}
          <motion.div 
            animate={{ opacity: isClosing ? 0 : 1 }}
            className="text-white font-serif text-2xl tracking-widest relative z-10"
          >
            {Math.round(progress)}%
          </motion.div>
        </div>

        {/* Explosive Shockwave (shown when isClosing is true) */}
        {isClosing && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-64 h-64 border-4 border-accent-gold rounded-full"
          />
        )}

        {/* Particle Shockwave Mockup */}
        {isClosing && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{ 
              scale: Math.random() * 2,
              x: (Math.random() - 0.5) * 1000, 
              y: (Math.random() - 0.5) * 1000,
              opacity: 0 
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-2 h-2 bg-accent-gold rounded-full"
          />
        ))}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-12 text-gray-500 text-xs uppercase tracking-[0.3em]"
        >
          Initializing Zero-Point Aperture
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ApertureShutter;

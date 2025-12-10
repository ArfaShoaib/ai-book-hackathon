import { motion } from "framer-motion";
import styles from "./FloatingOrbs.module.css";

export const FloatingOrbs = () => {
  return (
    <div className={styles.orbsContainer}>
      {/* Primary orb */}
      <motion.div
        className={styles.primaryOrb}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Accent orb */}
      <motion.div
        className={styles.accentOrb}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Small floating particles */}
      <div className={styles.particlesContainer}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./GridPattern.module.css";

export const GridPattern = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.gridPatternContainer}>
      {/* Animated primary grid */}
      <motion.div
        className={styles.primaryGrid}
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary fine grid for depth */}
      <div className={styles.secondaryGrid} />

      {/* Animated diagonal lines */}
      <motion.div
        className={styles.diagonalGrid}
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Radial gradient glow effect - moves with mouse */}
      <motion.div
        className={styles.mouseGlow}
        style={{
          left: mousePosition.x - 350,
          top: mousePosition.y - 350,
        }}
        animate={{
          left: mousePosition.x - 350,
          top: mousePosition.y - 350,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
        }}
      />

      {/* Animated accent glow */}
      <motion.div
        className={styles.accentGlow}
      />

      {/* Pulsing center glow */}
      <motion.div
        className={styles.centerGlow}
      />

      {/* Animated dots - subtle interactive elements */}
      <div className={styles.dotsContainer}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={styles.dot}
          />
        ))}
      </div>

      {/* Main gradient overlay */}
      <div className={styles.mainGradient} />

      {/* Radial fade */}
      <div className={styles.radialFade} />

      {/* Top accent gradient */}
      <motion.div
        className={styles.topAccent}
      />
    </div>
  );
};

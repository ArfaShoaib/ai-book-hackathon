import { motion } from "framer-motion";
import styles from "./FeatureBadge.module.css";

export const FeatureBadge = ({ icon, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay, 
        duration: 0.5, 
        type: "spring", 
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.2 } 
      }}
      className={styles.badge}
    >
      <span className={styles.badgeContent}>
        <span className={styles.badgeIcon}>{icon}</span>
        {label}
      </span>
    </motion.div>
  );
};

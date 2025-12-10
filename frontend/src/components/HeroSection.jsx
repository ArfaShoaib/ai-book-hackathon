import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, Code2, Zap, Brain, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { FeatureBadge } from "./FeatureBadge";
import { GridPattern } from "./GridPattern";
import { FloatingOrbs } from "./FloatingOrbs";
import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";
import buttonStyles from "./EnhancedButton.module.css";

const features = [
  { icon: "🤖", label: "AI Concepts" },
  { icon: "📚", label: "LLM Fundamentals" },
  { icon: "⚡", label: "Practical Applications" },
  { icon: "🔧", label: "Engineering Best Practices" },
  { icon: "🚀", label: "Production Systems" },
];

const stats = [
  { value: "500+", label: "Pages of Content" },
  { value: "50+", label: "AI Concepts" },
  { value: "100+", label: "Code Examples" },
];

const codeSnippets = [
  "const model = await loadLLM('gpt-4');",
  "const response = await model.generate(prompt);",
  "const embeddings = vectorize(documents);",
  "const rag = new RAGSystem(documents);",
];

export const HeroSection = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.heroSection}>
      <GridPattern />
      <FloatingOrbs />
      
      <div className={styles.container}>
        <motion.div
          className={styles.contentWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pre-title badge with enhanced design */}
          <motion.div
            variants={itemVariants}
            className={styles.badge}
          >
            <motion.div
              className={styles.badgeIcon}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} />
            </motion.div>
            <span className={styles.badgeText}>
              The Complete Guide to AI Engineering
            </span>
          </motion.div>

          {/* Main title with gradient animation */}
          <motion.div variants={itemVariants}>
            <h1 className={styles.title}>
              <span className={styles.titlePrimary}>Master</span>
              <br />
              <span className={styles.titleGradient}>
                AI Engineering
              </span>
            </h1>
          </motion.div>

          {/* Enhanced subtitle */}
          <motion.p
            variants={itemVariants}
            className={styles.subtitle}
          >
            From{" "}
            <span className={styles.subtitleHighlight}>LLM fundamentals</span> to{" "}
            <span className={styles.subtitleAccent}>production systems</span>. Learn
            how to build, deploy, and scale intelligent AI applications that solve real-world
            problems.
          </motion.p>

          {/* Interactive code snippet showcase */}
          <motion.div
            variants={itemVariants}
            className={styles.codeSection}
          >
            <div className={styles.codeHeader}>
              <Code2 className={styles.codeIcon} />
              <span className={styles.codeLabel}>Code Example</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.code
                key={currentSnippet}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className={styles.codeContent}
              >
                {codeSnippets[currentSnippet]}
              </motion.code>
            </AnimatePresence>
          </motion.div>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            variants={itemVariants}
            className={styles.buttonsContainer}
          >
            <a href="/docs/intro" className={buttonStyles.buttonLink}>
              <motion.button 
                className={buttonStyles.heroButton}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className={buttonStyles.buttonIcon} />
                Start Reading
                <motion.div 
                  className={buttonStyles.arrowIcon}
                >
                  <ArrowRight className={buttonStyles.buttonIcon} />
                </motion.div>
              </motion.button>
            </a>
            <motion.button 
              className={buttonStyles.glassButton}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Rocket className={buttonStyles.buttonIcon} />
              View on GitHub
            </motion.button>
          </motion.div>

          {/* Stats section */}
          <motion.div
            variants={itemVariants}
            className={styles.statsContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={styles.statItem}
                whileHover={{ scale: 1.05 }}
                style={{ "--index": index }}
              >
                <motion.div
                  className={styles.statValue}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className={styles.statLabel}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature badges with enhanced animations */}
          <motion.div
            variants={itemVariants}
            className={styles.featuresContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <FeatureBadge
                  icon={feature.icon}
                  label={feature.label}
                  delay={1.2 + index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className={styles.scrollIndicator}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={styles.scrollWheel}
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className={styles.scrollDot}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout
      title="AI Engineering Book"
      description="Learn AI, LLMs & Engineering"
    >
      <div className="hero-section min-h-screen flex flex-col items-center justify-center text-center gap-6 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold"
        >
          AI Engineering Book
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl max-w-2xl"
        >
          A complete practical guide to building modern AI applications, LLM systems,
          and intelligent workflows.
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          href="/docs/intro"
          className="px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Start Reading →
        </motion.a>

        {/* Floating animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
            🤖 AI Concepts
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
            📚 LLM Fundamentals
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
            ⚡ Practical Applications
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

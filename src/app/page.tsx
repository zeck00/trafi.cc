"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "@/components/landing/Hero";
import { FlowContainer } from "@/components/flow/FlowContainer";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!started ? (
        <motion.div
          key="hero"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Hero onStart={() => setStarted(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="flow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FlowContainer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

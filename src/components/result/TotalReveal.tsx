"use client";

import { motion } from "framer-motion";
import { totalRevealVariants } from "@/lib/animations";
import { useCountUp } from "@/hooks/useCountUp";

export function TotalReveal({ total }: { total: number }) {
  const displayValue = useCountUp(total, 2000, 600);

  return (
    <motion.section
      className="min-h-dvh flex flex-col items-center justify-center px-5 text-center"
      initial="hidden"
      animate="visible"
      variants={totalRevealVariants}
    >
      <motion.p
        className="text-lg text-text-muted mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Your data is worth
      </motion.p>

      <div className="font-[family-name:var(--font-mono)]">
        <span className="text-6xl sm:text-8xl font-bold text-accent tabular-nums">
          ${displayValue.toFixed(2)}
        </span>
        <motion.span
          className="text-2xl sm:text-3xl text-text-muted ml-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.4 }}
        >
          /year
        </motion.span>
      </div>

      <motion.p
        className="text-lg text-text-muted mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
      >
        to advertisers.
      </motion.p>

      <motion.div
        className="mt-12 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.5 }}
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block text-2xl"
        >
          ↓
        </motion.span>
      </motion.div>
    </motion.section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { totalRevealVariants } from "@/lib/animations";
import { useCountUp } from "@/hooks/useCountUp";

export function LifetimeProjection({
  value,
  years,
}: {
  value: number;
  years: number;
}) {
  const [inView, setInView] = useState(false);
  const displayValue = useCountUp(value, 2000, 300, inView);

  return (
    <motion.section
      className="py-16 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={totalRevealVariants}
      onViewportEnter={() => setInView(true)}
    >
      <p className="text-lg text-text-muted mb-3">
        Over your lifetime, advertisers will earn
      </p>
      <div className="font-[family-name:var(--font-mono)]">
        <span className="text-5xl sm:text-7xl font-bold text-accent tabular-nums">
          ${displayValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}
        </span>
      </div>
      <p className="text-text-muted mt-3">
        from your data
        <span className="text-xs block mt-1 opacity-60">
          (assuming {years} more years of internet use)
        </span>
      </p>
    </motion.section>
  );
}

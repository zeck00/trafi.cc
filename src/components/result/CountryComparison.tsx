"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type { CountryComparisonEntry } from "@/types";

export function CountryComparison({
  data,
}: {
  data: CountryComparisonEntry[];
}) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-4">
        You vs the world
      </h3>
      <div className="space-y-3">
        {data.map((entry) => (
          <motion.div key={entry.country} variants={fadeInUp}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-text-primary flex items-center gap-2">
                <span>{entry.flag}</span>
                {entry.country}
                {entry.isUser && (
                  <span className="text-xs text-accent font-medium">
                    ← You
                  </span>
                )}
              </span>
              <span className="text-sm font-bold font-[family-name:var(--font-mono)] tabular-nums text-text-muted">
                ${entry.value.toFixed(2)}
              </span>
            </div>
            <div className="h-2 rounded-full bg-primary/15 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${entry.isUser ? "bg-accent" : "bg-primary/60"}`}
                initial={{ width: 0 }}
                whileInView={{
                  width: `${maxValue > 0 ? (entry.value / maxValue) * 100 : 0}%`,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

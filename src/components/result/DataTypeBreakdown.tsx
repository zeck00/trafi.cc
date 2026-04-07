"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type { DataTypeResult } from "@/types";

const typeIcons: Record<string, string> = {
  location: "📍",
  browsing: "🔍",
  purchase_intent: "🛒",
  social_graph: "👥",
};

export function DataTypeBreakdown({ data }: { data: DataTypeResult[] }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-4">
        What they&apos;re buying
      </h3>
      <div className="space-y-4">
        {data.map((d) => (
          <motion.div key={d.type} variants={fadeInUp}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-text-primary flex items-center gap-2">
                <span>{typeIcons[d.type]}</span>
                {d.label}
              </span>
              <span className="text-sm font-bold text-text-muted font-[family-name:var(--font-mono)] tabular-nums">
                ${d.dollarValue.toFixed(2)}
              </span>
            </div>
            <div className="h-2 rounded-full bg-primary/15 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${d.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              />
            </div>
            <p className="text-xs text-text-muted mt-0.5">
              {d.percentage.toFixed(0)}% of your data value
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

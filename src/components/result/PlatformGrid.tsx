"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, cardSlideIn } from "@/lib/animations";
import type { PlatformResult } from "@/types";
import { PlatformCard } from "./PlatformCard";

const INITIAL_COUNT = 5;

export function PlatformGrid({ platforms }: { platforms: PlatformResult[] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = platforms.length > INITIAL_COUNT;
  const visible = expanded ? platforms : platforms.slice(0, INITIAL_COUNT);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-4">
        Where your value comes from
      </h3>
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {visible.map((p) => (
            <motion.div
              key={p.platform.id}
              variants={cardSlideIn}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              layout
            >
              <PlatformCard {...p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {hasMore && (
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 w-full py-2.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer rounded-lg border border-border hover:bg-surface"
          whileTap={{ scale: 0.98 }}
        >
          {expanded
            ? "Show less"
            : `View all ${platforms.length} platforms`}
        </motion.button>
      )}
    </motion.section>
  );
}

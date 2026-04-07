"use client";

import { motion } from "framer-motion";
import { staggerContainer, cardSlideIn } from "@/lib/animations";
import type { PlatformResult } from "@/types";
import { PlatformCard } from "./PlatformCard";

export function PlatformGrid({ platforms }: { platforms: PlatformResult[] }) {
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
        {platforms.map((p) => (
          <motion.div key={p.platform.id} variants={cardSlideIn}>
            <PlatformCard {...p} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

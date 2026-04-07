"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { Platform } from "@/types";

interface PlatformChipProps {
  platform: Platform;
  selected: boolean;
  onToggle: () => void;
}

export function PlatformChip({
  platform,
  selected,
  onToggle,
}: PlatformChipProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "w-20 h-24 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all duration-200",
        selected
          ? "bg-surface border-primary ring-2 ring-primary/50"
          : "bg-surface border-border hover:border-text-muted/20"
      )}
    >
      <div
        className={clsx(
          "w-10 h-10 flex items-center justify-center text-2xl transition-all duration-200",
          selected ? "grayscale-0 opacity-100" : "grayscale opacity-50"
        )}
      >
        {platform.logo}
      </div>
      <span
        className={clsx(
          "text-[10px] font-medium truncate w-full text-center px-1 transition-colors",
          selected ? "text-text-primary" : "text-text-muted"
        )}
      >
        {platform.name}
      </span>
    </motion.button>
  );
}

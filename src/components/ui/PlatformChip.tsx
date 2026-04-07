"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { Platform } from "@/types";

interface PlatformChipProps {
  platform: Platform;
  selected: boolean;
  onToggle: () => void;
}

export function PlatformChip({ platform, selected, onToggle }: PlatformChipProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "w-[72px] h-[84px] rounded-lg border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200",
        selected
          ? "bg-primary/10 border-primary ring-1 ring-primary/40"
          : "bg-surface border-border hover:border-text-muted/20"
      )}
    >
      <div
        className={clsx(
          "w-8 h-8 flex items-center justify-center text-xl transition-all duration-200",
          selected ? "grayscale-0 opacity-100" : "grayscale opacity-40"
        )}
      >
        {platform.logo}
      </div>
      <span
        className={clsx(
          "text-[9px] font-medium truncate w-full text-center px-1 transition-colors leading-tight",
          selected ? "text-text-primary" : "text-text-muted"
        )}
      >
        {platform.name}
      </span>
    </motion.button>
  );
}

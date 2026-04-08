"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { Platform } from "@/types";
import { useTheme } from "@/hooks/useTheme";

// Black/dark SVGs that need inversion in dark mode
const DARK_INVERT = new Set([
  "x", "tiktok", "threads", "notion", "uber", "bereal", "peloton",
  "hinge", "disney", "shein",
]);

// Multicolor logos with dark variant files (src swap, not filter)
const DARK_VARIANTS: Record<string, string> = {
  amazon: "/logos/amazon-dark.svg",
};

interface PlatformChipProps {
  platform: Platform;
  selected: boolean;
  onToggle: () => void;
}

export function PlatformChip({ platform, selected, onToggle }: PlatformChipProps) {
  const { resolved } = useTheme();
  const isDark = resolved === "dark";

  const logoSrc =
    isDark && DARK_VARIANTS[platform.id]
      ? DARK_VARIANTS[platform.id]
      : platform.logo;

  const needsInvert = isDark && DARK_INVERT.has(platform.id);

  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative w-full h-[84px] lg:h-[92px] rounded-lg border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all duration-200",
        selected
          ? "bg-primary/10 border-primary ring-1 ring-primary/40"
          : "bg-surface border-border hover:border-text-muted/30"
      )}
    >
      {selected && (
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}
      <div className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center shrink-0">
        <img
          src={logoSrc}
          alt={platform.name}
          className={clsx(
            "max-w-[28px] max-h-[28px] lg:max-w-[32px] lg:max-h-[32px] object-contain",
            needsInvert && "logo-invert"
          )}
          loading="lazy"
        />
      </div>
      <span
        className={clsx(
          "text-[9px] lg:text-[10px] font-medium truncate w-full text-center px-1 leading-tight",
          selected ? "text-text-primary" : "text-text-muted"
        )}
      >
        {platform.name}
      </span>
    </motion.button>
  );
}

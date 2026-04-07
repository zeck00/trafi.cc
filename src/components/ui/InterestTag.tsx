"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export interface Interest {
  id: string;
  label: string;
  emoji: string;
}

interface InterestTagProps {
  interest: Interest;
  selected: boolean;
  onToggle: () => void;
}

export function InterestTag({ interest, selected, onToggle }: InterestTagProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200",
        selected
          ? "border-primary bg-primary/10 text-primary"
          : "border-border text-text-muted hover:border-text-muted/30 hover:text-text-primary"
      )}
    >
      <span>{interest.emoji}</span>
      <span>{interest.label}</span>
    </motion.button>
  );
}

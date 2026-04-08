"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";

export function Hero({ onStart }: { onStart: () => void }) {
  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-sm font-bold font-[family-name:var(--font-heading)] text-text-muted tracking-wider">
          trafi.cc
        </span>
        <div className="flex items-center gap-3">
          <Link
            href="/methodology"
            className="text-xs text-text-muted hover:text-text-primary transition-colors"
          >
            Methodology
          </Link>
          <Link
            href="/faq"
            className="text-xs text-text-muted hover:text-text-primary transition-colors"
          >
            FAQ
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] tracking-tight">
            You ARE
            <br />
            <span className="text-primary">traffic.</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-text-muted mt-6 max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Find out how much your data is worth to Google, Meta, TikTok, and 40+
          platforms — based on real published ad rates.
        </motion.p>

        <motion.button
          onClick={onStart}
          className="mt-10 px-8 py-3.5 rounded-full bg-accent text-white font-medium text-base hover:brightness-110 transition-all cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          whileTap={{ scale: 0.97 }}
        >
          Find out my worth
        </motion.button>

        <motion.div
          className="mt-12 flex items-center gap-6 text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Stat value="$2–50" label="per year" />
          <div className="w-px h-8 bg-border" />
          <Stat value="50+" label="platforms" />
          <div className="w-px h-8 bg-border" />
          <Stat value="100%" label="free" />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="pb-5 text-xs text-text-muted text-center whitespace-nowrap flex items-center justify-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="https://ziad.us" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">About</a>
        <span className="opacity-30">·</span>
        <a href="https://pay.ziina.com/zeq0" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Support</a>
        <span className="opacity-30">·</span>
        <a href="https://github.com/zeck00/trafi.cc" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
      </motion.div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary">
        {value}
      </div>
      <div className="text-xs">{label}</div>
    </div>
  );
}

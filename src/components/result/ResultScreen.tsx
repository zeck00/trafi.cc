"use client";

import { motion } from "framer-motion";
import type { CalculationResult } from "@/types";
import { TotalReveal } from "./TotalReveal";
import { PlatformGrid } from "./PlatformGrid";
import { DataTypeBreakdown } from "./DataTypeBreakdown";
import { CountryComparison } from "./CountryComparison";
import { LifetimeProjection } from "./LifetimeProjection";
import { PriceTagSticker } from "./PriceTagSticker";
import { fadeInUp } from "@/lib/animations";

interface ResultScreenProps {
  result: CalculationResult;
  onReset: () => void;
}

export function ResultScreen({ result, onReset }: ResultScreenProps) {
  return (
    <div className="min-h-dvh">
      <TotalReveal total={result.totalAnnual} />

      <div className="max-w-lg lg:max-w-2xl mx-auto w-full px-5 space-y-16 pb-20">
        <PlatformGrid platforms={result.platforms} />
        <DataTypeBreakdown data={result.dataTypeBreakdown} />
        <CountryComparison data={result.countryComparison} />
        <LifetimeProjection
          value={result.lifetimeValue}
          years={result.yearsRemaining}
        />
        <PriceTagSticker total={result.totalAnnual} />

        <motion.div
          className="text-center pt-8 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <button
            onClick={onReset}
            className="text-sm text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            Start over
          </button>
          <div className="flex items-center justify-center gap-5 text-xs text-text-muted pt-4">
            <a href="https://ziad.us" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">About</a>
            <span className="opacity-30">·</span>
            <a href="https://pay.ziina.com/zeq0" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Support</a>
            <span className="opacity-30">·</span>
            <a href="https://github.com/zeck00/trafi.cc" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
            <span className="opacity-30">·</span>
            <a href="/methodology" className="hover:text-text-primary transition-colors">How it works</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

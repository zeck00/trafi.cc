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

      <div className="max-w-lg mx-auto w-full px-5 space-y-16 pb-20">
        <PlatformGrid platforms={result.platforms} />
        <DataTypeBreakdown data={result.dataTypeBreakdown} />
        <CountryComparison data={result.countryComparison} />
        <LifetimeProjection
          value={result.lifetimeValue}
          years={result.yearsRemaining}
        />
        <PriceTagSticker total={result.totalAnnual} />

        <motion.div
          className="text-center pt-8"
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
        </motion.div>
      </div>
    </div>
  );
}

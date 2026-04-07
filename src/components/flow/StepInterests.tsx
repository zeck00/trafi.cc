"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useFlowState, useFlowDispatch } from "@/hooks/useFlowState";
import { InterestTag } from "@/components/ui/InterestTag";
import { interests } from "@/data/interests";

export function StepInterests() {
  const { interests: selected } = useFlowState();
  const dispatch = useFlowDispatch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)]">
          What are you into?
        </h2>
        <p className="text-text-muted mt-1">
          Select your interests (optional)
        </p>
      </div>

      <motion.div
        className="flex flex-wrap gap-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {interests.map((interest) => (
          <motion.div key={interest.id} variants={staggerItem}>
            <InterestTag
              interest={interest}
              selected={selected.includes(interest.id)}
              onToggle={() =>
                dispatch({ type: "TOGGLE_INTEREST", interest: interest.id })
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

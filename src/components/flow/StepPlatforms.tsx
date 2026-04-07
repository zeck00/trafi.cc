"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useFlowState, useFlowDispatch } from "@/hooks/useFlowState";
import { PlatformChip } from "@/components/ui/PlatformChip";
import { platforms, platformCategories } from "@/data/platforms";

export function StepPlatforms() {
  const { selectedPlatforms } = useFlowState();
  const dispatch = useFlowDispatch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)]">
          What do you use?
        </h2>
        <p className="text-text-muted mt-1">Select your platforms</p>
      </div>

      <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-1">
        {platformCategories.map((cat) => {
          const catPlatforms = platforms.filter((p) => p.category === cat.id);
          if (catPlatforms.length === 0) return null;
          return (
            <div key={cat.id}>
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                {cat.label}
              </p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {catPlatforms.map((platform) => (
                  <motion.div key={platform.id} variants={staggerItem}>
                    <PlatformChip
                      platform={platform}
                      selected={selectedPlatforms.includes(platform.id)}
                      onToggle={() =>
                        dispatch({
                          type: "TOGGLE_PLATFORM",
                          id: platform.id,
                        })
                      }
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

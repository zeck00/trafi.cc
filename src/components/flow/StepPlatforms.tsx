"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useFlowState, useFlowDispatch } from "@/hooks/useFlowState";
import { PlatformChip } from "@/components/ui/PlatformChip";
import { platforms, platformCategories } from "@/data/platforms";

export function StepPlatforms() {
  const { selectedPlatforms } = useFlowState();
  const dispatch = useFlowDispatch();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return platforms;
    const q = search.toLowerCase();
    return platforms.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [search]);

  const filteredCategories = useMemo(() => {
    return platformCategories.filter((cat) =>
      filtered.some((p) => p.category === cat.id)
    );
  }, [filtered]);

  function toggleCategory(categoryId: string) {
    const catPlatforms = filtered.filter((p) => p.category === categoryId);
    const allSelected = catPlatforms.every((p) =>
      selectedPlatforms.includes(p.id)
    );
    for (const p of catPlatforms) {
      const isSelected = selectedPlatforms.includes(p.id);
      if (allSelected && isSelected) {
        dispatch({ type: "TOGGLE_PLATFORM", id: p.id });
      } else if (!allSelected && !isSelected) {
        dispatch({ type: "TOGGLE_PLATFORM", id: p.id });
      }
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)]">
          What do you use?
        </h2>
        <p className="text-text-muted mt-1">Select your platforms</p>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search platforms..."
          className="w-full bg-surface border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/50 focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {/* Selected count */}
      {selectedPlatforms.length > 0 && (
        <p className="text-xs text-primary font-medium">
          {selectedPlatforms.length} platform
          {selectedPlatforms.length !== 1 ? "s" : ""} selected
        </p>
      )}

      {/* Platform grid */}
      <div className="space-y-4 max-h-[52vh] overflow-y-auto pr-1">
        {filteredCategories.map((cat) => {
          const catPlatforms = filtered.filter((p) => p.category === cat.id);
          const allSelected = catPlatforms.every((p) =>
            selectedPlatforms.includes(p.id)
          );
          return (
            <div key={cat.id}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  {cat.label}
                </p>
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="text-[10px] text-primary hover:underline cursor-pointer"
                >
                  {allSelected ? "Deselect all" : "Select all"}
                </button>
              </div>
              <motion.div
                className="flex flex-wrap gap-1.5"
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
                        dispatch({ type: "TOGGLE_PLATFORM", id: platform.id })
                      }
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
        {filteredCategories.length === 0 && (
          <p className="text-sm text-text-muted text-center py-8">
            No platforms match &ldquo;{search}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}

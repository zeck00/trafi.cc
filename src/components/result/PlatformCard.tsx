"use client";

import clsx from "clsx";
import type { PlatformResult } from "@/types";

const DARK_INVERT_IDS = new Set([
  "x", "tiktok", "threads", "notion", "uber", "bereal", "peloton",
]);

export function PlatformCard({ platform, annualValue, proportion }: PlatformResult) {
  return (
    <div className="bg-surface rounded-xl p-4 border border-border flex items-center gap-4">
      <img
        src={platform.logo}
        alt={platform.name}
        className={clsx("w-8 h-8 object-contain shrink-0", DARK_INVERT_IDS.has(platform.id) && "logo-invert")}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-text-primary truncate">
            {platform.name}
          </span>
          <span className="text-sm font-bold text-accent font-[family-name:var(--font-mono)] tabular-nums shrink-0">
            ${annualValue.toFixed(2)}
          </span>
        </div>
        <div className="mt-1.5 h-1 rounded-full bg-primary/15 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
            style={{ width: `${proportion * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

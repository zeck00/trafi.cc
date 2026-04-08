"use client";

import clsx from "clsx";
import type { PlatformResult } from "@/types";
import { useTheme } from "@/hooks/useTheme";

const DARK_INVERT = new Set([
  "x", "tiktok", "threads", "notion", "uber", "bereal", "peloton",
  "hinge", "disney", "shein",
]);

const DARK_VARIANTS: Record<string, string> = {
  amazon: "/logos/amazon-dark.svg",
};

export function PlatformCard({ platform, annualValue, proportion }: PlatformResult) {
  const { resolved } = useTheme();
  const isDark = resolved === "dark";

  const logoSrc =
    isDark && DARK_VARIANTS[platform.id]
      ? DARK_VARIANTS[platform.id]
      : platform.logo;

  const needsInvert = isDark && DARK_INVERT.has(platform.id);

  return (
    <div className="bg-surface rounded-xl p-4 border border-border flex items-center gap-4">
      <img
        src={logoSrc}
        alt={platform.name}
        className={clsx("w-8 h-8 object-contain shrink-0", needsInvert && "logo-invert")}
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

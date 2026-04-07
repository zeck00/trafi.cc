"use client";

import clsx from "clsx";
import type { DeviceType } from "@/types";

const devices: { value: DeviceType; label: string }[] = [
  { value: "ios", label: "iOS" },
  { value: "android", label: "Android" },
  { value: "desktop", label: "Desktop" },
];

interface DeviceToggleProps {
  value: DeviceType | null;
  onChange: (device: DeviceType) => void;
}

export function DeviceToggle({ value, onChange }: DeviceToggleProps) {
  return (
    <div className="flex bg-surface rounded-lg p-1 border border-border">
      {devices.map((d) => (
        <button
          key={d.value}
          onClick={() => onChange(d.value)}
          className={clsx(
            "flex-1 px-4 py-2.5 rounded-md text-sm font-medium transition-all cursor-pointer",
            value === d.value
              ? "bg-primary text-white"
              : "text-text-muted hover:text-text-primary"
          )}
        >
          {d.label}
        </button>
      ))}
    </div>
  );
}

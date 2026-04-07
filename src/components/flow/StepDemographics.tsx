"use client";

import { useFlowState, useFlowDispatch } from "@/hooks/useFlowState";
import { DeviceToggle } from "@/components/ui/DeviceToggle";
import { countries } from "@/data/countries";
import type { AgeRange } from "@/types";

const ageRanges: { value: AgeRange; label: string }[] = [
  { value: "13-17", label: "13–17" },
  { value: "18-24", label: "18–24" },
  { value: "25-34", label: "25–34" },
  { value: "35-44", label: "35–44" },
  { value: "45-54", label: "45–54" },
  { value: "55-64", label: "55–64" },
  { value: "65+", label: "65+" },
];

export function StepDemographics() {
  const { ageRange, country, device } = useFlowState();
  const dispatch = useFlowDispatch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)]">
          Tell us about you
        </h2>
        <p className="text-text-muted mt-1">This affects your ad value</p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">
            Age Range
          </label>
          <select
            value={ageRange ?? ""}
            onChange={(e) =>
              dispatch({ type: "SET_AGE", age: e.target.value as AgeRange })
            }
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary focus:outline-none appearance-none cursor-pointer"
          >
            <option value="" disabled>
              Select age range
            </option>
            {ageRanges.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">
            Country
          </label>
          <select
            value={country ?? ""}
            onChange={(e) =>
              dispatch({ type: "SET_COUNTRY", country: e.target.value })
            }
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary focus:outline-none appearance-none cursor-pointer"
          >
            <option value="" disabled>
              Select country
            </option>
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">
            Primary Device
          </label>
          <DeviceToggle
            value={device}
            onChange={(d) => dispatch({ type: "SET_DEVICE", device: d })}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo } from "react";
import { useFlowState, useFlowDispatch } from "@/hooks/useFlowState";
import { DeviceToggle } from "@/components/ui/DeviceToggle";
import { Dropdown } from "@/components/ui/Dropdown";
import { countries } from "@/data/countries";
import type { AgeRange } from "@/types";

const ageOptions = [
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

  const countryOptions = useMemo(
    () =>
      countries.map((c) => ({
        value: c.code,
        label: `${c.flag}  ${c.name}`,
      })),
    []
  );

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
          <Dropdown
            options={ageOptions}
            value={ageRange}
            onChange={(v) =>
              dispatch({ type: "SET_AGE", age: v as AgeRange })
            }
            placeholder="Select age range"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">
            Country
          </label>
          <Dropdown
            options={countryOptions}
            value={country}
            onChange={(v) => dispatch({ type: "SET_COUNTRY", country: v })}
            placeholder="Select country"
            searchable
          />
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

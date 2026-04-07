"use client";

import clsx from "clsx";

interface StepNavigationProps {
  step: number;
  canNext: boolean;
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
}

export function StepNavigation({
  step,
  canNext,
  onBack,
  onNext,
  nextLabel = "Next",
}: StepNavigationProps) {
  return (
    <div className="flex items-center justify-between pt-6">
      {step > 0 ? (
        <button
          onClick={onBack}
          className="px-5 py-2.5 text-sm font-medium text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          Back
        </button>
      ) : (
        <div />
      )}
      <button
        onClick={onNext}
        disabled={!canNext}
        className={clsx(
          "px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer",
          canNext
            ? "bg-accent text-background hover:brightness-110"
            : "bg-surface text-text-muted cursor-not-allowed opacity-50"
        )}
      >
        {nextLabel}
      </button>
    </div>
  );
}

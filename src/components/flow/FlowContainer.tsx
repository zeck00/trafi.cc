"use client";

import { useState, useCallback, useMemo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { stepVariants, stepTransition, reducedMotionTransition } from "@/lib/animations";
import { FlowProvider, useFlowState, useFlowDispatch } from "@/hooks/useFlowState";
import { ProgressBar } from "./ProgressBar";
import { StepNavigation } from "./StepNavigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { StepPlatforms } from "./StepPlatforms";
import { StepDemographics } from "./StepDemographics";
import { StepInterests } from "./StepInterests";
import { ResultScreen } from "@/components/result/ResultScreen";
import { calculate } from "@/lib/calculator";

const TOTAL_STEPS = 4; // 0-indexed: 0=platforms, 1=demographics, 2=interests, 3=result

function FlowContent() {
  const state = useFlowState();
  const dispatch = useFlowDispatch();
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  const goNext = useCallback(() => {
    if (state.step < TOTAL_STEPS - 1) {
      setDirection(1);
      dispatch({ type: "SET_STEP", step: state.step + 1 });
    }
  }, [state.step, dispatch]);

  const goBack = useCallback(() => {
    if (state.step > 0) {
      setDirection(-1);
      dispatch({ type: "SET_STEP", step: state.step - 1 });
    }
  }, [state.step, dispatch]);

  const canNext = useMemo(() => {
    switch (state.step) {
      case 0:
        return state.selectedPlatforms.length > 0;
      case 1:
        return state.ageRange !== null && state.country !== null && state.device !== null;
      case 2:
        return true; // interests are optional
      default:
        return false;
    }
  }, [state]);

  const nextLabel = state.step === 2 ? "Show My Worth" : "Next";

  const result = useMemo(() => {
    if (state.step === 3) {
      return calculate(state);
    }
    return null;
  }, [state]);

  if (state.step === 3 && result) {
    return <ResultScreen result={result} onReset={() => dispatch({ type: "RESET" })} />;
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <div className="flex items-center gap-3 px-5 pt-4">
        <div className="flex-1">
          <ProgressBar step={state.step} />
        </div>
        <ThemeToggle />
      </div>

      <div className="flex-1 flex flex-col justify-center px-5 py-8 max-w-lg lg:max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={state.step}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={prefersReducedMotion ? reducedMotionTransition : stepTransition}
          >
            {state.step === 0 && <StepPlatforms />}
            {state.step === 1 && <StepDemographics />}
            {state.step === 2 && <StepInterests />}
          </motion.div>
        </AnimatePresence>

        <StepNavigation
          step={state.step}
          canNext={canNext}
          onBack={goBack}
          onNext={goNext}
          nextLabel={nextLabel}
        />
      </div>
    </div>
  );
}

export function FlowContainer() {
  return (
    <FlowProvider>
      <FlowContent />
    </FlowProvider>
  );
}

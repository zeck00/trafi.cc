"use client";

import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import type { FlowState, AgeRange, DeviceType } from "@/types";
import React from "react";

const initialState: FlowState = {
  step: 0,
  selectedPlatforms: [],
  ageRange: null,
  country: null,
  device: null,
  interests: [],
};

type FlowAction =
  | { type: "SET_STEP"; step: number }
  | { type: "TOGGLE_PLATFORM"; id: string }
  | { type: "SET_AGE"; age: AgeRange }
  | { type: "SET_COUNTRY"; country: string }
  | { type: "SET_DEVICE"; device: DeviceType }
  | { type: "TOGGLE_INTEREST"; interest: string }
  | { type: "RESET" };

function flowReducer(state: FlowState, action: FlowAction): FlowState {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.step };
    case "TOGGLE_PLATFORM": {
      const has = state.selectedPlatforms.includes(action.id);
      return {
        ...state,
        selectedPlatforms: has
          ? state.selectedPlatforms.filter((p) => p !== action.id)
          : [...state.selectedPlatforms, action.id],
      };
    }
    case "SET_AGE":
      return { ...state, ageRange: action.age };
    case "SET_COUNTRY":
      return { ...state, country: action.country };
    case "SET_DEVICE":
      return { ...state, device: action.device };
    case "TOGGLE_INTEREST": {
      const has = state.interests.includes(action.interest);
      return {
        ...state,
        interests: has
          ? state.interests.filter((i) => i !== action.interest)
          : [...state.interests, action.interest],
      };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const FlowStateContext = createContext<FlowState>(initialState);
const FlowDispatchContext = createContext<Dispatch<FlowAction>>(() => {});

export function FlowProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(flowReducer, initialState);

  return React.createElement(
    FlowStateContext.Provider,
    { value: state },
    React.createElement(
      FlowDispatchContext.Provider,
      { value: dispatch },
      children
    )
  );
}

export function useFlowState() {
  return useContext(FlowStateContext);
}

export function useFlowDispatch() {
  return useContext(FlowDispatchContext);
}

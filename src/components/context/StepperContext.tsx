import { createContext } from "react";

const StepperContext = createContext<{
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

export default StepperContext;

import { useState } from "react";
import StepperContext from "../context/StepperContext";

interface Props {
  children: React.ReactNode;
}

const StepperProvider = ({ children }: Props) => {
  const [step, setStep] = useState<number>(1);

  return (
    <StepperContext.Provider value={{ step, setStep }}>
      {children}
    </StepperContext.Provider>
  );
};
export default StepperProvider;

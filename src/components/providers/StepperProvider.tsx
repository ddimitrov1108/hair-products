import { useState } from "react";
import StepperContext from "../context/StepperContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface Props {
  children: React.ReactNode;
}

const StepperProvider = ({ children }: Props) => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="w-full flex flex-col-reverse gap-y-8 items-center lg:flex-row lg:items-start justify-between">
      <div>
        <StepperContext.Provider value={{ step, setStep }}>
          {children}
        </StepperContext.Provider>
      </div>

      <div className="lg:absolute w-20 h-20 lg:right-[40px] xl:right-[112px]">
        <CircularProgressbar
          value={step * 20}
          text={`${step}/5`}
          strokeWidth={5}
          styles={buildStyles({
            pathColor: "#AADDF3",
            trailColor: "#EEF7FB",
            textColor: "#1C2635",
            textSize: "20px",
          })}
        />
      </div>
    </div>
  );
};
export default StepperProvider;

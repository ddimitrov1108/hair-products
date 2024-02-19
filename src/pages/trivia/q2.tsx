import { HairWashFrequency } from "@/interfaces";
import Header from "@/components/ui/Header";
import StepperContext from "@/components/context/StepperContext";
import { useContext, useEffect } from "react";
import TriviaNavLinks from "@/components/TriviaNavLinks";
import SelectField from "@/components/SelectField";

const Q2 = () => {
  const stepperContext = useContext(StepperContext);

  useEffect(() => {
    stepperContext?.setStep(2);
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Header className="w-full">How often do you wash your hair?</Header>
      <SelectField fieldName="hairWash" data={Object.values(HairWashFrequency)} />
      <TriviaNavLinks back="/trivia/q1" next="/trivia/q3" />
    </div>
  );
};

export default Q2;

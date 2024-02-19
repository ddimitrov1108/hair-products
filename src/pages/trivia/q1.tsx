import { HairType } from "@/lib/interfaces";
import Header from "@/components/ui/Header";
import StepperContext from "@/components/context/StepperContext";
import { useContext, useEffect } from "react";
import TriviaNavLinks from "@/components/TriviaNavLinks";
import SelectField from "@/components/SelectField";

const Q1 = () => {
  const stepperContext = useContext(StepperContext);

  useEffect(() => {
    stepperContext?.setStep(1);
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Header className="w-full">Whats your hair type or texture?</Header>
      <SelectField fieldName="hairType" data={Object.values(HairType)} />
      <TriviaNavLinks back="/" next="/trivia/q2" />
    </div>
  );
};

export default Q1;

import { HairProductBenefit } from "@/lib/interfaces";
import Header from "@/components/ui/Header";
import StepperContext from "@/components/context/StepperContext";
import { useContext, useEffect } from "react";
import TriviaNavLinks from "@/components/TriviaNavLinks";
import SelectField from "@/components/SelectField";

const Q3 = () => {
  const stepperContext = useContext(StepperContext);

  useEffect(() => {
    stepperContext?.setStep(3);
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Header className="w-full">What benefit do you look for in your hair products?</Header>
      <SelectField fieldName="hairProducts" data={Object.values(HairProductBenefit)} />
      <TriviaNavLinks back="/trivia/q2" next="/trivia/q4" />
    </div>
  );
};

export default Q3;

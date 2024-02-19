import { HairConcern } from "@/lib/interfaces";
import Header from "@/components/ui/Header";
import StepperContext from "@/components/context/StepperContext";
import { useContext, useEffect } from "react";
import TriviaNavLinks from "@/components/TriviaNavLinks";
import SelectField from "@/components/SelectField";

const Q4 = () => {
  const stepperContext = useContext(StepperContext);

  useEffect(() => {
    stepperContext?.setStep(4);
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Header className="w-full">
        Is there anything troubling you about your hair?
      </Header>
      <SelectField fieldName="hairConcern" data={Object.values(HairConcern)} />
      <TriviaNavLinks back="/trivia/q3" next="/trivia/q5" />
    </div>
  );
};

export default Q4;

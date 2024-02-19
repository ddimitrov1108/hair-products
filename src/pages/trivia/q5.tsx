import { HairColor } from "@/interfaces";
import Header from "@/components/ui/Header";
import StepperContext from "@/components/context/StepperContext";
import { useContext, useEffect } from "react";
import TriviaNavLinks from "@/components/TriviaNavLinks";
import SelectField from "@/components/SelectField";

const Q5 = () => {
  const stepperContext = useContext(StepperContext);

  useEffect(() => {
    stepperContext?.setStep(5);
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Header className="w-full">
        What is your natural hair color(s) today?
      </Header>
      <SelectField fieldName="hairColor" data={Object.values(HairColor)} />
      <TriviaNavLinks back="/trivia/q4" next="/" isEnd={true} />
    </div>
  );
};

export default Q5;

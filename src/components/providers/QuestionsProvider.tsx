import { useState } from "react";
import { QuestionsContext } from "../context/questionsContext";
import { IQuestions } from "../../interfaces";

interface Props {
  children: React.ReactNode;
}

const QuestionsProvider = ({ children }: Props) => {
  const [questions, setQuestions] = useState<IQuestions>({
    hair_color: "",
    hair_products: "",
    hair_troubling: "",
    hair_type: "",
    hair_wash: "",
  });

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};
export default QuestionsProvider;

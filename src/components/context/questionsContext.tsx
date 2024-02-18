import { createContext } from "react";
import { IQuestions } from "../../interfaces";

export const QuestionsContext = createContext<{
  questions: IQuestions;
  setQuestions: React.Dispatch<React.SetStateAction<IQuestions>>;
} | null>(null);

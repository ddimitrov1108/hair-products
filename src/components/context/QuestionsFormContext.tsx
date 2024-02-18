import { createContext } from "react";
import { QuestionsForm } from "../../interfaces";

export const QuestionsFormContext = createContext<{
  form: QuestionsForm;
  setForm: React.Dispatch<React.SetStateAction<QuestionsForm>>;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

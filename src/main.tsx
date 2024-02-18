import { StrictMode, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QuestionsContext } from "./components/context/questionsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QuestionsContext.Provider>
      <RouterProvider router={router} />
    </QuestionsContext.Provider>
  </StrictMode>
);

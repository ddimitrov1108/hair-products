import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import 'react-circular-progressbar/dist/styles.css';

import Home from "./pages/home";
import { Q1, Q2, Q3, Q4, Q5 } from "./pages/trivia";
import TriviaLayout from "./pages/layouts/TriviaLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivia" element={<TriviaLayout />}>
          <Route path="q1" element={<Q1 />} />
          <Route path="q2" element={<Q2 />} />
          <Route path="q3" element={<Q3 />} />
          <Route path="q4" element={<Q4 />} />
          <Route path="q5" element={<Q5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

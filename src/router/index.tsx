import Home from "@/pages/home";
import TriviaLayout from "@/pages/layouts/TriviaLayout";
import { Q1, Q2, Q3, Q4, Q5 } from "@/pages/trivia";
import { createBrowserRouter } from "react-router-dom";

const routerConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/trivia",
    element: <TriviaLayout />,
    children: [
      { path: "q1", element: <Q1 /> },
      { path: "q2", element: <Q2 /> },
      { path: "q3", element: <Q3 /> },
      { path: "q4", element: <Q4 /> },
      { path: "q5", element: <Q5 /> },
    ],
  },
];

const router = createBrowserRouter(routerConfig);
export default router;

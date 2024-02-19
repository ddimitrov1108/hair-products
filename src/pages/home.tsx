import Button from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid items-center justify-center w-full h-[526px] relative">
      <img
        src="/home-bg.jpg"
        alt="home-bg"
        className="absolute w-full h-[526px] object-cover"
      />

      <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[#000]/[0.35]"></div>

      <div className="z-10 text-white max-w-[590px] text-center flex flex-col items-center gap-4">
        <Header>Build a self care routine suitable for you</Header>

        <p className="max-w-[327px] text-center font-light">
          Take out test to get a personalised self care routine based on your
          needs.
        </p>

        <NavLink to="/trivia/q1">
          <Button className="mt-2">
            Start the quiz
          </Button>
        </NavLink>
      </div>
    </div>
  );
};
export default Home;
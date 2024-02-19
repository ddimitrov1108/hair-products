import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import { MoveRight } from "lucide-react";

interface Props extends React.ComponentProps<"div"> {
  back: string;
  next: string;
  isEnd?: boolean;
}

const TriviaNavLinks = ({ back, next, isEnd = false, ...restProps }: Props) => {
  return (
    <div
      className="w-full flex flex-col-reverse gap-y-2 items-center sm:justify-center gap-5 sm:flex-row"
      {...restProps}
    >
      <NavLink to={back}>
        <Button variant="ghost" className="min-w-fit p-0">
          Back
        </Button>
      </NavLink>

      {isEnd ? (
        <Button type="submit" className="sm:w-auto" fullWidth>
          Discover your results
        </Button>
      ) : (
        <NavLink to={next} className="w-full sm:w-auto">
          <Button className="gap-2" fullWidth>
            Next Question
            <MoveRight />
          </Button>
        </NavLink>
      )}
    </div>
  );
};
export default TriviaNavLinks;

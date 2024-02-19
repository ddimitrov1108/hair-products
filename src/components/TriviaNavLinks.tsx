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
    <div className="flex items-center gap-5" {...restProps}>
      <NavLink to={back}>
        <Button variant="ghost" className="min-w-fit p-0">
          Back
        </Button>
      </NavLink>
      {isEnd ? (
        <Button type="submit">Discover your results</Button>
      ) : (
        <NavLink to={next}>
          <Button className="gap-2">
            Next Question
            <MoveRight />
          </Button>
        </NavLink>
      )}
    </div>
  );
};
export default TriviaNavLinks;

import { cn } from "../utils";

interface Props {
  to: string;
  variant: "next" | "back";
  children: string;
}
const NextQuestionLink = ({ children, className, ...restProps }: Props) => {
  return (
<NavLink to="/messages" className>{children}</NavLink>;
  );
};
export default NextQuestionLink;

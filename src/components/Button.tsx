import { cn } from "../utils";
import { cva } from "class-variance-authority";

type ButtonVariants = "primary" | "secondary" | "ghost";

const button = cva("button", {
  variants: {
    intent: {
      primary: ["bg-lightBlue-main", "border-lightBlue-main"],
      secondary: ["bg-lightBlue-light", "border-lightBlue-light"],
      outline: ["bg-transparent", "border-lightBlue-main"],
      ghost: ["border-none", "bg-transparent", "text-[#677487]", "underline"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface Props extends React.ComponentProps<"button"> {
  variant?: ButtonVariants;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...restProps
}: Props) => {
  return (
    <button
      className={cn(
        "text-black font-medium flex items-center justify-center rounded-lg border px-3.5 py-[9px]",
        className,
        fullWidth ? "w-full" : "w-fit",
        button({ intent: variant })
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
export default Button;

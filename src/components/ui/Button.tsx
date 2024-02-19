import { cn } from "@/utils";
import { cva } from "class-variance-authority";

type ButtonVariants = "primary" | "outline" | "ghost";
type ButtonSizes = "small" | "medium";

interface Props extends React.ComponentProps<"button"> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  fullWidth?: boolean;
}

const buttonCva = cva("button", {
  variants: {
    intent: {
      primary: ["bg-lightBlue-main", "border-lightBlue-main"],
      outline: ["bg-transparent", "border border-lightBlue-secondary"],
      ghost: [
        "border-none",
        "bg-transparent",
        "text-[#677487]",
        "underline",
        "max-w-fit max-h-fit px-0 py-0",
      ],
    },
    size: {
      small: ["h-[44px]"],
      medium: ["h-[48px]"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className,
  ...restProps
}: Props) => {
  return (
    <button
      className={cn(
        "select-none transition-all duration-200 ease-in text-black font-medium flex items-center justify-center rounded-lg border min-w-[189px] px-3.5 py-2.5",
        buttonCva({ intent: variant, size: size }),
        fullWidth ? "w-full" : "w-fit",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
export default Button;

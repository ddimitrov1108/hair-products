import { cn } from "@/lib/utils";

const Header = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<"h1">) => {
  return (
    <h1
      className={cn(
        "max-w-[590px] text-center text-header text-2xl md:text-3xl lg:text-[42px] leading-tight",
        className
      )}
      {...restProps}
    >
      {children}
    </h1>
  );
};
export default Header;

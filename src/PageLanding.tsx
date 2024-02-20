import Header from "./components/ui/Header";
import { cn } from "./lib/utils";

interface Props extends React.ComponentProps<"div"> {
  headerTitle: React.ReactNode;
  description: React.ReactNode;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  containerClassName?: string;
}
const PageLanding = ({
  headerTitle,
  description,
  children,
  image,
  className,
  containerClassName,
  ...restProps
}: Props) => {
  return (
    <div
      className={cn(
        "grid items-center justify-center w-full relative h-[539px]",
        className
      )}
      {...restProps}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={cn(
          "absolute w-full object-cover h-[539px]",
          image.className
        )}
      />

      <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[#000]/[0.35]"></div>

      <div
        className={cn(
          "z-10 text-white max-w-[590px] text-center flex flex-col items-center gap-4",
          containerClassName
        )}
      >
        <Header>{headerTitle}</Header>

        <p className="text-center font-light">{description}</p>

        {children}
      </div>
    </div>
  );
};
export default PageLanding;

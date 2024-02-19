import {
  HairColor,
  HairConcern,
  HairProductBenefit,
  HairType,
  HairWashFrequency,
} from "@/constants";
import Button from "./ui/Button";
import { useFormContext } from "react-hook-form";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {
  data:
    | HairType[]
    | HairWashFrequency[]
    | HairConcern[]
    | HairProductBenefit[]
    | HairColor[];
  fieldName: string;
}
const SelectField = ({ data, fieldName, className, ...restProps }: Props) => {
  const { watch, setValue } = useFormContext();

  return (
    <div
      className={cn(
        "w-full flex flex-wrap justify-center gap-[10px]",
        className
      )}
      {...restProps}
    >
      {data.map((dataType, index) => (
        <Button
          key={dataType}
          variant="outline"
          size="small"
          className={cn(
            "justify-start font-normal",
            watch(fieldName) == dataType && "bg-lightBlue-secondary text-white"
          )}
          onClick={() => setValue(fieldName, dataType)}
        >
          {String.fromCharCode("a".charCodeAt(0) + index)}
          {". "}
          {dataType}
        </Button>
      ))}
    </div>
  );
};
export default SelectField;

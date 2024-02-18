import { useFormContext } from "react-hook-form";
import { HairType } from "../../constants";
import clsx from "clsx";

const Q1 = () => {
  const { watch, setValue } = useFormContext();

  return (
    <div className="grid gap-14">
      <h1>Whats your hair type or texture?</h1>
      <div className="w-full flex flex-wrap gap-[10px]">
        {Object.values(HairType).map((hairType, index) => (
          <button
            type="button"
            className={clsx(
              "rounded-lg border-2 px-3.5 w-[189px] py-2 text-left",
              hairType === watch("hairType")
                ? "border-cyan-400"
                : "border-slate-200"
            )}
            onClick={() => setValue("hairType", hairType)}
          >
            {String.fromCharCode(97 + index)}. {hairType}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Q1;

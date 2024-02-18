import { useFormContext } from "react-hook-form";
import { HairWashFrequency } from "../../constants";
import clsx from "clsx";

const Q2 = () => {
  const { watch, setValue } = useFormContext();

  return (
    <div className="grid gap-14">
      <h1>Whats your hair type or texture?</h1>
      <div className="w-full flex flex-wrap gap-[10px]">
        {Object.values(HairWashFrequency).map((hairWash, index) => (
          <button
            type="button"
            className={clsx(
              "rounded-lg border-2 px-3.5 w-[189px] py-2 text-left",
              hairWash === watch("hairWash")
                ? "border-cyan-400"
                : "border-slate-200"
            )}
            onClick={() => setValue("hairWash", hairWash)}
          >
            {String.fromCharCode(97 + index)}. {hairWash}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Q2;

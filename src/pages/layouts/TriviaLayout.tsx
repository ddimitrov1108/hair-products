import { FormProvider, useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { Questions } from "../../interfaces";
import { CircularProgressbar } from "react-circular-progressbar";
import StepperProvider from "@/components/providers/StepperProvider";

const TriviaLayout = () => {
  const form = useForm<Questions>({
    defaultValues: {
      hairType: "",
      hairWash: "",
      hairProducts: "",
      hairTroubling: "",
      hairColor: "",
    },
  });

  const onSubmit = (data: Questions) => {
    console.log(data);
  };

  return (
    <div className="relative grid items-center justify-center h-screen w-full">
      <StepperProvider>
        <div className="max-w-[985px]">
          <FormProvider {...form}>
            <div className="w-full flex gap-8 justify-between">
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <Outlet />
              </form>
            </div>
          </FormProvider>
        </div>
      </StepperProvider>
    </div>
  );
};
export default TriviaLayout;

import { FormProvider, useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { Questions } from "../../interfaces";
import { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

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

  useEffect(() => {
    console.log(form.getValues());
  }, [form]);

  return (
    <div className="grid items-center justify-center h-screen w-full">
      <FormProvider {...form}>
        <div className="w-full flex gap-8 justify-between">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Outlet />
          </form>

          <div className="w-28 h-28">
            <CircularProgressbar value={20} text={`1/5`} strokeWidth={4} />
          </div>
        </div>
      </FormProvider>
    </div>
  );
};
export default TriviaLayout;

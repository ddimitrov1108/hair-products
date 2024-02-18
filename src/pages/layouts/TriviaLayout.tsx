import { FormProvider, useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { Questions } from "../../interfaces";
import { useEffect } from "react";

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
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Outlet />
        </form>
      </FormProvider>
    </div>
  );
};
export default TriviaLayout;

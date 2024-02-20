import { FormProvider, useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { IFormQuestions } from "../../lib/interfaces";
import StepperProvider from "@/components/providers/StepperProvider";

const TriviaLayout = () => {
  const navigate = useNavigate();
  const form = useForm<IFormQuestions>({
    defaultValues: {
      hairType: "",
      hairWash: "",
      hairProducts: "",
      hairConcern: "",
      hairColor: "",
    },
  });

  const onSubmit = (data: IFormQuestions) => {
    navigate("/results", { state: { formData: data }, replace: true });
  };

  return (
    <div className="container max-w-[1440px] relative grid items-center justify-center h-screen">
      <StepperProvider>
        <div className="lg:max-w-[940px] xl:max-w-[985px] order-2">
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex gap-8 justify-between"
            >
              <Outlet />
            </form>
          </FormProvider>
        </div>
      </StepperProvider>
    </div>
  );
};
export default TriviaLayout;

interface Props {
  children: React.ReactNode;
}

const QuestionsFormProvider = ({ children }: Props) => {
  return <>{children}</>;
};
export default QuestionsFormProvider;

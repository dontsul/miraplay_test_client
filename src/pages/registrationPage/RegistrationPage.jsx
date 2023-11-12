import { RegistrationForm } from "../../components/registrationForm/RegistrationForm";
import { Title } from "../../components/title/Title";
export const RegistrationPage = () => {
  return (
    <div className={"flex min-h-[90dvh] items-center justify-center flex-col p-10 gap-10"}>
      <Title tag="h1">Registration</Title>
      <RegistrationForm />
    </div>
  );
};

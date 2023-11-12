import { Title } from "../../components/title/Title";
import { LoginForm } from "../../components/loginForm/LoginForm";

export const LoginPage = () => {
  return (
    <div className={"flex min-h-[90dvh] items-center justify-center flex-col p-10 gap-10"}>
      <Title tag="h1">Login</Title>
      <LoginForm />
    </div>
  );
};

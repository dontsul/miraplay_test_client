import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomForm } from "../customForm/CustomForm";
import { CustomInput } from "../customInput/CustomInput";
import { Button } from "../button/Button";
import { NavLink } from "react-router-dom";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSigin } from "../../features/authSlice";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(fetchSigin({ ...data }))
      .unwrap()
      .then(() => {
        reset();
        navigate("/");
      });
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <div className={"flex flex-col w-full relative"}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <CustomInput {...field} type="email" placeholder="Email" />}
        />
        <p className="text-xs text-red py-[0.2rem] absolute bottom-[-1.3rem]">
          {errors.email?.message}
        </p>
      </div>
      <div className={"flex flex-col w-full relative"}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <CustomInput {...field} type="password" placeholder="Password" />}
        />
        <p className="text-xs text-red py-[0.2rem] absolute bottom-[-1.3rem]">
          {errors.password?.message}
        </p>
      </div>
      <Button type="submit" cn={"w-full"}>
        Sign In
      </Button>
      <div className={"flex items-center justify-center "}>
        <span className="text-sm text-slate">Don&apos;t have an account?</span>
        <NavLink
          className={"text-slate hover:text-mainGreen transition duration-200 px-2"}
          to={"/registration"}
        >
          Sign Up
        </NavLink>
      </div>
    </CustomForm>
  );
};

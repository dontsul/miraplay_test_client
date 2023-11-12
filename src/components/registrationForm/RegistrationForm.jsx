import { CustomForm } from "../customForm/CustomForm";
import { CustomInput } from "../customInput/CustomInput";
import { Button } from "../button/Button";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchSignup } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();
export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(fetchSignup({ ...data }))
      .unwrap()
      .then(() => {
        reset();
        navigate("/login");
      });
  };
  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <div className={"div flex-col w-full relative"}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <CustomInput {...field} type="email" placeholder="Email" />}
        />
        <p className="text-xs text-red py-[0.2rem] absolute bottom-[-1.3rem]">
          {errors.email?.message}
        </p>
      </div>
      <div className={"div flex-col w-full relative"}>
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
        Sign Up
      </Button>
      <div className={"flex items-center justify-center"}>
        <span className="text-sm text-slate">
          Have an account?{" "}
          <NavLink
            className={"text-slate hover:text-mainGreen transition duration-200 px-2"}
            to={"/login"}
          >
            Sign In
          </NavLink>
        </span>
      </div>
    </CustomForm>
  );
};

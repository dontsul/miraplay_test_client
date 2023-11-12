import { forwardRef } from "react";
import PropTypes from "prop-types";

export const CustomInput = forwardRef(function InputComponent({ name, ...props }, ref) {
  return (
    <input
      {...props}
      name={name}
      ref={ref}
      className="outline-none w-full bg-darkGray border-borderColor border-[1px] text-sm text-slateLight placeholder:text-slate rounded-lg focus:border-mainGreen focus:bg-none block p-4"
      autoComplete="current-password"
    />
  );
});

CustomInput.displayName = "CustomInput";

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
};

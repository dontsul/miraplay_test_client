import PropTypes from "prop-types";
export const Button = ({ children, cn, type, ...props }) => {
  return (
    <button
      type={type ?? "button"}
      className={`text-white bg-mainGreen hover:bg-lightGreen rounded-lg text-sm px-5 py-4 focus:outline-none active:outline-none active:border-none transition duration-200 ${
        cn ?? ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  cn: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const CustomForm = ({ children, onSubmit }) => {
  return (
    <motion.form
      initial={{ transform: "translateY(6rem)" }}
      animate={{ transform: "translateY(0)" }}
      transition={{
        duration: 0.5,
      }}
      onSubmit={onSubmit}
      className="flex items-center justify-center flex-col gap-7 max-w-[25rem] w-full rounded-md shadow-lg hover:shadow-xl shadow-mainGreen hover:shadow-mainGreen transition duration-200 py-10 px-6 bg-darkGray border-borderColor border-[1px] "
    >
      {children}
    </motion.form>
  );
};

CustomForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

import { motion } from "framer-motion";
import PropTypes from "prop-types";
export const Title = ({ tag, cn, children }) => {
  switch (tag) {
    case "h1":
      return (
        <motion.h1
          initial={{ opacity: 0, transform: "translateX(-4rem)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.5 }}
          className={`text-[2rem] ${cn ?? ""}`}
        >
          {children}
        </motion.h1>
      );

    case "h2":
      return (
        <motion.h2
          initial={{ opacity: 0, transform: "translateX(-4rem)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.5 }}
          className={`text-[1.8rem] ${cn ?? ""}`}
        >
          {children}
        </motion.h2>
      );

    case "h4":
      return (
        <motion.h4
          initial={{ opacity: 0, transform: "translateX(-4rem)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.5 }}
          className={`text-[1.5rem] ${cn ?? ""}`}
        >
          {children}
        </motion.h4>
      );
    case "h6":
      return <h6 className={`text-[1.5rem] ${cn ?? ""}`}>{children}</h6>;

    default:
      return null;
  }
};
Title.propTypes = {
  tag: PropTypes.oneOf(["h1", "h2", "h4", "h6"]).isRequired,
  cn: PropTypes.string,
  children: PropTypes.node.isRequired,
};

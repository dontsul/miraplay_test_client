import { Spin as Hamburger } from "hamburger-react";
import PropTypes from "prop-types";
export const Burger = ({ handleOpen, isOpen }) => {
  return (
    <div className="md:hidden align-middle">
      <Hamburger size={25} toggled={isOpen} toggle={handleOpen} />
    </div>
  );
};
Burger.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

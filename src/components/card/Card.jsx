import { useState } from "react";
import { Title } from "../title/Title";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
export const Card = ({ game }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <motion.li
      initial={{
        transform: "translateY(-2rem)",
      }}
      animate={{
        transform: "translateY(0)",
      }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[20rem] overflow-hidden flex flex-col border-borderColor border-[1px] rounded-xl shadow-lg shadow-lightGray hover:shadow-lightGreen tarnsition duration-200 cursor-pointer"
    >
      <div
        style={{ backgroundImage: `url('${game.gameImage}')`, backgroundRepeat: "no-repeat" }}
        className={`bg-no-repeat bg-center bg-cover h-[16rem] shadow-md ] p-4 flex items-start gap-2`}
      >
        {game.inTop && (
          <div className="backdrop-blur-lg py-1 px-2 rounded-lg bg-lightGreen opacity-80 w-fit">
            <span className="uppercase text-center">TOP</span>
          </div>
        )}
        {game.genre && (
          <div className="backdrop-blur-lg py-1 px-2 rounded-lg bg-lightGray opacity-80 w-fit">
            <span className="uppercase text-center">{game.genre}</span>
          </div>
        )}
      </div>
      <div
        className={`px-4 py-8 ${
          !isHover ? "bg-darkGray" : "bg-lightGray"
        } flex-1 flex flex-col gap-4`}
      >
        <Title tag="h6" cn="text-md">
          {game.commonGameName}
        </Title>
        {game?.gameDescription && (
          <p className="text-sm line-clamp-3 text-slate">{game.gameDescription}</p>
        )}
      </div>
    </motion.li>
  );
};

Card.propTypes = {
  game: PropTypes.shape({
    commonGameName: PropTypes.string.isRequired,
    gameImage: PropTypes.string.isRequired,
    inTop: PropTypes.bool.isRequired,
    genre: PropTypes.string,
    gameDescription: PropTypes.string,
  }).isRequired,
};

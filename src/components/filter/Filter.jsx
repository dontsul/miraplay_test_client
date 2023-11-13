import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ToggleFilter } from "../toggleFilter/ToggleFilter";

const filtersData = [
  {
    value: "ALL",
    id: 1,
    isActive: true,
  },
  {
    value: "FREE",
    id: 2,
    isActive: false,
  },
  {
    value: "MOBA",
    id: 3,
    isActive: false,
  },
  {
    value: "SHOOTERS",
    id: 4,
    isActive: false,
  },
  {
    value: "LAUNCHERS",
    id: 5,
    isActive: false,
  },
  {
    value: "MMORPG",
    id: 6,
    isActive: false,
  },
  {
    value: "STRATEGY",
    id: 7,
    isActive: false,
  },
  {
    value: "FIGHTING",
    id: 8,
    isActive: false,
  },
  {
    value: "RACING",
    id: 9,
    isActive: false,
  },
  {
    value: "SURVIVAL",
    id: 10,
    isActive: false,
  },
  {
    value: "ONLINE",
    id: 11,
    isActive: false,
  },
];

const filterVariants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
    transform: "translateY(0)",
    scale: 1,
  }),
  hidden: () => ({
    opacity: 0,
    transform: "translateY(1rem)",
  }),
};

export const Filter = ({
  handleFilter,
  activeFilter,
  setPage,
  isFreshGamesFirst,
  handleFilterFresh,
}) => {
  return (
    <div className="flex items-start flex-wrap gap-4 justify-between">
      <ul className="flex flex-row items-center gap-4 flex-wrap w-[70%]">
        {filtersData.map(({ value, id }, index) => {
          return (
            <motion.li
              variants={filterVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              onClick={() => {
                handleFilter(value);
                setPage(1);
              }}
              className={`py-2 px-4 border-borderColor border-1px bg-lightGray rounded-md cursor-pointer hover:bg-mainGreen transition duration-200 hover:shadow-mainGreen hover:shadow-lg 
              ${activeFilter === value ? "bg-lightGreen" : ""}`}
              key={id}
            >
              {value}
            </motion.li>
          );
        })}
      </ul>
      <ToggleFilter isFreshGamesFirst={isFreshGamesFirst} handleFilterFresh={handleFilterFresh} />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  isFreshGamesFirst: PropTypes.bool.isRequired,
  handleFilterFresh: PropTypes.func.isRequired,
};

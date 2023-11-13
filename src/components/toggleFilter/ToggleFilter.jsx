import PropTypes from "prop-types";
export const ToggleFilter = ({ isFreshGamesFirst, handleFilterFresh }) => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        onClick={() => handleFilterFresh(true)}
        type="button"
        className={`px-4 py-2 text-sm font-medium border ${
          isFreshGamesFirst ? "border-lightGreen text-lightGreen" : "border-slate text-slate"
        }  hover:border-lightGreen  rounded-s-lg  hover:text-lightGreen`}
      >
        New Games
      </button>
      <button
        onClick={() => handleFilterFresh(false)}
        type="button"
        className={`px-4 py-2 text-sm font-medium border ${
          isFreshGamesFirst ? " border-slate text-slate" : "border-lightGreen text-lightGreen"
        } hover:border-lightGreen rounded-e-lg hover:text-lightGreen `}
      >
        Old Games
      </button>
    </div>
  );
};

ToggleFilter.propTypes = {
  isFreshGamesFirst: PropTypes.bool.isRequired,
  handleFilterFresh: PropTypes.func.isRequired,
};

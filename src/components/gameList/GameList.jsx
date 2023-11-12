import { Card } from "../card/Card";
import PropTypes from "prop-types";

export const GameList = ({ games }) => {
  return (
    <ul className="flex flex-row flex-wrap gap-10 justify-center">
      {games.length > 0
        ? games.map((game, index) => {
            return <Card key={index} game={game} />;
          })
        : null}
    </ul>
  );
};

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      commonGameName: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      exactingness: PropTypes.string.isRequired,
      gameClass: PropTypes.string.isRequired,
      gameDescription: PropTypes.string.isRequired,
      gameImage: PropTypes.string.isRequired,
      gameImages: PropTypes.arrayOf(PropTypes.string),
      gameLaunchers: PropTypes.arrayOf(PropTypes.string),
      gameVideoUrl: PropTypes.string,
      genre: PropTypes.string.isRequired,
      inTop: PropTypes.bool.isRequired,
      publisher: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      systemGameName: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

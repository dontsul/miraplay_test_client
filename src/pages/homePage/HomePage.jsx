import { Button } from "../../components/button/Button";
import { Title } from "../../components/title/Title";
import { useGetGamesListQuery } from "../../features/gamesApi";
import { useState, useEffect, Fragment } from "react";
import { Filter } from "../../components/filter/Filter";
import { GameList } from "../../components/gameList/GameList";
import { Spinner } from "../../components/spinner/Spinner";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const HomePage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { token } = useSelector((state) => state.auth);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isFreshGamesFirst, setIsFreshGamesFirst] = useState(true);

  const gamesToShow = 9;
  const queryData = {
    page,
    isFreshGamesFirst,
    genre: activeFilter === "ALL" ? false : activeFilter,
    gamesToShow,
  };

  const { data: gamesData, isLoading, refetch } = useGetGamesListQuery(queryData);
  const handleFilter = (value) => {
    setActiveFilter(value);
  };
  const handleFilterFresh = (value) => {
    setIsFreshGamesFirst(value);
  };

  useEffect(() => {
    const loader = async () => {
      if (!window.localStorage.getItem("token")) {
        toast("You need to log in!");
        return navigate("/login");
      } else {
        return navigate("/");
      }
    };
    loader();
  }, [navigate]);

  return (
    <Fragment>
      {token ? (
        <div className={`flex py-10 px-6 flex-col w-full gap-10`}>
          <Title cn="py-2 text-center" tag={"h2"}>
            All Games
          </Title>
          <Filter
            activeFilter={activeFilter}
            handleFilter={handleFilter}
            setPage={setPage}
            isFreshGamesFirst={isFreshGamesFirst}
            handleFilterFresh={handleFilterFresh}
          />

          {isLoading && <Spinner />}
          {gamesData && gamesData?.games?.length > 0 ? (
            <GameList games={gamesData?.games && gamesData?.games} />
          ) : (
            <Title cn="text-center w-full" tag={"h2"}>
              Empty List
            </Title>
          )}
          {gamesData !== undefined && gamesData.gamesListLength > gamesData.games.length ? (
            <div className="flex justify-center items-center">
              <Button
                cn={`max-w-[20rem] w-full`}
                onClick={() => {
                  refetch({ ...queryData, page: page + 1 });
                  setPage((prevState) => Number(prevState) + 1);
                }}
              >
                Show more
              </Button>
            </div>
          ) : null}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

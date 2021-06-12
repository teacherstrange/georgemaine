import { useState } from "react";
import Post from "../neró/Post";
import PortfolioPage from "../neró/PortfolioPage";
import MovieList from "../neró/MovieList";
import { movies, links, portfolio } from "../neró/Data";
import {
  PortfolioMenu,
  MovieListMenu,
  TabMenu,
  GetInTouchMenu,
} from "../neró/Menu";
import { getRandomMovie } from "../neró/Utilities";

const Index = () => {
  const [activeTabMenuItem, setActiveTabMenuItem] = useState("portfolio"); // FIXME: Better naming
  const [activePortfolioPage, setActivePortfolioPage] = useState("Mobile Apps");
  const [suggested, setSuggested] = useState([movies[0]]);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <TabMenu
        activeTabMenuItem={activeTabMenuItem}
        setActiveTabMenuItem={setActiveTabMenuItem}
      />
      {activeTabMenuItem === "blog" && (
        <>
          <Post />
          <GetInTouchMenu links={links} />
        </>
      )}

      {activeTabMenuItem === "portfolio" && (
        <>
          <PortfolioPage id={activePortfolioPage} />
          <PortfolioMenu
            portfolio={portfolio}
            activePortfolioPage={activePortfolioPage}
            onBtnClick={setActivePortfolioPage}
          />
        </>
      )}

      {activeTabMenuItem === "movieList" && (
        <>
          <MovieList
            trailerMode={isActive}
            onCloseBtnClick={setIsActive}
            randomMovie={suggested[suggested.length - 1]}
          />
          <MovieListMenu
            onPlayBtnClick={() => setIsActive(!isActive)}
            onShareBtnClick={async () => {
              try {
                await navigator.share(suggested[suggested.length - 1]);
              } catch (err) {
                console.log(err);
              }
            }}
            onShuffleBtnClick={() => {
              const filtered = movies.filter(
                (value) => !suggested.includes(value)
              );
              const el = getRandomMovie(filtered);
              const suggestions = el
                ? [...suggested, el]
                : [getRandomMovie(movies)];
              setSuggested(suggestions);
            }}
            randomMovie={suggested[suggested.length - 1]}
          />
        </>
      )}
    </>
  );
};

export default Index;

import { useRouter } from "next/router";
import { useState } from "react";
import Post from "../neró/Post";
import PortfolioPage from "../neró/PortfolioPage";
import MovieList from "../neró/MovieList";
import { movies, links } from "../neró/Data";
import {
  PortfolioMenu,
  MovieListMenu,
  TabMenu,
  GetInTouchMenu,
} from "../neró/Menu";
import { getRandomMovie } from "../neró/Utilities";

const Index = () => {
  const router = useRouter();
  const [activeTabMenuItem, setActiveTabMenuItem] = useState("portfolio"); // FIXME: Better naming
  const [activePortfolioPage, setActivePortfolioPage] = useState("Mobile Apps");
  const [suggested, setSuggested] = useState([movies[0]]);
  const [trailerMode, setTrailerMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TabMenu
        activeTabMenuItem={activeTabMenuItem}
        setActiveTabMenuItem={setActiveTabMenuItem}
      />
      {activeTabMenuItem === "blog" && (
        <>
          <Post id={router.query.postId} pathname={router.pathname} />
          <GetInTouchMenu links={links} />
        </>
      )}

      {activeTabMenuItem === "portfolio" && (
        <>
          <PortfolioPage id={activePortfolioPage} />
          <PortfolioMenu
            activePortfolioPage={activePortfolioPage}
            onBtnClick={setActivePortfolioPage}
          />
        </>
      )}

      {activeTabMenuItem === "movieList" && (
        <>
          <MovieList
            trailerMode={trailerMode}
            onCloseBtnClick={setTrailerMode}
            randomMovie={suggested[suggested.length - 1]}
            isExpanded={isExpanded}
          />
          <MovieListMenu
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

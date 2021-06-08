import { useRouter } from "next/router";
import { useState } from "react";
import Post from "../neró/Post";
import Slide from "../neró/Slide";
import MovieList from "../neró/MovieList";
import { movies, links } from "../neró/Data";
import {
  PortfolioMenu,
  MovieListMenu,
  TabMenu,
  GetInTouchMenu,
} from "../neró/Menu";
import { getRandomMovie } from "../neró/Utilities";
import styles from "../neró/styles.module.css";

const Index = () => {
  const router = useRouter();
  const [filterId, setFilterId] = useState("portfolio"); // FIXME: Better naming
  const [portfolioItem, setPortfolioItem] = useState("Mobile Apps");
  const [suggested, setSuggested] = useState([movies[0]]);
  const [trailerMode, setTrailerMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TabMenu filterId={filterId} setFilterId={setFilterId} />
      {filterId === "blog" ? (
        <>
          <Post id={router.query.postId} pathname={router.pathname} />
          <GetInTouchMenu links={links} />
        </>
      ) : filterId === "portfolio" ? (
        <>
          <Slide id={portfolioItem} />
          <PortfolioMenu
            portfolioItem={portfolioItem}
            onBtnClick={setPortfolioItem}
          />
        </>
      ) : filterId === "movieList" ? (
        // FIXME: Break component down into smaller pieces
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
      ) : null}
      {/* // FIXME: find alternative to null */}
    </>
  );
};

export default Index;

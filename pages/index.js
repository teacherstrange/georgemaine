import { useRouter } from "next/router";
import { useState } from "react";
import Post from "../components/Post";
import Slide from "../components/Slide";
import MovieList from "../components/MovieList";
import { movies } from "../components/Data";
import { PortfolioMenu, MovieListMenu, TabMenu } from "../components/Menu";
import { getRandomMovie } from "../components/Utilities";
import styles from "../components/styles.module.css";

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
        <Post id={router.query.postId} pathname={router.pathname} />
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
          // FIXME: Create component
          <div className={styles.portfolioMenuMask}>
            <figure
              className={styles.moviePosterDesktop}
              style={{
                backgroundImage:
                  suggested[suggested.length - 1].moviePosterDesktopUrl &&
                  `url(${
                    suggested[suggested.length - 1].moviePosterDesktopUrl
                  }`,
                opacity: trailerMode ? 0 : isExpanded ? 0.4 : 1,
                top: "calc(3rem - 100vh)",
              }}
            />
          </div>
        </>
      ) : null}
      {/* // FIXME: find alternative to null */}
    </>
  );
};

export default Index;

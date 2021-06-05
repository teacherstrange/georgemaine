import { useRouter } from "next/router";
import { useState, useRef } from "react";
import Post from "../components/Post";
import Slide from "../components/Slide";
import Nav from "../components/Nav";
import MovieList from "../components/MovieList";
import { movies } from "../components/Data";
import { PortfolioMenu } from "../components/Menu";
import { getRandomMovie } from "../components/Utilities";

const Index = () => {
  const router = useRouter();
  const [filterId, setFilterId] = useState("portfolio"); // FIXME: Better naming
  const [portfolioItem, setPortfolioItem] = useState("Mobile Apps");
  const [suggested, setSuggested] = useState([movies[0]]);
  const [trailerMode, setTrailerMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <Nav filterId={filterId} setFilterId={setFilterId} />
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
        <MovieList
          trailerMode={trailerMode}
          onCloseBtnClick={setTrailerMode}
          randomMovie={suggested[suggested.length - 1]}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          pRef={ref}
          shuffleState={suggested}
        />
      ) : null}
      {/* // FIXME: find alternative to null */}
    </>
  );
};

export default Index;

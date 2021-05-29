import { useRouter } from "next/router";
import { useState, useRef } from "react";
import Post from "../components/Post";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import * as data from "../components/Data";
import { getRandomMovie } from "../components/Utilities";

const Index = () => {
  const router = useRouter();
  const [filterId, setFilterId] = useState("portfolio"); // FIXME: Better naming
  const [slideId, setSlideId] = useState("Mobile Apps");
  const [suggested, setSuggested] = useState([data.movies[0]]);
  const [trailerMode, setTrailerMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <Footer
        filterId={filterId}
        setFilterId={setFilterId}
        slideId={slideId}
        setSlideId={setSlideId}
        portfolio={data.portfolio}
        onShuffleBtnClick={() => {
          const filtered = data.movies.filter(
            (value) => !suggested.includes(value)
          );
          const el = getRandomMovie(filtered);
          const suggestions = el
            ? [...suggested, el]
            : [getRandomMovie(data.movies)];
          setSuggested(suggestions);
        }}
        onShareBtnClick={async () => {
          try {
            await navigator.share(suggested[suggested.length - 1]);
          } catch (err) {
            console.log(err);
          }
        }}
        onTrailerBtnClick={setTrailerMode}
        socialLinks={data.links}
        trailerModalState={trailerMode}
      />
      {filterId === "blog" ? (
        <Post id={router.query.postId} pathname={router.pathname} />
      ) : filterId === "portfolio" ? (
        <Slide id={slideId} />
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

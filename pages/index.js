import { useRouter } from "next/router";
import Post from "../components/Post";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import WatchList from "../components/WatchList";
import * as data from "../components/Data";
import { getRandomMovie } from "../components/Utilities";
import { useState } from "react";

const Index = () => {
  const router = useRouter();
  const [filterId, setFilterId] = useState("portfolio"); // FIXME: Better naming
  const [slideId, setSlideId] = useState("Mollie Mobile");
  const [postId, setPostId] = useState("Hello world");
  const [suggested, setSuggested] = useState([data.movies[0]]);
  const [theaterMode, setTheaterMode] = useState(false);

  return (
    <>
      <Footer
        filterId={filterId}
        setFilterId={setFilterId}
        slideId={slideId}
        setSlideId={setSlideId}
        portfolio={data.portfolio}
        postId={postId}
        setPostId={setPostId}
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
            null;
          }
        }}
        onTrailerBtnClick={setTheaterMode}
        socialLinks={data.links}
        trailerModalState={theaterMode}
      />
      {filterId === "blog" ? (
        <Post id={router.query.postId} pathname={router.pathname} />
      ) : filterId === "portfolio" ? (
        <Slide id={slideId} />
      ) : filterId === "watchlist" ? (
        // FIXME: Break component down into smaller pieces
        <WatchList
          theaterMode={theaterMode}
          onCloseBtnClick={setTheaterMode}
          onTrailerBtnClick={setTheaterMode}
          randomMovie={suggested[suggested.length - 1].name}
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
              null;
            }
          }}
        />
      ) : null}
      {/* // FIXME: find alternative to null */}
    </>
  );
};

export default Index;

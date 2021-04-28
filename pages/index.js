import { useRouter } from "next/router";
import Post from "../components/Post";
import Slide from "../components/Slide";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WatchList from "../components/WatchList";
import { useState } from "react";

const movies = [
  "Wonder Woman",
  "Movie 2",
  "Movie 3",
  "Movie 4",
  "Movie 5",
  "Movie 6",
  "Movie 7",
];

const shuffle = (array) => {
  const storedArray = array;

  if (array.length) {
    const random = Math.floor(Math.random() * array.length);
    const el = array.splice(random, 1)[0];
    return el;
  } else {
    console.log(storedArray);
  }
};

const Index = () => {
  const router = useRouter();
  const [filterId, setFilterId] = useState("slides"); // FIXME: Better naming
  const [slideId, setSlideId] = useState("Mollie Mobile");
  const [postId, setPostId] = useState("Hello world");

  return (
    <>
      <Nav
        filterId={filterId}
        setFilterId={setFilterId}
        slideId={slideId}
        setSlideId={setSlideId}
        postId={postId}
        setPostId={setPostId}
      />
      <Footer
        filterId={filterId}
        setFilterId={setFilterId}
        slideId={slideId}
        setSlideId={setSlideId}
        postId={postId}
        setPostId={setPostId}
      />
      {filterId === "blog" ? (
        <Post id={router.query.postId} pathname={router.pathname} />
      ) : filterId === "slides" ? (
        <Slide id={slideId} />
      ) : filterId === "watchlist" ? (
        <WatchList shuffleList={movies} shuffleMethod={shuffle} />
      ) : null}
      {/* // FIXME: find alternative to null */}
    </>
  );
};

export default Index;

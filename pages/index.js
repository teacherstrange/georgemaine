import { useRouter } from "next/router";
import Post from "../components/Post";
import Slide from "../components/Slide";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WatchList from "../components/WatchList";
import { useState } from "react";

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "var(--container)",
            width: "100vw",
            height: "100vh",
          }}
        >
          <WatchList />
        </div>
      ) : null}
      {/* // FIXME: find alternative to null */}
    </>
  );
};

export default Index;

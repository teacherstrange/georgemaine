import { useRouter } from "next/router";
import Post from "../components/Post";
import Slide from "../components/Slide";
import Nav from "../components/Nav";
import { useState } from "react";

const Index = () => {
  const router = useRouter();
  const [filterId, setFilterId] = useState("slides"); // FIXME: Better naming
  const [slideId, setSlideId] = useState("Mollie Mobile");

  return (
    <>
      {filterId === "posts" ? (
        <Post id={router.query.postId} pathname={router.pathname} />
      ) : filterId === "slides" ? (
        <Slide id={slideId} />
      ) : null}
      {/* // FIXME: find alternative to null */}
      <Nav
        filterId={filterId}
        setFilterId={setFilterId}
        setSlideId={setSlideId}
      />
    </>
  );
};

export default Index;

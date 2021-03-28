import { useRouter } from "next/router";
import Post from "../components/Post";
import Nav from "../components/Nav";
import { useState } from "react";

const Index = () => {
  const router = useRouter();
  const [filter, expandFilter] = useState("slides"); // FIXME: Better naming

  return (
    <>
      {filter === "posts" ? (
        <Post id={router.query.postId} pathname={router.pathname} />
      ) : filter === "slides" ? (
        <div>Slides tab</div>
      ) : null}
      {/* // FIXME: find alternative to null */}
      <Nav expandedFilter={filter} filterOnClick={expandFilter} />
    </>
  );
};

export default Index;

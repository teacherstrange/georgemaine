import Link from "next/link";
import { useRouter } from "next/router";

export const slides = [
  { id: "Mollie Mobile" },
  { id: "Mollie Video" },
  { id: "Mollie Checkout" },
  { id: "Mollie Apple Pay" },
];

export const posts = [
  { id: "Hello world", url: "hello_world" },
  { id: "Suntory Toki review", url: "suntory_toki_review" },
];

export default function Nav({ setFilterId, filterId, setSlideId }) {
  const router = useRouter();

  return (
    <nav>
      <Link href={"/"}>Georgemaine</Link>
      <div>
        <div>
          {filterId === "posts" ? (
            <button onClick={() => (router.push("/"), setFilterId("slides"))}>
              Work
            </button>
          ) : (
            slides.map((slide, index) => (
              <button onClick={() => setSlideId(slide.id)} key={index}>
                {slide.id}
              </button>
            ))
          )}
        </div>
        <div>
          {filterId === "slides" ? (
            <button onClick={() => setFilterId("posts")}>Articles</button>
          ) : (
            posts.map((post, index) => (
              <Link
                key={index}
                href={`/?postId=${post.url}`}
                as={`/post/${post.url}`}
              >
                <button>{post.id}</button>
              </Link>
            ))
          )}
        </div>
      </div>
      <button>Get in touch</button>
    </nav>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";

export const slides = [
  { id: "Mollie Mobile" },
  { id: "Mollie Video" },
  { id: "Mollie Checkout" },
  { id: "Mollie Apple Pay" },
];

export const posts = [
  { name: "Hello world", url: "hello_world" },
  { name: "Suntory Toki review", url: "suntory_toki_review" },
];

export default function Nav({ setFilterId, filterId, setSlideId }) {
  const router = useRouter();

  return (
    <nav>
      <Link href={"/"}>Georgemaine</Link>
      <div>
        <ul>
          {slides.map((slide, index) => (
            <li
              onClick={() =>
                filterId === "posts" // Better naming
                  ? (router.push("/"),
                    setFilterId("slides"),
                    setSlideId(slide.id))
                  : setSlideId(slide.id)
              }
              key={index}
            >
              {slide.id}
            </li>
          ))}
        </ul>
        <ul>
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/?postId=${post.url}`}
              as={`/post/${post.url}`}
            >
              <li onClick={() => setFilterId("posts")}>{post.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <button>Get in touch</button>
    </nav>
  );
}

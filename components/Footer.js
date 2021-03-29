import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { Filters, FilterLinks } from "./Filters";
import { useEffect } from "react";
import scrollPolyfill from "scroll-polyfill";

// FIXME: Is this the right position for these objects
const slides = [
  { id: "Mollie Mobile", width: 137, x: 0 },
  { id: "Mollie Video", width: 130, x: 137 },
  {
    id: "Mollie Checkout",
    width: 160,
    x: 267,
  },
  {
    id: "Mollie Apple Pay",
    width: 163,
    x: 427,
  },
];

const posts = [
  {
    id: "Hello world",
    url: "hello_world",
    width: 122,
    x: 0,
  },
  {
    id: "Suntory Toki review",
    url: "suntory_toki_review",
    width: 185,
    x: 122,
  },
];

export default function Footer({
  slideId,
  postId,
  setPostId,
  setFilterId,
  filterId,
  setSlideId,
}) {
  const router = useRouter();
  useEffect(() => {
    scrollPolyfill();
  }, []);

  const selectedSlide = slides.findIndex((slide) => slide.id === slideId);
  const selectedPost = posts.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one

  return (
    <footer className={styles.footer}>
      <div className={styles.filtersContainer}>
        <nav
          className={`${styles.mobileFilters} ${
            filterId === "slides" && styles.workFiltersExpanded
          }`}
        >
          {filterId === "posts" ? (
            <button
              className={styles.buttonLink}
              onClick={() => (router.push("/"), setFilterId("slides"))}
            >
              Work
            </button>
          ) : (
            <Filters array={slides} setId={setSlideId} />
          )}
          {filterId == "slides" ? (
            <div
              className={styles.filterSelection}
              style={{
                width: slides[selectedSlide].width,
                transform: `translateX(${slides[selectedSlide].x}px)`,
              }}
            ></div>
          ) : null}
        </nav>
        <nav
          className={`${styles.mobileFilters} ${
            filterId === "posts" && styles.articleFiltersExpanded
          }`}
        >
          {filterId === "slides" ? (
            <button
              className={styles.buttonLink}
              onClick={() => setFilterId("posts")}
            >
              Articles
            </button>
          ) : (
            <FilterLinks array={posts} setId={setPostId} />
          )}
          {filterId == "posts" ? (
            <div
              className={styles.filterSelection}
              style={{
                width: posts[selectedPost].width,
                transform: `translateX(${posts[selectedPost].x}px)`,
              }}
            ></div>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}

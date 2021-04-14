import { useRouter } from "next/router";
import Link from "next/link";
import Icon from "./Icon";
import styles from "./styles.module.css";
import { Filters, FilterLinks } from "./Filters";
import { useEffect, useRef, useState } from "react";
import scrollPolyfill from "scroll-polyfill";
// FIXME: Polyfill belongs inside component

// FIXME: Is this the right position for these objects
// FIXME: Consolidate Footer & Nav objects
const slides = [
  { id: "Mollie Mobile", width: 129, x: 0 },
  { id: "Mollie Video", width: 121, x: 129 },
  {
    id: "Mollie Checkout",
    width: 152,
    x: 250,
  },
  {
    id: "Mollie Apple Pay",
    width: 153,
    x: 402,
  },
];

const posts = [
  {
    id: "Hello world",
    url: "hello_world",
    width: 112,
    x: 0,
  },
  {
    id: "Suntory Toki review",
    url: "suntory_toki_review",
    width: 176,
    x: 112,
  },
];

const links = [
  {
    id: "Email",
    url: "mailto:georgemaine.lourens@gmail.com?subject=Hello%20%F0%9F%91%8B",
  },
  {
    id: "Twitter",
    url: "https://twitter.com/georgemaine",
  },
  {
    id: "Dribbble",
    url: "https://dribbble.com/georgemaine",
  },
  {
    id: "Github",
    url: "https://github.com/georgemaine",
  },
  {
    id: "LinkedIn",
    url: "https://www.linkedin.com/in/georgemaine",
  },
];

const Footer = ({
  slideId,
  postId,
  setPostId,
  setFilterId,
  filterId,
  setSlideId,
}) => {
  const router = useRouter();
  // FIXME: Polyfill is not needed beyond 768px
  const buttonRef = useRef();
  useEffect(() => {
    scrollPolyfill();
  }, []);

  // FIXME: Make util out of this
  const handleFilters = (hook, id) => {
    hook(id);
    setExpandedContactLinks(false);
  };

  const selectedSlide = slides.findIndex((slide) => slide.id === slideId);
  const selectedPost = posts.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one
  const [expandedContactLinks, setExpandedContactLinks] = useState(false);

  return (
    <footer className={styles.footer}>
      <div
        style={{
          display: "flex",
        }}
      >
        <nav
          className={`${styles.mobileFilters} ${
            filterId === "slides" && styles.workFiltersExpanded
          }`}
        >
          {filterId === "posts" ? (
            <button
              className={styles.buttonLink}
              onClick={() => (
                router.push("/"), handleFilters(setFilterId, "slides")
              )}
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
              onClick={() => handleFilters(setFilterId, "posts")}
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
        <nav
          ref={buttonRef}
          className={`${styles.mobileFilters} ${
            expandedContactLinks && styles.socialLinksExpanded
          }`}
          style={{
            minWidth: expandedContactLinks ? 246 : 126,
          }}
        >
          {expandedContactLinks === false ? (
            <button
              className={styles.buttonLink}
              onClick={() => (
                setTimeout(() => {
                  buttonRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "left",
                  });
                }, 0),
                setExpandedContactLinks(true)
              )}
            >
              Get in touch
            </button>
          ) : expandedContactLinks ? (
            links.map((link, index) => (
              <Link key={index} href={link.url}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  onClick={() => setExpandedContactLinks(false)}
                  className={styles.button}
                >
                  <Icon string={link.id} />
                </a>
              </Link>
            ))
          ) : null}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

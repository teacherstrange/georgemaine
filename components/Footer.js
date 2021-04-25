import { useRouter } from "next/router";
import Link from "next/link";
import Icon from "./Icon";
import styles from "./styles.module.css";
import { Filters, FilterLinks } from "./Filters";
import { useEffect, useState } from "react";
import scrollPolyfill from "scroll-polyfill";
// FIXME: Polyfill belongs inside component

// FIXME: Is this the right position for these objects
// FIXME: Consolidate Footer & Nav objects
const slides = [
  { id: "Mollie Mobile", width: 141, x: 0 },
  { id: "Mollie Video", width: 133, x: 141 },
  {
    id: "Mollie Checkout",
    width: 164,
    x: 274,
  },
  {
    id: "Mollie Apple Pay",
    width: 164,
    x: 436,
  },
];

const blog = [
  {
    id: "Hello world",
    url: "hello_world",
    width: 124,
    x: 0,
  },
];

// FIXME: Merge blog with links

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

  useEffect(() => {
    scrollPolyfill();
  }, []);

  // FIXME: Make util out of this
  const handleFilters = (hook, id) => {
    hook(id);
    setExpandedContactLinks(false);
  };

  const selectedSlide = slides.findIndex((slide) => slide.id === slideId);
  const selectedPost = blog.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one
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
          {filterId === "blog" ? (
            <button
              className={styles.buttonLink}
              onClick={() => (
                router.push("/"), handleFilters(setFilterId, "slides")
              )}
            >
              Portfolio
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
            filterId === "blog" && styles.articleFiltersExpanded
          }`}
        >
          {filterId === "slides" ? (
            <button
              className={styles.buttonLink}
              onClick={() => handleFilters(setFilterId, "blog")}
            >
              Get in touch
            </button>
          ) : (
            <>
              <FilterLinks array={blog} setId={setPostId} />
              {links.map((link, index) => (
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
              ))}
            </>
          )}
          {filterId == "blog" ? (
            <div
              className={styles.filterSelection}
              style={{
                width: blog[selectedPost].width,
                transform: `translateX(${blog[selectedPost].x}px)`,
              }}
            ></div>
          ) : null}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

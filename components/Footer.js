import { useRouter } from "next/router";
import Link from "next/link";
import Icon from "./Icon";
import styles from "./styles.module.css";
import { Filters, FilterLinks } from "./Filters";
import { useEffect } from "react";
import scrollPolyfill from "scroll-polyfill";
// FIXME: Polyfill belongs inside component
// FIXME: Consolidate Footer & Nav objects

const blog = [
  {
    id: "Hello world",
    url: "hello_world",
    width: 124,
    x: 0,
  },
];

// FIXME: Merge blog with links

const Footer = ({
  slideId,
  postId,
  setPostId,
  setFilterId,
  filterId,
  setSlideId,
  onShuffleBtnClick,
  onShareBtnClick,
  onTrailerBtnClick,
  trailerModalState,
  portfolio,
  socialLinks,
}) => {
  const router = useRouter();
  // FIXME: Polyfill is not needed beyond 768px

  useEffect(() => {
    scrollPolyfill();
  }, []);

  const selectedSlide = portfolio.findIndex((slide) => slide.id === slideId);
  const selectedPost = blog.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one

  return (
    <footer className={styles.footer}>
      <div
        style={{
          display: "flex",
        }}
      >
        <nav
          className={`${styles.mobileFilters} ${
            filterId === "portfolio" && styles.workFiltersExpanded
          }`}
        >
          {filterId === "blog" || filterId === "watchlist" ? (
            <button
              className={styles.buttonLink}
              onClick={() => (router.push("/"), setFilterId("portfolio"))}
            >
              Portfolio
            </button>
          ) : (
            <Filters array={portfolio} setId={setSlideId} />
          )}
          {filterId == "portfolio" ? (
            <div
              className={styles.filterSelection}
              style={{
                width: portfolio[selectedSlide].width,
                transform: `translateX(${portfolio[selectedSlide].x}px)`,
              }}
            ></div>
          ) : null}
        </nav>

        <nav
          className={`${styles.mobileFilters} ${
            filterId === "portfolio" && styles.workFiltersExpanded
          }`}
        >
          {filterId === "portfolio" || filterId === "blog" ? (
            <button
              className={styles.buttonLink}
              onClick={() => (router.push("/"), setFilterId("watchlist"))}
            >
              Watch List
            </button>
          ) : (
            <>
              <button onClick={() => onTrailerBtnClick(!trailerModalState)}>
                Play
              </button>
              <button onClick={onShuffleBtnClick}>Shuffle</button>
              <button onClick={onShareBtnClick}>Share</button>
            </>
          )}
        </nav>

        <nav
          className={`${styles.mobileFilters} ${
            filterId === "blog" && styles.articleFiltersExpanded
          }`}
        >
          {filterId === "portfolio" || filterId === "watchlist" ? (
            <button
              className={styles.buttonLink}
              onClick={() => setFilterId("blog")}
            >
              Get in touch
            </button>
          ) : (
            <>
              <FilterLinks array={blog} setId={setPostId} />
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.url}>
                  <a target='_blank' rel='noreferrer' className={styles.button}>
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

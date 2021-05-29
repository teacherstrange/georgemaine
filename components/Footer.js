import Link from "next/link";
import Icon from "./Icon";
import styles from "./styles.module.css";
import Filters from "./Filters";
import { useEffect } from "react";
import scrollPolyfill from "scroll-polyfill";
// FIXME: Polyfill belongs inside component

const Footer = ({
  slideId,
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
  // FIXME: Polyfill is not needed beyond 768px
  useEffect(() => scrollPolyfill(), []);

  const selectedSlide = portfolio.findIndex((slide) => slide.id === slideId);

  return (
    <footer className={styles.footer}>
      <div
        style={{
          display: "flex",
        }}
      >
        <nav
          className={`${styles.filters} ${
            filterId === "portfolio" && styles.workFiltersExpanded
          }`}
        >
          {filterId === "blog" || filterId === "movieList" ? (
            <button onClick={() => setFilterId("portfolio")}>Portfolio</button>
          ) : (
            <Filters
              array={portfolio}
              setId={setSlideId}
              active={portfolio[selectedSlide].id}
            />
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
          className={`${styles.filters} ${
            filterId === "movieList" && styles.movieListControlsExpanded
          }`}
        >
          {filterId === "portfolio" || filterId === "blog" ? (
            <button
              className={styles.movieListNavWideButton}
              onClick={() => setFilterId("movieList")}
            >
              Movie List
            </button>
          ) : (
            <>
              <button onClick={() => onTrailerBtnClick(!trailerModalState)}>
                <Icon string={"Play"} />
              </button>
              <button onClick={onShuffleBtnClick}>Shuffle</button>
              <button onClick={onShareBtnClick}>
                <Icon string={"Share"} />
              </button>
            </>
          )}
        </nav>

        <nav
          className={`${styles.filters} ${
            filterId === "blog" && styles.articleFiltersExpanded
          }`}
        >
          {filterId === "portfolio" || filterId === "movieList" ? (
            <button onClick={() => setFilterId("blog")}>Get in touch</button>
          ) : (
            <>
              <button
                onClick={() =>
                  setTimeout(() => {
                    ref.current.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center",
                    });
                  }, 0)
                }
                style={{
                  color: "var(--primaryLabelColorLight)",
                }}
              >
                About me
              </button>
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.url}>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className={styles.buttonLink}
                  >
                    <Icon string={link.id} />
                  </a>
                </Link>
              ))}
            </>
          )}
          {filterId == "blog" ? (
            <div className={styles.filterSelection} />
          ) : null}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import styles from "./styles.module.css";
const portfolio = [
  {
    title: "Mobile apps for Mollie Payments",
    body: "Product Design · 2019-2020",
    id: "Mobile Apps",
  },
  {
    title: "Promo Video for Mollie Payments",
    body: "Design & Video · 2019",
    id: "Promo Video",
  },
  {
    title: "Checkout for Mollie Payments",
    body: "Product Design & Development · 2019",
    id: "Checkout",
  },
  {
    title: "Launch video for Mollie Payments ",
    body: "Design & Video · 2018",
    id: "Launch Video",
  },
];

export const GetInTouchMenu = ({ links }) => {
  return (
    <nav className={styles.getInTouchMenu}>
      <div className={styles.portfolioMenuTextBlock}>
        <h2>Georgemaine Lourens</h2>
        <p>Product Designer at Pitch</p>
      </div>
      <ul className={styles.getInTouchLinks}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.url}
                className={styles.bubbleBtn}
                style={{
                  display: "flex",
                  margin: "0 .3rem",
                }}
              >
                <Icon string={link.id} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export const MovieListMenu = ({
  onShuffleBtnClick,
  randomMovie,
  onShareBtnClick,
}) => {
  const ref = useRef();
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [movieListMenuHeight, setMovieListMenuHeight] = useState();
  const screenHeight = window.innerHeight;

  useEffect(() => {
    setMovieListMenuHeight(ref.current.clientHeight);
    menuExpanded === false && (ref.current.scrollTop = 0);
  }, [menuExpanded, onShuffleBtnClick]);

  return (
    <>
      <footer
        ref={ref}
        className={styles.movieListMenu}
        style={{
          transform: menuExpanded
            ? `translateY(${screenHeight - movieListMenuHeight - 18}px)`
            : `translateY(${screenHeight - 90}px)`,
          overflowY: menuExpanded ? "scroll" : "hidden",
        }}
      >
        <header className={styles.movieListMenuHeader}>
          <div
            style={{
              flexGrow: 1,
            }}
          >
            <h2>{randomMovie.name}</h2>
            <button
              className={styles.smallBtn}
              onClick={() => setMenuExpanded(!menuExpanded)}
            >
              Show more ›
            </button>
          </div>
          <div className={styles.movieListMenuBtns}>
            <button onClick={onShuffleBtnClick}>Shuffle</button>
            <button className={styles.bubbleBtn} onClick={onShareBtnClick}>
              <Icon string={"Share"} />
            </button>
          </div>
        </header>
        <p>{randomMovie.synopsis}</p>
        <p>
          {randomMovie.metadata[0]} · {randomMovie.metadata[1]} ·
          {randomMovie.metadata[2]}
        </p>
        <h3>Trailer</h3>
        <div className={styles.movieListMenuTrailerWrapper}>
          <video
            className={styles.movieListMenuVideo}
            poster={"images/wonder-woman-trailer-poster.jpg"}
            src={randomMovie.url}
            controls
            playsInline
          />
        </div>
      </footer>
      <div className={styles.portfolioMenuMask}>
        <figure
          className={styles.moviePosterDesktop}
          style={{
            backgroundImage:
              randomMovie.moviePosterDesktopUrl &&
              `url(${randomMovie.moviePosterDesktopUrl}`,
            top: "calc(3rem - 100vh)",
          }}
        />
      </div>
    </>
  );
};

export const PortfolioMenu = ({ onBtnClick, portfolioItem }) => {
  const [page, setPage] = useState();
  const setInitialPage = () =>
    portfolio.map((item, index) => portfolioItem === item.id && setPage(index));

  const handleNavigation = (i) => {
    i < 0 ? (i = 0) : i > portfolio.length - 1 ? (i = portfolio.length - 1) : i;
    setPage(i);
    onBtnClick(portfolio[i].id);
  };
  useEffect(() => {
    setInitialPage();
  }, []);

  return (
    <nav className={styles.portfolioMenu}>
      {portfolio.map((item, i) => {
        return (
          <div
            key={item.id}
            style={{
              display: i === page ? "block" : "none",
            }}
            className={styles.portfolioMenuTextBlock}
          >
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}

      <button
        className={styles.bubbleBtn}
        onClick={() => handleNavigation(page - 1)}
        disabled={page === 0 ? true : false}
      >
        <Icon string={"ArrowBack"} />
      </button>
      <button
        className={styles.bubbleBtn}
        onClick={() => handleNavigation(page + 1)}
        disabled={page === portfolio.length - 1 ? true : false}
      >
        <Icon string={"ArrowNext"} />
      </button>
    </nav>
  );
};

export const TabMenu = ({ setFilterId, filterId }) => {
  return (
    <nav className={styles.tabMenu}>
      <button
        className={styles.tabMenuButton}
        onClick={() => setFilterId("portfolio")}
      >
        Portfolio
      </button>
      <button
        className={styles.tabMenuButton}
        onClick={() => setFilterId("movieList")}
      >
        Movie List
      </button>
      <button
        className={styles.tabMenuButton}
        onClick={() => setFilterId("blog")}
      >
        Get in touch
      </button>
      <div
        className={styles.tabMenuSelectionBackground}
        style={{
          width:
            filterId === "portfolio"
              ? 91
              : filterId === "movieList"
              ? 106
              : filterId === "blog"
              ? 121
              : 91,
          transform:
            filterId === "portfolio"
              ? "translateX(0px)"
              : filterId === "movieList"
              ? "translateX(91px)"
              : filterId === "blog"
              ? "translateX(197px)"
              : "translateX(0px)",
        }}
      />
    </nav>
  );
};

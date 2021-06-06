import { useRef } from "react";
import styles from "./styles.module.css";

const TrailerModal = ({ onCloseBtnClick, trailerId, isActive }) => {
  const trailerVideoRef = useRef(null);

  const pauseTrailerVideo = () => {
    trailerVideoRef.current.pause();
  };

  return (
    <div
      className={styles.trailerModalContainer}
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? `translateY(0)` : `translateY(100vh)`,
      }}
    >
      <div className={styles.trailerVideoContainer}>
        <video
          ref={trailerVideoRef}
          autoPlay
          controls
          playsInline
          muted
          loop
          className={styles.trailerVideo}
          src={trailerId.url}
        />
      </div>
      <button
        className={styles.trailerModalCloseBtn}
        onClick={() => (onCloseBtnClick(false), pauseTrailerVideo())}
      >
        Close
      </button>
    </div>
  );
};

const MoviePoster = ({ id, isActive, isExpanded }) => (
  <>
    <figure
      className={styles.moviePosterMobile}
      style={{
        backgroundImage:
          id.moviePosterMobileUrl && `url(${id.moviePosterMobileUrl}`,
        opacity: isActive ? 0 : isExpanded ? 0.4 : 1,
        transform: isActive ? "scale(.97)" : "scale(1)",
      }}
    />
    <figure
      className={styles.moviePosterDesktop}
      style={{
        backgroundImage:
          id.moviePosterDesktopUrl && `url(${id.moviePosterDesktopUrl}`,
        opacity: isActive ? 0 : isExpanded ? 0.4 : 1,
        transform: isActive ? "scale(.97)" : "scale(1)",
      }}
    />
  </>
);

const MovieList = ({
  randomMovie,
  trailerMode,
  onCloseBtnClick,
  isExpanded,
}) => {
  return (
    <>
      <main className={styles.movieListWrapper}>
        <MoviePoster
          id={randomMovie}
          isActive={trailerMode}
          isExpanded={isExpanded}
        />
      </main>

      <TrailerModal
        onCloseBtnClick={onCloseBtnClick}
        trailerId={randomMovie}
        isActive={trailerMode}
      />
    </>
  );
};

export default MovieList;

import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const TrailerModal = ({ onCloseBtnClick, trailer, trailerMode }) => {
  const trailerRef = useRef(null);

  const pauseTrailer = () => {
    trailerRef.current.pause();
  };

  const playTrailer = () => {
    trailerRef.current.play();
  };

  useEffect(() => {
    trailerMode && trailerRef.current.paused ? playTrailer() : pauseTrailer();
  }, [trailerMode]);

  return (
    <div
      className={styles.trailerModal}
      style={{
        transform: trailerMode ? `translateY(0)` : `translateY(100%)`,
      }}
    >
      <div className={styles.trailerVideoContainer}>
        <video
          ref={trailerRef}
          controls
          className={styles.trailerVideo}
          src={trailer.url}
        />
      </div>
      <button
        ariaLabel='Close'
        className={styles.trailerCloseBtn}
        onClick={() => (onCloseBtnClick(false), pauseTrailer())}
      >
        Close
      </button>
    </div>
  );
};

const MoviePoster = ({ randomMovie, trailerMode }) => (
  <>
    <figure
      className={styles.moviePosterMobile}
      style={{
        backgroundImage:
          randomMovieid && `url(images/${randomMovieid}-mobile.jpg`,
        opacity: trailerMode ? 0 : 1,
        transform: trailerMode ? "scale(.96)" : "scale(1)",
      }}
    />
    <figure
      className={styles.moviePosterDesktop}
      style={{
        backgroundImage: randomMovieid && `url(images/${randomMovieid}.jpg`,
        opacity: trailerMode ? 0.3 : 1,
        transform: trailerMode ? "scale(.96)" : "scale(1)",
      }}
    />
  </>
);

const MovieList = ({ randomMovie, trailerMode, onCloseBtnClick }) => {
  return (
    <>
      <main className={styles.movieListWrapper}>
        <MoviePoster randomMovie={randomMovie} trailerMode={trailerMode} />
      </main>

      <TrailerModal
        onCloseBtnClick={onCloseBtnClick}
        trailer={randomMovie}
        trailerMode={trailerMode}
      />
    </>
  );
};

export default MovieList;

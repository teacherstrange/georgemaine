import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
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

const Metadata = ({ id, isActive, isExpanded, isExpandedOffset }) => (
  <ul
    className={styles.movieMetadataList}
    style={{
      opacity: isActive ? 0 : 1,
      position: "relative",
      zIndex: 1,
      top: isExpandedOffset,
      transform: isExpanded
        ? `translateY(-${isExpandedOffset}px)`
        : "translateY(0px)",
    }}
  >
    {id.metadata.map((metadata, key) => {
      return (
        <li key={key} className={styles.movieMetadataListItem}>
          {metadata}
        </li>
      );
    })}
  </ul>
);

const Synopsis = ({
  children,
  isActive,
  pRef,
  isExpanded,
  isExpandedOffset,
}) => {
  return (
    <p
      ref={pRef}
      className={styles.movieSynopsis}
      style={{
        opacity: isActive ? 0 : 1,
        transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        position: "relative",
        zIndex: 1,
        width: "calc(100% - 50px)",
        marginLeft: "auto",
        marginRight: "auto",
        top: isExpandedOffset,
        transform: isExpanded
          ? `translateY(-${isExpandedOffset}px)`
          : "translateY(0px)",
      }}
    >
      {children}
    </p>
  );
};

const MovieList = ({
  randomMovie,
  trailerMode,
  onCloseBtnClick,
  isExpanded,
  setIsExpanded,
  pRef,
  shuffleState,
}) => {
  const [synopsisOffset, setSynopsisOffset] = useState(0);

  useEffect(() => {
    setSynopsisOffset(pRef.current.getBoundingClientRect().height);
  }, [shuffleState]);
  return (
    <>
      <main className={styles.movieListWrapper}>
        <MoviePoster
          id={randomMovie}
          isActive={trailerMode}
          isExpanded={isExpanded}
        />
        <div className={styles.overlay} />
        <h1
          className={styles.movieTitle}
          style={{
            opacity: trailerMode ? 0 : 1,
            top: synopsisOffset,
            transform: isExpanded
              ? `translateY(-${synopsisOffset}px)`
              : "translateY(0px)",
          }}
        >
          {randomMovie.name}
        </h1>
        <Metadata
          id={randomMovie}
          isActive={trailerMode}
          isExpanded={isExpanded}
          isExpandedOffset={synopsisOffset}
        />
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            zIndex: 1,
            mask: "linear-gradient(0deg, transparent 0px rgb(0,0,0) 100%",
            maskPosition: "top bottom",
          }}
        >
          <Synopsis
            isActive={trailerMode}
            pRef={pRef}
            isExpanded={isExpanded}
            isExpandedOffset={synopsisOffset}
          >
            {randomMovie.synopsis}
          </Synopsis>
        </div>
        <button
          className={styles.transparentIconButton}
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            marginBottom: "calc(6rem + 4vh)",
            position: "relative",
            zIndex: 1,
          }}
        >
          More
          <span
            style={{
              transform: isExpanded ? "rotateX(180deg)" : "initial",
              transition: ".4s ease",
              display: "flex",
            }}
          >
            <Icon string='Chevron' />
          </span>
        </button>
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

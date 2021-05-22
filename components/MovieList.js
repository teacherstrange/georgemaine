import { useEffect, useState } from "react";
import Icon from "./Icon";
import styles from "./styles.module.css";

const Player = ({ onCloseBtnClick, trailerId, isActive }) => (
  <div
    className={styles.movieListPlayer}
    style={{
      opacity: isActive ? 1 : 0,
      transform: isActive ? `translateY(0)` : `translateY(100vh)`,
    }}
  >
    <Trailer id={trailerId} />
    <button
      className={styles.trailerCloseButton}
      onClick={() => onCloseBtnClick(false)}
    >
      Close
    </button>
    Trailer placeholder
  </div>
);

const MoviePoster = ({ id, isActive, isExpanded }) => (
  <figure
    className={styles.movieListPoster}
    style={{
      backgroundImage: id.posterUrl && `url(${id.posterUrl}`,
      opacity: isActive ? 0 : isExpanded ? 0.4 : 1,
      transform: isActive ? "scale(.97)" : "scale(1)",
    }}
  />
);

const Trailer = ({ id }) => (
  <video
    autoPlay
    controls
    playsInline
    muted
    loop
    className={styles.video}
    src={id.url}
  />
);

const Metadata = ({ id, isActive, isExpanded, isExpandedOffset }) => (
  <ul
    className={styles.metaDataList}
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
        <li key={key} className={styles.metaDataListItem}>
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
      className={styles.movieListSynopsis}
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
  theaterMode,
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
          isActive={theaterMode}
          isExpanded={isExpanded}
        />
        <div className={styles.overlay} />
        <h1
          className={styles.title}
          style={{
            opacity: theaterMode ? 0 : 1,
            position: "relative",
            top: synopsisOffset,
            zIndex: 1,
            transform: isExpanded
              ? `translateY(-${synopsisOffset}px)`
              : "translateY(0px)",
            marginBottom: 3,
            transition: "transform .6s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          {randomMovie.name}
        </h1>
        <Metadata
          id={randomMovie}
          isActive={theaterMode}
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
            isActive={theaterMode}
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

      <Player
        onCloseBtnClick={onCloseBtnClick}
        trailerId={randomMovie}
        isActive={theaterMode}
      />
    </>
  );
};

export default MovieList;

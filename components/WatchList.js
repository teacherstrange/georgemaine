import { useEffect, useState } from "react";
import Icon from "./Icon";
import styles from "./styles.module.css";

const Player = ({ onCloseBtnClick, trailerId, isActive }) => (
  <div
    className={styles.watchListPlayer}
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
    className={styles.watchListPoster}
    style={{
      backgroundImage: id.posterUrl && `url(${id.posterUrl}`,
      opacity: isActive ? 0 : isExpanded ? 0.4 : 1,
      transform: isActive ? "scale(.97)" : "scale(1)",
    }}
  />
);

const Trailer = ({ id }) => {
  switch (id) {
    case "Wonder Woman":
      return (
        <video
          autoPlay
          controls
          playsInline
          muted
          loop
          className={styles.video}
          src={
            "https://play.itunes.apple.com/WebObjects/MZPlay.woa/hls/playlist.m3u8?cc=NL&a=1545235353&id=233856991&l=nl-NL&aec=HD&xtrick=true&webbrowser=true"
          }
        />
      );
    default:
      return (
        <video
          autoPlay
          controls
          playsInline
          muted
          loop
          className={styles.video}
          src={""}
        />
      );
  }
};

const Metadata = ({ id, isActive, isExpanded, isExpandedOffset }) => {
  switch (id) {
    case "Wonder Woman":
      return (
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
          <li className={styles.metaDataListItem}>Action</li>
          <li className={styles.metaDataListItem}>2017</li>
          <li className={styles.metaDataListItem}>2 hr 21 min</li>
          <li className={styles.metaDataListItem}>Apple TV+</li>
        </ul>
      );
    default:
      return (
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
          <li className={styles.metaDataListItem}>Genre</li>
          <li className={styles.metaDataListItem}>Release year</li>
          <li className={styles.metaDataListItem}>Duration</li>
          <li className={styles.metaDataListItem}>Platform</li>
        </ul>
      );
  }
};

const Description = ({ id }) => {
  switch (id.name) {
    case "Wonder Woman":
      return <>{id.synopsis}</>;

    default:
      return (
        <>
          "Nulla lectus ante, consequat et ex eget, feugiat tincidunt metus.
          Phasellus sodales massa malesuada tellus fringilla, nec bibendum
          tellus blandit. Vivamus a ante congue, porta nunc nec, hendrerit
          turpis. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae. Phasellus sodales massa malesuada
          tellus fringilla, nec bibendum tellus blandit. In sit amet felis
          malesuada, feugiat purus eget, varius mi. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos."
        </>
      );
  }
};

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
      className={styles.watchListSynopsis}
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

const WatchList = ({
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
      <main className={styles.watchListWrapper}>
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
          id={randomMovie.name}
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
            <Description id={randomMovie} isExpanded={isExpanded} />
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
        trailerId={randomMovie.name}
        isActive={theaterMode}
      />
    </>
  );
};

export default WatchList;

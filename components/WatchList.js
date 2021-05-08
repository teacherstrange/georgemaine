import styles from "./styles.module.css";
import Icon from "../components/Icon";

const Controls = ({
  onTrailerBtnClick,
  trailerModalState,
  onShuffleBtnClick,
  onShareBtnClick,
}) => {
  return (
    <footer className={styles.watchListNavDesktop}>
      <button
        onClick={() => onTrailerBtnClick(!trailerModalState)}
        className={styles.watchListNavIconButton}
      >
        <Icon string={"Play"} />
      </button>
      <button className={styles.watchListNavButton} onClick={onShuffleBtnClick}>
        Shuffle
      </button>
      <button
        className={styles.watchListNavIconButton}
        onClick={onShareBtnClick}
      >
        <Icon string={"Share"} />
      </button>
    </footer>
  );
};

const Player = ({ onCloseBtnClick, trailerId, isActive }) => {
  return (
    <div
      className={styles.watchListPlayer}
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? `translateY(0)` : `translateY(100vh)`,
      }}
    >
      <Trailer id={trailerId} />
      <button
        onClick={() => onCloseBtnClick(false)}
        style={{ position: "relative" }}
      >
        Close
      </button>
      Trailer placeholder
    </div>
  );
};

const MoviePoster = ({ id, isActive }) => {
  // FIXME: Improve code
  switch (id) {
    case "Wonder Woman":
      return (
        <figure
          style={{
            position: "absolute",
            zIndex: -2,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: "url(images/wonder-woman.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            width: "100%",
            height: "100%",
            transition: "600ms",
            transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            transitionProperty: "opacity , transform",
            opacity: isActive ? 0 : 1,
            transform: isActive ? "scale(.97)" : "scale(1)",
          }}
        />
      );

    default:
      return (
        <figure
          style={{
            position: "absolute",
            zIndex: -2,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage:
              "linear-gradient(to right, #feefff, #e1d6ea 50%, #FFE4E2 75%)",
            backgroundPosition: "100% 0%",
            transition:
              "4s background-position,transform 1s cubic-bezier(0.39, 0.575, 0.565, 1)",
            backgroundSize: "300% 100%",
            width: "100%",
            height: "100%",
            transition: "600ms",
            transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            transitionProperty: "opacity , transform",
            opacity: isActive ? 0 : 1,
            transform: isActive ? "scale(.97)" : "scale(1)",
          }}
        />
      );
  }
};

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

const Metadata = ({ id, isActive }) => {
  switch (id) {
    case "Wonder Woman":
      return (
        <ul
          className={styles.metaDataList}
          style={{
            opacity: isActive ? 0 : 1,
            transform: isActive ? "translateY(-15px)" : "translateY(0)",
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
            transform: isActive ? "translateY(-15px)" : "translateY(0)",
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

const Description = ({ id, isActive }) => {
  switch (id) {
    case "Wonder Woman":
      return (
        <p
          className={styles.watchListSynopsis}
          style={{
            opacity: isActive ? 0 : 1,
            transform: isActive ? "translateY(-15px)" : "translateY(0)",
          }}
        >
          Before she was Wonder Woman, she was Diana, princess of the Amazons,
          trained to be an unconquerable warrior. Raised on a sheltered island
          paradise, when an American pilot crashes on their shores and tells of
          a massive conflict raging in the outside world, Diana leaves her home,
          convinced she can stop the threat. Fighting alongside man in a war to
          end all wars, Diana will discover her full powers… and her true
          destiny.
        </p>
      );

    default:
      return (
        <p
          className={styles.watchListSynopsis}
          style={{
            opacity: isActive ? 0 : 1,
            transform: isActive ? "translateY(-15px)" : "translateY(0)",
          }}
        >
          Nulla lectus ante, consequat et ex eget, feugiat tincidunt metus.
          Phasellus sodales massa malesuada tellus fringilla, nec bibendum
          tellus blandit. Vivamus a ante congue, porta nunc nec, hendrerit
          turpis. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae. Phasellus sodales massa malesuada
          tellus fringilla, nec bibendum tellus blandit. In sit amet felis
          malesuada, feugiat purus eget, varius mi. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      );
  }
};

const WatchList = ({
  randomMovie,
  onShuffleBtnClick,
  onShareBtnClick,
  theaterMode,
  onCloseBtnClick,
  onTrailerBtnClick,
}) => {
  return (
    <>
      <main className={styles.watchListWrapper}>
        <MoviePoster id={randomMovie} isActive={theaterMode} />
        <h1
          className={styles.title}
          style={{
            opacity: theaterMode ? 0 : 1,
            transform: theaterMode ? "translateY(-15px)" : "translateY(0)",
          }}
        >
          {randomMovie}
        </h1>
        <Metadata id={randomMovie} isActive={theaterMode} />

        <Description id={randomMovie} isActive={theaterMode} />
        <Controls
          onTrailerBtnClick={onTrailerBtnClick}
          trailerModalState={theaterMode}
          onShuffleBtnClick={onShuffleBtnClick}
          onShareBtnClick={onShareBtnClick}
        />
      </main>

      <Player
        onCloseBtnClick={onCloseBtnClick}
        trailerId={randomMovie}
        isActive={theaterMode}
      />
    </>
  );
};

export default WatchList;

import styles from "./styles.module.css";
import Icon from "../components/Icon";

const Controls = ({
  onTrailerBtnClick,
  trailerModalState,
  onShuffleBtnClick,
  onShareBtnClick,
}) => {
  return (
    <footer
      className={styles.controls}
      style={{
        padding: 0,
        bottom: "4%",
      }}
    >
      <button
        onClick={() => onTrailerBtnClick(!trailerModalState)}
        className={styles.buttonControl}
        style={{
          borderRadius: 0,
        }}
      >
        <Icon string={"Play"} />
      </button>
      <button
        className={styles.buttonControl}
        onClick={onShuffleBtnClick}
        style={{
          borderRadius: 0,
        }}
      >
        Shuffle
      </button>
      <button
        className={styles.buttonControl}
        onClick={onShareBtnClick}
        style={{
          borderRadius: 0,
        }}
      >
        <Icon string={"Share"} />
      </button>
    </footer>
  );
};

const Player = ({ onCloseBtnClick, trailerId }) => {
  return (
    <div className={styles.watchListPlayer}>
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

const MoviePoster = ({ id }) => {
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

const Metadata = ({ id }) => {
  switch (id) {
    case "Wonder Woman":
      return (
        <ul>
          <li>Action</li>
          <li>2017</li>
          <li>2 hr 21 min</li>
          <li>Apple TV+</li>
        </ul>
      );
    default:
      return (
        <ul>
          <li>Genre</li>
          <li>Release year</li>
          <li>Duration</li>
          <li>Platform</li>
        </ul>
      );
  }
};

const Description = ({ id }) => {
  switch (id) {
    case "Wonder Woman":
      return (
        <p
          style={{
            maxWidth: 600,
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
          style={{
            maxWidth: 600,
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
  trailerModalActive,
  onCloseBtnClick,
  onTrailerBtnClick,
}) => {
  return (
    <>
      <main className={styles.watchListWrapper}>
        <MoviePoster id={randomMovie} />
        <Metadata id={randomMovie} />
        <p>
          <strong>{randomMovie}</strong>
        </p>

        <Description id={randomMovie} />
        <Controls
          onTrailerBtnClick={onTrailerBtnClick}
          trailerModalState={trailerModalActive}
          onShuffleBtnClick={onShuffleBtnClick}
          onShareBtnClick={onShareBtnClick}
        />
      </main>
      {trailerModalActive && (
        <Player onCloseBtnClick={onCloseBtnClick} trailerId={randomMovie} />
      )}
    </>
  );
};

export default WatchList;

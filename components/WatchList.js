import { useState } from "react";
import styles from "./styles.module.css";

const Controls = ({ onShuffleBtnClick, onPlayBtnClick, trailerModalState }) => {
  const movies = [
    "Wonder Woman",
    "Movie 2",
    "Movie 3",
    "Movie 4",
    "Movie 5",
    "Movie 6",
    "Movie 7",
  ];

  const shuffle = (array) => {
    while (array.length) {
      const random = Math.floor(Math.random() * array.length);
      const el = array.splice(random, 1)[0];
      return el;
    }
  };

  return (
    <footer className={styles.filters}>
      <button onClick={() => onPlayBtnClick(!trailerModalState)}>Play</button>
      <button onClick={() => onShuffleBtnClick(shuffle(movies))}>
        Shuffle
      </button>
      <button>Share</button>
    </footer>
  );
};

const Player = ({ onCloseBtnClick }) => {
  return (
    <div className={styles.watchListPlayer}>
      <button onClick={() => onCloseBtnClick(false)}>Close</button>Trailer
      placeholder
    </div>
  );
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

const WatchList = () => {
  const [watchlistId, setWatchlistId] = useState("Movie Title");
  const [trailerModalActive, setTrailerModalActive] = useState(false);

  return (
    <>
      <main className={styles.watchListWrapper}>
        <Metadata id={watchlistId} />
        <p>
          <strong>{watchlistId}</strong>
        </p>
        <Description id={watchlistId} />
        <Controls
          onPlayBtnClick={setTrailerModalActive}
          trailerModalState={trailerModalActive}
          onShuffleBtnClick={setWatchlistId}
          id={watchlistId}
        />
      </main>
      {trailerModalActive ? (
        <Player onCloseBtnClick={setTrailerModalActive} />
      ) : null}
    </>
  );
};

export default WatchList;

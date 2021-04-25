import styles from "./styles.module.css";
const Controls = () => {
  return (
    <footer styles={styles.filters}>
      <button>Play</button>
      <button>Shuffle</button>
      <button>Share</button>
    </footer>
  );
};

const WatchList = () => {
  return (
    <>
      "Watch list placeholder"
      <Controls />
    </>
  );
};

export default WatchList;

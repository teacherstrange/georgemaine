import styles from "./styles.module.css";

const Nav = ({ setFilterId, filterId }) => {
  return (
    <nav className={styles.nav}>
      <button onClick={() => setFilterId("portfolio")}>Portfolio</button>
      <button onClick={() => setFilterId("movieList")}>Movie List</button>
      <button onClick={() => setFilterId("blog")}>Get in touch</button>
      <div
        className={styles.navSelectionBackground}
        style={{
          width:
            filterId === "portfolio"
              ? 91
              : filterId === "movieList"
              ? 106
              : filterId === "blog"
              ? 124
              : 91,
          transform:
            filterId === "portfolio"
              ? "translateX(0px)"
              : filterId === "movieList"
              ? "translateX(91px)"
              : filterId === "blog"
              ? "translateX(201px)"
              : "translateX(0px)",
        }}
      />
    </nav>
  );
};

export default Nav;

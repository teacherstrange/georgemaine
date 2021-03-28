import React from "react";
import styles from "./styles.module.css";

const Slide = ({ id }) => {
  return <div className={styles.post}>I am the slide {id};</div>;
};

export default Slide;

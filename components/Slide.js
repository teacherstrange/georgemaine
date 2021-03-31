import React from "react";
import styles from "./styles.module.css";

// FIXME: This is some ugly code lol
const Caption = ({ id }) => {
  switch (id) {
    case "Mollie Mobile":
      return (
        <p className={styles.caption}>
          <strong>{id}</strong>. Designed apps for iOS, Android and developed
          the landing page • 2020
        </p>
      );
    case "Mollie Video":
      return (
        <p className={styles.caption}>
          <strong>{id}</strong>. Created an engaging video to help showcase
          Mollie at events • 2020
        </p>
      );
    case "Mollie Checkout":
      return (
        <p className={styles.caption}>
          <strong>{id}</strong>. Redesigned and developed the Mollie Checkout
          Web application • 2019
        </p>
      );
    case "Mollie Apple Pay":
      return (
        <p className={styles.caption}>
          <strong>{id}</strong>. Created an engaging promo video for the Mollie
          Apple Pay launch • 2019
        </p>
      );
  }
};

const Slide = ({ id }) => {
  return (
    <div className={styles.slide}>
      <Caption id={id} />
    </div>
  );
};

export default Slide;

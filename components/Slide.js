import React from "react";
import styles from "./styles.module.css";

// FIXME: This is some ugly code lol
const Video = ({ id }) => {
  switch (id) {
    case "Mobile Apps":
      return (
        <>
          <video
            autoPlay
            playsInline
            muted
            loop
            src={"videos/mollie-mobile-mobile.mp4"}
            className={styles.mobileVideo}
          />
          <video
            autoPlay
            playsInline
            muted
            loop
            src={"videos/mollie-mobile.mp4"}
            className={styles.desktopVideo}
          />
        </>
      );
    case "Promo Video":
      return (
        <>
          <video
            autoPlay
            playsInline
            muted
            loop
            src={"videos/mollie-video.mp4"}
            className={styles.video}
          />
        </>
      );
    case "Checkout":
      return (
        <>
          <video
            autoPlay
            playsInline
            muted
            loop
            src={"videos/mollie-checkout-mobile.mp4"}
            className={styles.mobileVideo}
          />
          <video
            autoPlay
            playsInline
            muted
            loop
            src={"videos/mollie-checkout.mp4"}
            className={styles.desktopVideo}
          />
        </>
      );
    case "Launch Video":
      return (
        <>
          <video
            autoPlay
            playsInline
            muted
            loop
            src={"videos/mollie-apple-pay.mp4"}
            className={styles.video}
          />
        </>
      );
  }
};
const Caption = ({ id }) => {
  switch (id) {
    case "Mobile Apps":
      return (
        <h1
          className={styles.title}
          style={{
            color: "var(--primaryLabelColorLight)",
            position: "relative",
            zIndex: 2,
            paddingRight: 25,
            paddingLeft: 25,
          }}
        >
          <strong style={{ color: "var(--primaryLabelColorLight)" }}>
            Mobile apps for Mollie Payments
          </strong>{" "}
          · Product Design · 2019-2020
        </h1>
      );
    case "Promo Video":
      return (
        <h1
          className={styles.title}
          style={{
            color: "var(--primaryLabelColorLight)",
            position: "relative",
            zIndex: 2,
            paddingRight: 25,
            paddingLeft: 25,
          }}
        >
          <strong style={{ color: "var(--primaryLabelColorLight)" }}>
            Promo Video for Mollie Payments
          </strong>{" "}
          · Design & Video · 2019
        </h1>
      );
    case "Checkout":
      return (
        <h1
          className={styles.title}
          style={{
            color: "var(--primaryLabelColorLight)",
            position: "relative",
            zIndex: 2,
            paddingRight: 25,
            paddingLeft: 25,
          }}
        >
          <strong style={{ color: "var(--primaryLabelColorLight)" }}>
            Checkout for Mollie Payments
          </strong>{" "}
          · Product Design & Development · 2019
        </h1>
      );
    case "Launch Video":
      return (
        <h1
          className={styles.title}
          style={{
            color: "var(--primaryLabelColorLight)",
            position: "relative",
            zIndex: 2,
            paddingRight: 25,
            paddingLeft: 25,
          }}
        >
          <strong
            style={{
              color: "var(--primaryLabelColorLight)",
            }}
          >
            Apple Pay launch video for Mollie Payments
          </strong>{" "}
          · Design & Video · 2018
        </h1>
      );
  }
};

const Slide = ({ id }) => {
  return (
    <div className={styles.slide}>
      <Video id={id} />
      <Caption id={id} />
    </div>
  );
};

export default Slide;

import React, { useState } from "react";
import Icon from "./Icon";
import styles from "./styles.module.css";

// FIXME: This is some ugly code lol
const Video = ({ id, isMuted, setMuted }) => {
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
          <MuteButton onClick={() => setMuted(!isMuted)} isMuted={isMuted} />
          <video
            autoPlay
            playsInline
            muted={isMuted ? true : false}
            loop
            src={"videos/promo-video.mp4"}
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
          <MuteButton onClick={() => setMuted(!isMuted)} isMuted={isMuted} />
          <video
            autoPlay
            playsInline
            muted={isMuted ? true : false}
            loop
            src={"videos/launch-video.mp4"}
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

const MuteButton = ({ onClick, isMuted }) => (
  <button
    style={{
      position: "fixed",
      top: 12,
      right: 12,
      zIndex: 3,
      backgroundColor: "var(--secondaryLabelColorDark)",
      boxShadow: "0 0 0 0.5px rgba(255,255,255,.16)",
      borderRadius: 18,
      backdropFilter: "blur(3rem)",
    }}
    onClick={() => onClick(!isMuted)}
  >
    {isMuted ? <Icon string='isMuted' /> : <Icon string='Mute' />}
  </button>
);

const Slide = ({ id }) => {
  const [muted, setMuted] = useState(false);
  return (
    <div className={styles.slide}>
      <Video id={id} isMuted={muted} setMuted={setMuted} />
      <Caption id={id} />
    </div>
  );
};

export default Slide;

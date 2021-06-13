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

const MuteButton = ({ onClick, isMuted }) => (
  <button
    aria-label='Mute Sound'
    style={{
      position: "fixed",
      top: 12,
      right: 12,
      zIndex: 3,
      boxShadow: "0 0 0 0.5px rgba(255,255,255,.16)",
      borderRadius: 18,
      backdropFilter: "blur(3rem)",
    }}
    onClick={() => onClick(!isMuted)}
  >
    {isMuted ? <Icon string='isMuted' /> : <Icon string='Mute' />}
  </button>
);

const PortfolioPage = ({ id }) => {
  const [muted, setMuted] = useState(false);
  return (
    <div className={styles.PortfolioPage}>
      <Video id={id} isMuted={muted} setMuted={setMuted} />
    </div>
  );
};

export default PortfolioPage;

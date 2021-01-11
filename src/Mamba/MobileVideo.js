import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PlayIcon, PlayPauseButton } from "./index";

const Video = styled.video`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobilePlayButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.56));

  @media (min-width: 1024px) {
    display: none;
  }
`;

export function MobileVideo(props) {
  const mobileVideoRef = useRef(null);

  function playPauseMobileVideo() {
    const mobileVideo = mobileVideoRef.current;
    mobileVideo.play();
  }

  useEffect(() => {
    const mobileVideo = mobileVideoRef.current;
    if (!props.isMorphed && mobileVideo.currentTime > 0) {
      mobileVideo.pause();
    }
  }, [props.isMorphed]);

  useEffect(() => {
    const mobileVideo = mobileVideoRef.current;
    function onFullScreen(e) {
      mobileVideo.webkitFullscreenElement
        ? mobileVideo.setAttribute("controls", "")
        : mobileVideo.removeAttribute("controls");
    }

    mobileVideo.addEventListener("webkitfullscreenchange", onFullScreen);
    return () =>
      mobileVideo.removeEventListener("webkitfullscreenchange", onFullScreen);
  }, []);

  return (
    <>
      <Video ref={mobileVideoRef} preload='metadata' poster={props.poster}>
        <source src={props.src} type='video/mp4' />
      </Video>
      <MobilePlayButtonContainer>
        <PlayPauseButton
          ariaLabel='Play or Pause'
          type='button'
          onClick={() => playPauseMobileVideo()}
        >
          <PlayIcon
            style={{
              transform: `scale(${props.reverseScale})`,
              transition: "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)",
            }}
          />
        </PlayPauseButton>
      </MobilePlayButtonContainer>
    </>
  );
}

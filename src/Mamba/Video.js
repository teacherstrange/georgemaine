import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { SmallCaption, VolumeControl } from "./index";

const MorphTransition = "all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)";

export const VideoContainer = styled.div`
  width: calc(100% - 48px);
  border-radius: 4px;
  margin: auto;
  border: 3px solid #111;
  transition: ${MorphTransition};
  position: relative;

  ${(props) =>
    props.isMorphed &&
    css`
      width: 100%;
    `}

  video {
    width: 100%;
    display: block;
  }
`;
const ControlsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.56));
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 1s cubic-bezier(0.4, 0, 0.6, 1);
`;
const VideoControls = styled.ul`
  display: none;
`;
const PlayPauseButton = styled.button``;
const Progress = styled.progress``;
const ProgressBar = styled.span``;
const MuteButton = styled.button``;
const FullScreenButton = styled.button``;

export function Video(props) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const controlsRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const fullscreenRef = useRef(null);

  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [userHover, setUserHover] = useState(false);
  const [controlsHover, setControlsHover] = useState(false);

  function SetVolume(e) {
    videoRef.current.volume = e.target.value / 100;
  }
  function handleUserHover(event) {
    event.stopPropagation();
    setUserHover(!userHover);
  }
  function skipAhead(e) {
    const position =
      (e.pageX - progressRef.current.offsetLeft) /
      progressRef.current.offsetWidth;
    videoRef.current.currentTime = position * videoRef.current.duration;
  }

  useEffect(() => {
    var supportsVideo = !!document.createElement("video").canPlayType;
    if (supportsVideo) {
      // Hide the default controls
      videoRef.current.controls = false;
      // Display the user defined video controls
      controlsRef.current.style.display = "block";
      videoRef.current.addEventListener("loadedmetadata", function () {
        progressRef.current.setAttribute("max", videoRef.current.duration);
      });

      // Progress
      videoRef.current.addEventListener("timeupdate", function () {
        if (!progressRef.current.getAttribute("max"))
          progressRef.current.setAttribute("max", videoRef.current.duration);
        progressRef.current.value = videoRef.current.currentTime;
        progressBarRef.current.style.width =
          Math.floor(
            (videoRef.current.currentTime / videoRef.current.duration) * 100
          ) + "%";
      });
    }
  }, []);

  // Fullscreen
  useEffect(() => {
    containerRef.current;
    // Detect if broswer supports Fullscreen API
    const fullScreenEnabled = !!(
      document.fullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled ||
      document.webkitSupportsFullscreen ||
      document.webkitFullscreenEnabled ||
      document.createElement("video").webkitRequestFullScreen
    );

    // Visibility of button
    if (!fullScreenEnabled) {
      fullscreenRef.current.style.display = "none";
    }

    fullscreenRef.current.addEventListener("click", function (e) {
      handleFullscreen();
    });
    function handleFullscreen() {
      if (isFullScreen()) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen)
          document.webkitCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
        setFullscreenData(false);
      } else {
        if (containerRef.current.requestFullscreen)
          containerRef.current.requestFullscreen();
        else if (containerRef.current.mozRequestFullScreen)
          containerRef.current.mozRequestFullScreen();
        else if (containerRef.current.webkitRequestFullScreen)
          containerRef.current.webkitRequestFullScreen();
        else if (containerRef.current.msRequestFullscreen)
          containerRef.current.msRequestFullscreen();
        setFullscreenData(true);
      }
    }

    // Check if the browser is already in fullscreen mode
    function isFullScreen() {
      return !!(
        document.webkitIsFullScreen ||
        document.mozFullScreen ||
        document.msFullscreenElement ||
        document.fullscreenElement
      );
    }

    function setFullscreenData(state) {
      containerRef.current.setAttribute("data-fullscreen", !!state);
    }
    document.addEventListener("fullscreenchange", function (e) {
      setFullscreenData(!!document.fullscreenElement);
    });
    document.addEventListener("webkitfullscreenchange", function () {
      setFullscreenData(!!document.webkitIsFullScreen);
    });
    document.addEventListener("mozfullscreenchange", function () {
      setFullscreenData(!!document.mozFullScreen);
    });
    document.addEventListener("msfullscreenchange", function () {
      setFullscreenData(!!document.msFullscreenElement);
    });
  });

  // Format time
  function formatTime(time) {
    const totalTime = time;
    const hours = Math.floor(totalTime / 60 / 60);
    const minutes = Math.floor(totalTime / 60 - hours * 60);
    const seconds = Math.floor(totalTime % 60);
    const formattedTime =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    return formattedTime;
  }
  useEffect(() => {
    const duration = formatTime(videoRef.current.duration);
    setDuration(duration);
    videoRef.current.addEventListener("timeupdate", function () {
      const currentTime = formatTime(videoRef.current.currentTime);
      setCurrentTime(currentTime);
    });
  });
  return (
    <VideoContainer ref={containerRef} isMorphed={props.isMorphed}>
      <video ref={videoRef} {...props} />
      <ControlsContainer
        isVisible={controlsHover}
        onMouseOver={() => setControlsHover(true)}
        onMouseLeave={() => setControlsHover(false)}
      >
        <PlayPauseButton
          type='button'
          onClick={() =>
            videoRef.current.paused || videoRef.current.ended
              ? videoRef.current.play()
              : videoRef.current.pause()
          }
        ></PlayPauseButton>
        <VideoControls ref={controlsRef}>
          <li
            onMouseOver={() => setUserHover(true)}
            onMouseLeave={() => setUserHover(false)}
          >
            <MuteButton type='button'>Mute/Unmute</MuteButton>
            {userHover && (
              <VolumeControl
                onMouseOver={(event) => event.stopPropagation()}
                onMouseLeave={(event) => event.stopPropagation()}
                onInput={(event) => SetVolume(event)}
                onChange={(event) => SetVolume(event)}
              />
            )}
          </li>
          <li>
            <SmallCaption>{currentTime}</SmallCaption>
          </li>
          <li>
            <Progress
              ref={progressRef}
              value='0'
              min='0'
              onClick={(event) => skipAhead(event)}
            >
              <ProgressBar ref={progressBarRef} />
            </Progress>
          </li>
          <li>
            <SmallCaption>{duration}</SmallCaption>
          </li>
          <li>
            <FullScreenButton ref={fullscreenRef} type='button'>
              Fullscreen
            </FullScreenButton>
          </li>
        </VideoControls>
      </ControlsContainer>
    </VideoContainer>
  );
}

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { MutedIcon, SpeakerIcon } from "./Icon";
import {
  SmallCaption,
  VolumeControl,
  PlayIcon,
  PauseIcon,
  PlayPauseButton,
  MuteButton,
} from "./index";

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

const VideoControlsContainer = styled.div`
  position: absolute;
  display: flex;
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

const PlayPauseButtonContainer = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translate3d(0, ${(props) => (props.isVisible ? 0 : "24px")}, 0);
  width: 100%;
  height: 100%;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.6, 1) 0.05s,
    transform 0.5s cubic-bezier(0.4, 0, 0.6, 1);
`;
const MainControlsContainer = styled.ul`
  display: none;
  align-items: flex-end;
  height: 36px;
  width: 100%;
  max-width: 360px;
  padding: 0 0 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translate3d(0, ${(props) => (props.isVisible ? 0 : "24px")}, 0);
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.6, 1) 0.05s,
    transform 0.5s cubic-bezier(0.4, 0, 0.6, 1);
`;

const Progress = styled.progress``;
const ProgressBar = styled.span``;

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
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [videoIsMuted, setVideoIsMuted] = useState(false);

  function SetVolume(event) {
    videoRef.current.volume = event.target.value / 100;
    let percentage = event.target.value;
    event.target.style.background = `linear-gradient(to right,var(--white),var(--white) ${percentage}%, rgba(255, 255, 255, 0.32) ${percentage}%)`;
  }

  function skipAhead(e) {
    const position =
      (e.pageX - progressRef.current.offsetLeft) /
      progressRef.current.offsetWidth;
    videoRef.current.currentTime = position * videoRef.current.duration;
  }

  useLayoutEffect(() => {
    var supportsVideo = !!document.createElement("video").canPlayType;
    if (supportsVideo) {
      // Hide the default controls

      videoRef.current.controls = false;
      // Display the user defined video controls
      controlsRef.current.style.display = "flex";
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
      <video
        onPlaying={() => setVideoIsPlaying(true)}
        onPause={() => setVideoIsPlaying(false)}
        onEnded={() => setVideoIsPlaying(false)}
        onPlay={() => setVideoIsPlaying(true)}
        muted={videoIsMuted}
        ref={videoRef}
        {...props}
      />
      <VideoControlsContainer
        isVisible={true}
        onMouseOver={() => setControlsHover(true)}
        onMouseLeave={() => setControlsHover(false)}
      >
        <PlayPauseButtonContainer isVisible={true}>
          <PlayPauseButton
            type='button'
            onClick={() =>
              videoRef.current.paused || videoRef.current.ended
                ? videoRef.current.play()
                : videoRef.current.pause()
            }
          >
            {videoIsPlaying ? <PauseIcon /> : <PlayIcon />}
          </PlayPauseButton>
        </PlayPauseButtonContainer>

        <MainControlsContainer isVisible={true} ref={controlsRef}>
          <li
            style={{
              width: 36,
              height: 108,
              position: "relative",
            }}
            onMouseOver={() => setUserHover(true)}
            onMouseLeave={() => setUserHover(false)}
          >
            <MuteButton
              type='button'
              onClick={() => setVideoIsMuted(!videoIsMuted)}
            >
              {videoIsMuted ? <MutedIcon /> : <SpeakerIcon />}
            </MuteButton>

            <VolumeControl
              isVisible={true}
              onMouseOver={(event) => event.stopPropagation()}
              onMouseLeave={(event) => event.stopPropagation()}
              onInput={(event) => SetVolume(event)}
              onChange={(event) => SetVolume(event)}
            />
          </li>
          <li
            style={{
              margin: "0 16px",
            }}
          >
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
        </MainControlsContainer>
      </VideoControlsContainer>
    </VideoContainer>
  );
}

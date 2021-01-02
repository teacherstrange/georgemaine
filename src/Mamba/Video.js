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

const VideoControls = styled.ul`
  display: none;
`;
const PlayPauseButton = styled.button``;
const Progress = styled.progress``;
const ProgressBar = styled.span``;
const MuteButton = styled.button``;
const IncreaseVolumeButton = styled.button``;
const DecreaseVolumeButton = styled.button``;
const FullScreenButton = styled.button``;

export function Video(props) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const controlsRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const fullscreenRef = useRef(null);

  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState(0);

  function SetVolume(e) {
    videoRef.current.volume = e.target.value / 100;
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
      <VideoControls ref={controlsRef}>
        <li>
          <PlayPauseButton
            type='button'
            onClick={() =>
              videoRef.current.paused || videoRef.current.ended
                ? videoRef.current.play()
                : videoRef.current.pause()
            }
          >
            Play/Pause
          </PlayPauseButton>
        </li>
        <li>
          <Progress
            ref={progressRef}
            value='0'
            min='0'
            onClick={(e) => skipAhead(e)}
          >
            <ProgressBar ref={progressBarRef} />
          </Progress>
        </li>
        <li>
          <SmallCaption>
            {currentTime}/{duration}
          </SmallCaption>
        </li>
        <li>
          <MuteButton type='button'>Mute/Unmute</MuteButton>
        </li>
        <li>
          <VolumeControl
            onInput={(e) => SetVolume(e)}
            onChange={(e) => SetVolume(e)}
          />
        </li>
        {/* <li>
          <IncreaseVolumeButton type='button' onClick={() => alterVolume("+")}>
            Vol+
          </IncreaseVolumeButton>
        </li>
        <li>
          <DecreaseVolumeButton type='button' onClick={() => alterVolume("-")}>
            Vol-
          </DecreaseVolumeButton>
        </li> */}
        <li>
          <FullScreenButton ref={fullscreenRef} type='button'>
            Fullscreen
          </FullScreenButton>
        </li>
      </VideoControls>
    </VideoContainer>
  );
}

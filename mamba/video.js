import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import {
  SmallCaption,
  formatTime,
  MuteButton,
  ExpandButton,
  SeekBar,
  VolumeSlider,
  PlayIcon,
  PauseIcon,
  PlayPauseButton,
  ExpandIcon,
  MuteIcon,
  SpeakerIcon,
} from "./index";

const DesktopVideo = styled.video`
  display: block;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const MainControls = styled.div`
  width: 500px;
  display: flex;
  align-items: flex-end;
  height: 36px;
  padding-bottom: 24px;
  margin: 0 auto;
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.6, 1) 0.05s,
    transform 0.5s cubic-bezier(0.4, 0, 0.6, 1);
  visibility: ${(props) => (props.startState ? "hidden" : "visible")};
`;

const PlayButtonButtonContainer = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.6, 1) 0.05s,
    transform 0.5s cubic-bezier(0.4, 0, 0.6, 1);

  ${(props) =>
    props.startState &&
    css`
      opacity: 1;
      transform: translate3d(0, 0, 0);
    `}
`;

const VideoControls = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.56));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.6, 1);
  cursor: pointer;

  ${(props) =>
    props.startState
      ? css`
          opacity: 1;
        `
      : css`
          &:hover {
            opacity: 1;

            ${PlayButtonButtonContainer} {
              opacity: 1;
              transform: translate3d(0, 0, 0);
              transition: opacity 0.4s cubic-bezier(0, 0, 0.2, 1) 0.25s,
                transform 0.5s cubic-bezier(0, 0, 0.2, 1) 0.2s;
            }

            ${MainControls} {
              transform: translate3d(0, 0, 0);
              opacity: 1;
              transition: opacity 0.4s cubic-bezier(0, 0, 0.2, 1) 0.05s,
                transform 0.5s cubic-bezier(0, 0, 0.2, 1);
            }
          }
        `}

  @media (max-width: 1023px) {
    display: none;
  }
`;

const ProgressTime = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
  height: 36px;
  pointer-events: none;

  p {
    width: 44px;
    text-align: right;
  }
`;

const DurationTime = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
  height: 36px;
  pointer-events: none;

  p {
    width: 44px;
    text-align: left;
  }
`;

export function Video(props) {
  const videoRef = useRef(null);
  const volumeBarRef = useRef(null);
  const volumeFillRef = useRef(null);
  const volumeThumbRef = useRef(null);
  const seekBarFillRef = useRef(null);
  const seekBarThumbRef = useRef(null);
  const seekBarInputRef = useRef(null);
  const [seekBarValue, setSeekbarValue] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState("00:00");
  const [videoDuration, setVideoDuration] = useState("00:00");
  const [videoIsMuted, setVideoIsMuted] = useState(false);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [startState, setStartState] = useState(true);

  function updateVideoCurrentTime(seconds) {
    const currentTime = formatTime(seconds);
    setVideoCurrentTime(currentTime);
  }

  function updateVideoDuration(seconds) {
    const currentTime = formatTime(seconds);
    setVideoDuration(currentTime);
  }

  function playPauseVideo() {
    const video = videoRef.current;
    video.paused
      ? (video.play(), setVideoIsPlaying(true))
      : (video.pause(), setVideoIsPlaying(false));
  }

  function muteVideo() {
    const video = videoRef.current;
    !video.muted
      ? ((video.muted = true), setVideoIsMuted(true), updateVolumeSlider(0))
      : ((video.muted = false), setVideoIsMuted(false), updateVolumeSlider(1));
  }
  function expandVideo() {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  }

  function updateVideoTime(event) {
    const video = videoRef.current;
    const time = video.duration * (event.target.value / 100);
    video.currentTime = time;
  }

  function updateVideoVolume(event) {
    const video = videoRef.current;
    video.volume = event.target.value;
  }

  function updateVolumeSlider(value) {
    const volumeThumb = volumeThumbRef.current;
    const volumeFill = volumeFillRef.current;
    updateThumbPosition(volumeThumb, value * 100);
    setVolumeFill(volumeFill, value * 100);
  }

  function updateThumbPosition(element, value) {
    value === 0 && !videoIsMuted
      ? setVideoIsMuted(true)
      : setVideoIsMuted(false);
    let currentPosition = `calc(${value}% - ${8}px)`;
    element.style.bottom = currentPosition;
  }

  function setVolumeFill(element, value) {
    let gradient = `linear-gradient(to top, #fff 0%, 
  #fff ${value}%, 
  rgba(255,255,255,0.16) ${Number(value) + 1}%, 
  rgba(255,255,255,0.16)  100%)`;
    element.style.backgroundImage = gradient;
  }

  function updateSeekBarValue(event) {
    const value = (100 / event.target.duration) * event.target.currentTime;
    const formattedValue = Math.floor(value);
    seekBarInputRef.current.value = formattedValue;
    updateSeekBarFill(formattedValue);
    updateSeekBarThumb(formattedValue);
  }

  function updateSeekBarFill(videoDuration) {
    const seekBarFill = seekBarFillRef.current;
    let gradient = `linear-gradient(to right, var(--white) 0%, 
            var(--white) ${videoDuration}%, 
            rgba(255,255,255,0.16) ${Number(videoDuration) + 1}%, 
            rgba(255,255,255,0.16)  100%)`;
    seekBarFill.style.backgroundImage = gradient;
  }

  function updateSeekBarThumb(videoDuration) {
    const seekBarThumb = seekBarThumbRef.current;
    let currentPosition = `calc(${videoDuration}% - ${4}px)`;
    seekBarThumb.style.left = currentPosition;
  }

  useLayoutEffect(() => {
    videoRef.current.removeAttribute("controls");
  }, []);

  useEffect(() => {
    const desktopVideo = videoRef.current;

    if (!props.isZoomed && desktopVideo.currentTime > 0) {
      desktopVideo.pause();
      setStartState(true);
      setVideoIsPlaying(false);
    }
  }, [props.isZoomed]);

  return (
    <>
      <DesktopVideo
        ref={videoRef}
        onPlay={() => (startState ? setStartState(false) : null)}
        onLoadedData={() => (
          updateVideoDuration(videoRef.current.duration),
          updateSeekBarFill(seekBarValue),
          updateVolumeSlider(volumeBarRef.current.value),
          (volumeBarRef.current.value = 1)
        )}
        onEnded={() => (setStartState(true), setVideoIsPlaying(false))}
        onTimeUpdate={(e) => (
          updateSeekBarValue(e), updateVideoCurrentTime(e.target.currentTime)
        )}
        {...props}
      >
        <source src={props.src} type='video/mp4' />
      </DesktopVideo>

      <VideoControls startState={startState}>
        <PlayButtonButtonContainer startState={startState}>
          <PlayPauseButton
            ariaLabel='Play or Pause'
            type='button'
            onClick={() => playPauseVideo()}
          >
            {videoIsPlaying ? (
              <PauseIcon
                style={{
                  transform: `scale(${props.reverseScale})`,
                  transition:
                    "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)",
                }}
              />
            ) : (
              <PlayIcon
                style={{
                  transform: `scale(${props.reverseScale})`,
                  transition:
                    "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)",
                }}
              />
            )}
          </PlayPauseButton>
        </PlayButtonButtonContainer>

        <MainControls startState={startState}>
          <VolumeSlider
            volumeFillRef={volumeFillRef}
            volumeBarRef={volumeBarRef}
            volumeThumbRef={volumeThumbRef}
            onChange={(e) => (
              updateVideoVolume(e), updateVolumeSlider(e.target.value)
            )}
          >
            <MuteButton ariaLabel='Mute' onClick={() => muteVideo()}>
              {videoIsMuted ? <MuteIcon /> : <SpeakerIcon />}
            </MuteButton>
          </VolumeSlider>
          <ProgressTime>
            <SmallCaption>{videoCurrentTime}</SmallCaption>
          </ProgressTime>
          <SeekBar
            seekBarFillRef={seekBarFillRef}
            seekBarThumbRef={seekBarThumbRef}
            seekBarInputRef={seekBarInputRef}
            onChange={(e) => updateVideoTime(e)}
            onMouseDown={() => (
              videoRef.current.pause(), setVideoIsPlaying(false)
            )}
            onMouseUp={() => (videoRef.current.play(), setVideoIsPlaying(true))}
          />
          <DurationTime>
            <SmallCaption>{videoDuration}</SmallCaption>
          </DurationTime>
          <ExpandButton ariaLabel='Expand' onClick={() => expandVideo()}>
            <ExpandIcon />
          </ExpandButton>
        </MainControls>
      </VideoControls>
    </>
  );
}

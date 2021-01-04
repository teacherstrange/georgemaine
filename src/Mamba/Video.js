import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { MuteIcon, SpeakerIcon } from "./Icon";
import { SmallCaption, formatTime, MuteButton, SeekBar } from "./index";

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

const VideoControls = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.56));
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  opacity: 1;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.6, 1);
`;

const MainControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 500px;
  display: flex;
  align-items: flex-end;
  height: 36px;
  padding-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
`;

const PlayPauseButton = styled.button``;

const VolumeThumb = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: scale(0.3333);
  transform-origin: 50% 50%;
  background-color: var(--white);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  pointer-events: none;
  opacity: 0;
  transition: transform 0.25s ease, opacity 0.25s ease 0.25s;
`;

const VolumeFill = styled.div`
  border-radius: 4px;
  margin: 0;
  padding: 0;
  width: 4px;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
`;

const VolumeContainer = styled.div`
  border-radius: 4px;
  position: absolute;
  bottom: 36px;
  height: 0;
  opacity: 0;
  transition: height 0.335s cubic-bezier(0.4, 0, 0.6, 1),
    opacity 0.067s cubic-bezier(0.4, 0, 0.6, 1) 0.335s;
`;

const VolumeControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 36px;
  height: 100px;
  position: relative;

  &:hover ${VolumeThumb} {
    transform: scale(0.8333);
    opacity: 1;
  }

  &:hover ${VolumeContainer} {
    height: 64px;
    opacity: 1;
    transition: height 0.335s cubic-bezier(0.4, 0, 0.6, 1),
      opacity 0.067s cubic-bezier(0.4, 0, 0.6, 1);
  }
`;

const VolumeBar = styled.input`
  &[type="range"][orient="vertical"] {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    width: 8px;
    height: 100%;
    padding: 0 5px;
    opacity: 0 !important;
    cursor: pointer;
  }
`;

const FullScreenButton = styled.button``;

const ProgressTime = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
  width: 40px;
  height: 36px;
`;

const DurationTime = styled.div`
  padding-right: 16px;
  display: flex;
  align-items: center;
  width: 40px;
  height: 36px;
`;

export function Video(props) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const volumeBarRef = useRef(null);
  const volumeFillRef = useRef(null);
  const volumeThumbRef = useRef(null);
  const seekBarFillRef = useRef(null);
  const seekBarThumbRef = useRef(null);

  const [seekBarValue, setSeekbarValue] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState("00:00");
  const [videoDuration, setVideoDuration] = useState("00:00");
  const [videoIsMuted, setVideoIsMuted] = useState(false);

  function updateVideoCurrentTime(seconds) {
    const currentTime = formatTime(seconds);
    setVideoCurrentTime(currentTime);
  }

  function updateVideoDuration(seconds) {
    const currentTime = formatTime(seconds);
    setVideoDuration(currentTime);
  }

  function playPauseVideo() {
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  }

  function muteVideo() {
    !videoRef.current.muted
      ? ((videoRef.current.muted = true),
        setVideoIsMuted(true),
        updateVolumeSlider(0))
      : ((videoRef.current.muted = false),
        setVideoIsMuted(false),
        updateVolumeSlider(1));
  }
  function maximizeVideo() {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen(); // Firefox
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen(); // Chrome and Safari
    }
  }

  function updateVideoTime(event) {
    const time = videoRef.current.duration * (event.target.value / 100);
    videoRef.current.currentTime = time;
  }

  function updateSeekBarValue(event) {
    const value = (100 / event.target.duration) * event.target.currentTime;
    const formattedValue = Math.floor(value);
    setSeekbarValue(formattedValue);
  }

  function updateVideoVolume(event) {
    videoRef.current.volume = event.target.value;
  }

  function updateVolumeSlider(value) {
    updateThumbPosition(volumeThumbRef.current, value * 100);
    setVolumeFill(volumeFillRef.current, value * 100);
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

  function updateSeekBarFill(eventValue) {
    const value = eventValue;
    const seekBarFill = seekBarFillRef.current;
    let gradient = `linear-gradient(to right, var(--white) 0%, 
            var(--white) ${value}%, 
            rgba(255,255,255,0.16) ${Number(value) + 1}%, 
            rgba(255,255,255,0.16)  100%)`;
    seekBarFill.style.backgroundImage = gradient;
  }

  function updateSeekBarThumb(value) {
    const seekBarThumb = seekBarThumbRef.current;
    const currentValue = value;
    let currentPosition = `calc(${currentValue}% - ${4}px)`;
    seekBarThumb.style.left = currentPosition;
  }

  useLayoutEffect(() => {
    videoRef.current.removeAttribute("controls");
    updateVideoDuration(videoRef.current.duration);
  }, []);

  useEffect(() => {
    volumeBarRef.current.value = 1;
    updateVolumeSlider(volumeBarRef.current.value);
  }, []);

  return (
    <VideoContainer ref={containerRef} isMorphed={props.isMorphed}>
      <video
        ref={videoRef}
        onTimeUpdate={(e) => (
          updateSeekBarValue(e),
          updateVideoCurrentTime(e.target.currentTime),
          updateSeekBarFill(seekBarValue),
          updateSeekBarThumb(seekBarValue)
        )}
        {...props}
      />
      <VideoControls>
        <PlayPauseButton type='button' onClick={() => playPauseVideo()}>
          Play
        </PlayPauseButton>
        <MainControls>
          <VolumeControls>
            <VolumeContainer>
              <VolumeFill ref={volumeFillRef} />
              <VolumeBar
                ref={volumeBarRef}
                type='range'
                min='0'
                max='1'
                step='0.01'
                onChange={(e) => (
                  updateVideoVolume(e), updateVolumeSlider(e.target.value)
                )}
                orient='vertical'
              />
              <VolumeThumb ref={volumeThumbRef} />
            </VolumeContainer>
            <MuteButton onClick={() => muteVideo()}>
              {videoIsMuted ? <MuteIcon /> : <SpeakerIcon />}
            </MuteButton>
          </VolumeControls>
          <ProgressTime>
            <SmallCaption>{videoCurrentTime}</SmallCaption>
          </ProgressTime>
          <SeekBar
            seekBarFillRef={seekBarFillRef}
            seekBarThumbRef={seekBarThumbRef}
            value={seekBarValue}
            onChange={(e) => (
              updateSeekBarFill(seekBarValue),
              updateVideoTime(e),
              updateSeekBarThumb(seekBarValue)
            )}
            onMouseDown={() => videoRef.current.pause()}
            onMouseUp={() => videoRef.current.play()}
          />
          <DurationTime>
            <SmallCaption>{videoDuration}</SmallCaption>
          </DurationTime>
          <FullScreenButton onClick={() => maximizeVideo()} />
        </MainControls>
      </VideoControls>
    </VideoContainer>
  );
}

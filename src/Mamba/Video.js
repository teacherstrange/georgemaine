import { useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { SmallCaption, formatTime } from "./index";

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

const VideoControls = styled.div``;
const PlayPauseButton = styled.button``;
const SeekBar = styled.input``;
const VolumeBar = styled.input``;
const MuteButton = styled.button``;
const FullScreenButton = styled.button``;

export function Video(props) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [seekBarValue, setSeekbarValue] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState("00:00");
  const [videoDuration, setVideoDuration] = useState("00:00");

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
      ? (videoRef.current.muted = true)
      : (videoRef.current.muted = false);
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

    // Update the video time
    videoRef.current.currentTime = time;
  }

  function updateSeekBarValue(event) {
    // Calculate the slider value
    const value = (100 / event.target.duration) * event.target.currentTime;

    // Update the slider value
    setSeekbarValue(value);
  }

  function updateVideoVolume(event) {
    // Update the video volume
    videoRef.current.volume = event.target.value;
  }

  useLayoutEffect(() => {
    videoRef.current.removeAttribute("controls");
    updateVideoDuration(videoRef.current.duration);
  }, []);
  return (
    <VideoContainer ref={containerRef} isMorphed={props.isMorphed}>
      <video
        ref={videoRef}
        onTimeUpdate={(e) => (
          updateSeekBarValue(e), updateVideoCurrentTime(e.target.currentTime)
        )}
        {...props}
      />
      <VideoControls>
        <PlayPauseButton type='button' onClick={() => playPauseVideo()}>
          Play
        </PlayPauseButton>
        <SmallCaption>{videoCurrentTime}</SmallCaption>
        <SeekBar
          value={seekBarValue}
          onChange={(e) => updateVideoTime(e)}
          onMouseDown={() => videoRef.current.pause()}
          onMouseUp={() => videoRef.current.play()}
          type='range'
        />
        <SmallCaption>{videoDuration}</SmallCaption>
        <MuteButton onClick={() => muteVideo()}>Mute</MuteButton>
        <VolumeBar
          type='range'
          min='0'
          max='1'
          step='0.1'
          onInput={(e) => updateVideoVolume(e)}
        />
        <FullScreenButton onClick={() => maximizeVideo()} />
      </VideoControls>
    </VideoContainer>
  );
}

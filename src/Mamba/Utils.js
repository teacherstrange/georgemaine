export function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = Math.floor(seconds % 60);
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  return minutes + ":" + seconds;
}

export function layoutCaptions(setCaptionX) {
  const scale =
    viewportWidth / viewportHeight > contentWidth / contentHeight
      ? viewportHeight / contentHeight
      : viewportWidth / contentWidth;
  const xPos = viewportWidth / 2.0 + captionRightEdges * scale;
  const x = Math.round(xPos);
  setCaptionX(x);
}

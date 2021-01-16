export function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = Math.floor(seconds % 60);
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  return minutes + ":" + seconds;
}

export function calculateScale(container, content) {
  return container.width / container.height > content.width / content.height
    ? container.height / content.height
    : container.width / content.width;
}

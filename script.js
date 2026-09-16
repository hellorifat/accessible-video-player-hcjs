const video = document.getElementById("video");
const playPauseBtn = document.getElementById("play-pause");
const stopBtn = document.getElementById("stop");
const muteBtn = document.getElementById("mute");
const volDownBtn = document.getElementById("vol-down");
const volUpBtn = document.getElementById("vol-up");
const statusMessage = document.getElementById("status-message");

function announceStatus(text) {
  statusMessage.textContent = text;
}

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.textContent = "Pause";
    playPauseBtn.setAttribute("aria-label", "Pause video");
    announceStatus("Video playing");
  } else {
    video.pause();
    playPauseBtn.textContent = "Play";
    playPauseBtn.setAttribute("aria-label", "Play video");
    announceStatus("Video paused");
  }
}

function stopVideo() {
  video.pause();
  video.currentTime = 0; 
  playPauseBtn.textContent = "Play";
  playPauseBtn.setAttribute("aria-label", "Play video");
  announceStatus("Video stopped and reset to beginning");
}


function toggleMute() {
  video.muted = !video.muted; 

  if (video.muted) {
    muteBtn.textContent = "Unmute";
    muteBtn.setAttribute("aria-label", "Unmute audio");
    announceStatus("Audio muted");
  } else {
    muteBtn.textContent = "Mute";
    muteBtn.setAttribute("aria-label", "Mute audio");
    announceStatus("Audio unmuted");
  }
}


function lowerVolume() {
  if (video.volume > 0.1) {
    video.volume = Math.round((video.volume - 0.1) * 10) / 10;
  } else {
    video.volume = 0;
  }

  if (video.muted) {
    video.muted = false;
    muteBtn.textContent = "Mute";
  }

  const currentPercent = Math.round(video.volume * 100);
  announceStatus(`Volume decreased to ${currentPercent} percent`);
}

function raiseVolume() {
  if (video.volume < 0.9) {
    video.volume = Math.round((video.volume + 0.1) * 10) / 10;
  } else {
    video.volume = 1;
  }

  if (video.muted) {
    video.muted = false;
    muteBtn.textContent = "Mute";
  }

  const currentPercent = Math.round(video.volume * 100);
  announceStatus(`Volume increased to ${currentPercent} percent`);
}

video.addEventListener("ended", () => {
  playPauseBtn.textContent = "Play";
  playPauseBtn.setAttribute("aria-label", "Play video");
  announceStatus("Video ended");
});

playPauseBtn.addEventListener("click", togglePlayPause);
stopBtn.addEventListener("click", stopVideo);
muteBtn.addEventListener("click", toggleMute);
volDownBtn.addEventListener("click", lowerVolume);
volUpBtn.addEventListener("click", raiseVolume);
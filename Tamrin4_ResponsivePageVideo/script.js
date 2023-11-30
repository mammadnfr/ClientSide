const videoPlayer = document.getElementById('videoPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const fastForwardButton = document.getElementById('fastForwardButton');
const rewindButton = document.getElementById('rewindButton');

playPauseButton.addEventListener('click', togglePlayPause);
fastForwardButton.addEventListener('click', fastForward);
rewindButton.addEventListener('click', rewind);

function togglePlayPause() {
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

function fastForward() {
    videoPlayer.currentTime += 10; // دور سریع 10 ثانیه
}

function rewind() {
    videoPlayer.currentTime -= 10; // کند 10 ثانیه
}


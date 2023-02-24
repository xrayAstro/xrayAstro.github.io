const introText = document.querySelector('.introtext');
var video = document.getElementById("background-video");
let firstTimePlay = true;
if (firstTimePlay) {
    introText.style.opacity = 1;
    video.currentTime = 0.5;
}

video.addEventListener("canplaythrough", function() {
    video.play();
    firstTimePlay = false;
});

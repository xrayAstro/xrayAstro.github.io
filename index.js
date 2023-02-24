const introText = document.querySelector('.introtext');
let firstTimePlay = false;
window.onload = () => {
    introText.style.opacity = 1;
};

var video = document.getElementById("background-video");
var image = document.getElementById("background-image");

video.addEventListener("canplaythrough", function() {
    image.style.display = "none";
    if (!firstTimePlay) {
        video.currentTime = 1.25;
        firstTimePlay = true;
    }
    video.play();
});

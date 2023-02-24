const introText = document.querySelector('.introtext');
let firstTimePlay = false;
window.onload = () => {
    introText.style.opacity = 1;
};

var video = document.getElementById("background-video");
var image = document.getElementById("background-image");

video.addEventListener("canplaythrough", function() {
    if (!firstTimePlay) {
        video.currentTime = 0.6;
        video.play();
        image.style.display = "none";
        firstTimePlay = true;
    }
});

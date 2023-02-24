const introText = document.querySelector('.introtext');
let firstTimePlay = false;
window.onload = () => {
    introText.style.opacity = 1;
};

var video = document.getElementById("background-video");
var image = document.getElementById("background-image");

video.addEventListener("canplaythrough", function() {
    if (!firstTimePlay) {
        video.currentTime = 0.5;
        video.play();
        setTimeout(function(){image.style.display = "none";}, 100);
        firstTimePlay = true;
    }
});

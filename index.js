const introText = document.querySelector('.introtext');
const arrow = document.querySelector('.arrow');
var video = document.getElementById("background-video");
let firstTimePlay = true;
if (firstTimePlay) {
    introText.style.opacity = 1;
    arrow.style.opacity = 1;
    video.currentTime = 0.5;
}

video.addEventListener("canplaythrough", function() {
    video.play();
    firstTimePlay = false;
});

const background = document.querySelector(".background");
const maxOpacity = 0.5;

window.addEventListener("scroll", function() {
  let scrollPosition = window.scrollY;

  // Calculate the opacity based on scroll position
  let opacity = scrollPosition / window.innerHeight / 2;

  // Set the opacity of the background
  background.style.opacity = opacity.toString();
});
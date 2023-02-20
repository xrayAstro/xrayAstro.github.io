const header = document.querySelector('.header');
const introText = document.querySelector('.introtext');
const introsubText = document.querySelector('.introsubtext');

window.onload = function() {
    introText.style.opacity = "1";
    introsubText.style.opacity = "1";
};

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.addEventListener("mousewheel", function(event){
    if (event.wheelDelta >= 0) {
        header.style.display = "";
        setTimeout(function(){header.style.opacity = "1"}, 10);
    } else {
        header.style.opacity = "0";
        setTimeout(function(){header.style.display = "none"}, 200);
    }
});
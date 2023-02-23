const introText = document.querySelector('.introtext');
const introSubText = document.querySelector('.introsubtext');
const arrows = document.querySelector('.arrow-container');

window.onload = () => {
    introText.style.opacity = 1;
    setTimeout(() => {
        introSubText.style.opacity = 1;
        arrows.style.opacity = 1;
    }, 1500);
};

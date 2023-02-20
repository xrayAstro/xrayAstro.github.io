let intro_image = document.querySelector('.introImage');
let i = 0;
let txt = '"Half the normal matter in the Universe is thought to be in the form of diffuse gas at temperature ~1 million degrees or higher, where it only shows up in X-rays.This is what we study: building rocket detectors and instruments to measure the X-ray emission from diffuse hot gas."Dan McCammon';
let speed = 10;
window.onload = function() {
    myFunction();
    setTimeout(typeWriter, 2000);
};

function myFunction() {
    intro_image.style.opacity = "0.5";
};

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("introtext1").innerHTML += txt.charAt(i);
        i++;
        if (i == 162) {
            setTimeout(typeWriter, 1000);
            document.getElementById("introtext1").innerHTML += "<br><br>";
        }
        else if (i == 279) {
            setTimeout(typeWriter, 1000);
            document.getElementById("introtext1").innerHTML += "<br><br>";
        }
        else setTimeout(typeWriter, speed);
        console.log(i);
    }
  }

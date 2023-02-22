const header = document.querySelector('.header');
const introText = document.querySelector('.introtext');
const introsubText = document.querySelector('.introsubtext');

window.onload = function() {
    introText.style.opacity = "1";
    introsubText.style.opacity = "1";
};


if (performance == 1) {
    // Scroll to the top of the page
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

// Function to check the window width and hide the div if it's below the threshold width
function checkWindowWidth() {
    // Get the width of the browser window
    var windowWidth = window.innerWidth;
  
    // Set the threshold width below which the div should be hidden
    var thresholdWidth = 970; // Change this value to your desired threshold width
  
    // Get a reference to the div element
    var labName = document.getElementById("name");
  
    // Check if the window width is less than the threshold width
    if (windowWidth < thresholdWidth) {
      // Set the display style of the div element to none
      labName.style.display = "none";
    } else {
      // Set the display style of the div element to its default (block) if the window width is greater than or equal to the threshold width
      labName.style.display = "block";
    }
  }
  
  // Call the function initially to check the window width and hide the div if necessary
  checkWindowWidth();
  
  // Add an event listener to the window that listens for changes to the window's size
  window.addEventListener("resize", function() {
    // Call the checkWindowWidth function to update the div's visibility based on the new window width
    checkWindowWidth();
  });
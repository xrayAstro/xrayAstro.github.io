// Define an array of image URLs to preload
var imageUrls = [
  './images/homepageBackground.png',
  './images/People-intro.JPG',
  './images/publication.jpg',
  './images/research-intro.jpg',
  './images/xqc2.jpg',
  './images/Rocket.JPG',
  './images/tes2.jpg',
  // ... more image URLs here
];

// Create a new Image() object for each image URL
for (var i = 0; i < imageUrls.length; i++) {
  var img = new Image();
  img.src = imageUrls[i];
}

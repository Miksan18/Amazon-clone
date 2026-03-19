console.log("JS Working"); // check if JS is running

let images = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
  "images/slide4.jpg"
];

let index = 0;

function changeSlide() {
  let img = document.getElementById("slide");

  if (!img) {
    console.log("Image element not found");
    return;
  }

  index = (index + 1) % images.length;
  img.src = images[index];
}

// Run after page loads
window.onload = function () {
  setInterval(changeSlide, 2000);
};
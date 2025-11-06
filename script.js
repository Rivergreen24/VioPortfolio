console.log("it really hasnt");

const radar = document.getElementById('contact');
const hiddenImage = document.getElementById('contactCard');

let visible = false;

radar.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent the "click outside" from immediately firing
  hiddenImage.classList.add('visible');
  visible = true;
});

// Hide when clicking anywhere else
document.addEventListener('click', () => {
  if (visible) {
    hiddenImage.classList.remove('visible');
    visible = false;
  }
});

// Optional: prevent closing when clicking the image itself
hiddenImage.addEventListener('click', (e) => {
  e.stopPropagation();
});



const theMoon = document.getElementById('theMoon');
const Bio = document.getElementById('Bio');

let seen = false;

theMoon.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent the "click outside" from immediately firing
  Bio.classList.add('seen');
  seen = true;
});

// Hide when clicking anywhere else
document.addEventListener('click', () => {
  if (seen) {
    Bio.classList.remove('seen');
    seen = false;
  }
});

// Optional: prevent closing when clicking the image itself
// Bio.addEventListener('click', (e) => {
//   e.stopPropagation();
// });


const ob3 = document.getElementById('ob3');
const logo = document.getElementById('logo');

let visualise = false;

ob3.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent the "click outside" from immediately firing
  logo.classList.add('visualise');
  visualise = true;
});

// Hide when clicking anywhere else
document.addEventListener('click', () => {
  if (visualise) {
    logo.classList.remove('visualise');
    visualise = false;
  }
});

const ob2 = document.getElementById('ob2');
const shirt = document.getElementById('shirt');

let seeing = false;

ob2.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent the "click outside" from immediately firing
  shirt.classList.add('seeing');
  seeing = true;
});

// Hide when clicking anywhere else
document.addEventListener('click', () => {
  if (seeing) {
    shirt.classList.remove('seeing');
    seeing = false;
  }
});
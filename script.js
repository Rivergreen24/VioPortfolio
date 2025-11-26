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
  const logoText = document.getElementById('logoText'); // ← NEW

let visualise = false;

ob3.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent the "click outside" from immediately firing
  logo.classList.add('visualise');
    logoText.classList.add('visualise'); // ← NEW
  visualise = true;
});

// Hide when clicking anywhere else
document.addEventListener('click', () => {
  if (visualise) {
    logo.classList.remove('visualise');
        logoText.classList.remove('visualise'); // ← NEW
    visualise = false;
  }
});

const ob2 = document.getElementById('ob2');
const shirt = document.getElementById('shirt');
const shirtText = document.getElementById('shirtText');
let seeing = false;

ob2.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent the "click outside" from immediately firing
  shirt.classList.add('seeing');
  shirtText.classList.add('seeing');
  seeing = true;
});

// Hide when clicking anywhere else
document.addEventListener('click', () => {
  if (seeing) {
    shirt.classList.remove('seeing');
    shirtText.classList.remove('seeing');
    seeing = false;
  }
});


const starContainer = document.getElementById('stars');
const STAR_COUNT = 50; // adjust how many stars you want
const starAsset = "1x/Star.png"; // your star image path

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("img");
  star.src = starAsset;
  star.classList.add("star");

  // random position in the scene
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";

  // random twinkle speed & offset
  const duration = 1 + Math.random() * 3; // between 1s and 4s
  const delay = Math.random() * 3;        // up to 3s offset
  
  star.style.animationDuration = duration + "s";
  star.style.animationDelay = delay + "s";

  starContainer.appendChild(star);
}

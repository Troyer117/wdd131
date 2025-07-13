const carouselImages = [
  { src: "../images/blue-eyes_white_dragon.jpg", alt: "Blue-Eyes White Dragon" },
  { src: "../images/cyber_dragon.jpg", alt: "Cyber Dragon" },
  { src: "../images/dark_magician.jpg", alt: "Dark Magician" },
  { src: "../images/decode_talker.jpg", alt: "Decode Talker" },
  { src: "../images/gagagaga_magician.jpg", alt: "Gagagaga Magician" },
  { src: "../images/mirror_force.jpg", alt: "Mirror Force" },
  { src: "../images/obelisk_the_tormentor.jpg", alt: "Obelisk the Tormentor" },
  { src: "../images/odd-eyes_pendulum_dragon.jpg", alt: "Odd-Eyes Pendulum Dragon" },
  { src: "../images/red-eyes_b._dragon.jpg", alt: "Red-Eyes Black Dragon" },
  { src: "../images/slifer_the_sky_dragon.jpg", alt: "Slifer the Sky Dragon" }
];

let currentIndex = 0;

const carouselImage = document.querySelector(".carousel-image-wrapper img");
const carouselName = document.querySelector(".carousel-image-wrapper h2");
const prevButton = document.querySelector(".carousel-container button[aria-label='Previous']");
const nextButton = document.querySelector(".carousel-container button[aria-label='Next']");

function updateCarousel() {
  const currentCard = carouselImages[currentIndex];
  carouselImage.src = currentCard.src;
  carouselImage.alt = currentCard.alt;
  carouselName.textContent = currentCard.alt;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateCarousel();
});

updateCarousel();
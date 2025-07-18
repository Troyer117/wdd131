const carouselImages = [
  { src: "../images/blue-eyes_white_dragon.webp", alt: "Blue-Eyes White Dragon" },
  { src: "../images/cyber_dragon.webp", alt: "Cyber Dragon" },
  { src: "../images/dark_magician.webp", alt: "Dark Magician" },
  { src: "../images/decode_talker.webp", alt: "Decode Talker" },
  { src: "../images/gagagaga_magician.webp", alt: "Gagagaga Magician" },
  { src: "../images/mirror_force.webp", alt: "Mirror Force" },
  { src: "../images/obelisk_the_tormentor.webp", alt: "Obelisk the Tormentor" },
  { src: "../images/odd-eyes_pendulum_dragon.webp", alt: "Odd-Eyes Pendulum Dragon" },
  { src: "../images/red-eyes_b._dragon.webp", alt: "Red-Eyes Black Dragon" },
  { src: "../images/slifer_the_sky_dragon.webp", alt: "Slifer the Sky Dragon" }
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
function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
function handleResize() {
  const menu = document.querySelector("#dropdownMenu"); // updated to match the HTML
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}
handleResize();
window.addEventListener("resize", handleResize);
const gallery = document.querySelector(".gallery");
function showModal(event) {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;
  const srcParts = clickedImage.src.split("-");
  const fullImageSrc = srcParts[0] + "-full.jpeg";
  const altText = clickedImage.alt;
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <img src="${fullImageSrc}" alt="${altText}">
    <button class="close-viewer">X</button>
  `;
  document.body.appendChild(dialog);
  dialog.showModal();
  dialog.querySelector(".close-viewer").addEventListener("click", () => {
    dialog.close();
    dialog.remove();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
      dialog.remove();
    }
  });
}
gallery.addEventListener("click", showModal);
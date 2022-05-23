import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galeryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", galeryMarkup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${getOriginalImgUrl(event)}">`
  );

  if (event.target.nodeName === "IMG") {
    instance.show(() => document.addEventListener("keydown", onEscape));
  }

  //

  const onEscape = (event) => {
    if (event.code === "Escape") {
      instance.close(() => document.removeEventListener("keydown", onEscape));
    }
  };
});

function getOriginalImgUrl(event) {
  let originalImgUrl = "";
  originalImgUrl = event.target.dataset.source;

  return originalImgUrl;
}

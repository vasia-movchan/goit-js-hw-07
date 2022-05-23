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
    `<img src="${getOriginalImgUrl(event)}">`,
    {
      onShow: () => document.addEventListener("keydown", onEscape),
      onClose: () => document.removeEventListener("keydown", onEscape),
    }
  );

  if (event.target.nodeName === "IMG") {
    instance.show();
  }

  function onEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
});

function getOriginalImgUrl(event) {
  let originalImgUrl = "";
  originalImgUrl = event.target.dataset.source;

  return originalImgUrl;
}

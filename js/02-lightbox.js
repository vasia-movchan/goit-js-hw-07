import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGaleryItemMarkup = (preview, original, description) =>
  `<li><a class="gallery__item" style="display: contents;" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;

const galeryMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc + createGaleryItemMarkup(preview, original, description),
  ""
);

gallery.insertAdjacentHTML("beforeend", galeryMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

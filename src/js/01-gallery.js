// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (item) => `
	 <a class="gallery__item" href=${item.original}>
  <img
	 loading = "lazy"
	 class="gallery__image"
	 src=${item.preview}
	 alt=${item.description}
  />
</a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
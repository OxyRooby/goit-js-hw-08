// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const makeGalleryCard = ({preview, original, description}) => `
<a class="gallery-link" href="${original}">
<img class="gallery-image" loading="lazy" src="${preview}" data-sourse="${original}" alt="${description}" width=350>
`

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map((data) => makeGalleryCard(data)).join('');
galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox(".gallery a", {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
   
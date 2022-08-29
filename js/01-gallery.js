import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// import * as basicLightbox from 'basiclightbox'
// const instance = basicLightbox.create();
// instance.show();
const divEl = document.querySelector(".gallery");

function createCards (galleryItems){

    return galleryItems.map((item) => {

        return `<div class="picture"><a href="${item.original}"><img src="${item.preview}" data-source="${item.original}"
        alt="${item.description}"/></a></div>`
  
    }).join("");
};
const markup = createCards(galleryItems);
divEl.insertAdjacentHTML("beforeend", markup);


divEl.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }
    openLightBox(event);

    
    document.addEventListener("keydown", event => {
        if(event.code === "Escape") {
        lightBox.close();
        }
    

    });
  
};

let lightBox;
function openLightBox(event) {
    lightBox = basicLightbox.create(`<img src="${event.target.dataset.source}" />`);
    lightBox.show();

};











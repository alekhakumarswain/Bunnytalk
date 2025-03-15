let currentImageIndex = 0; 
function initializeCarousel(images) {
const carouselInner = document.querySelector(".carousel-inner");
const carouselIndicators = document.querySelector(".carousel-indicators");
for (let i = 0; i < images.length; i++) {
const carouselItem = document.createElement("div");
carouselItem.classList.add("carousel-item");
carouselInner.appendChild(carouselItem);

const img = document.createElement("img");
img.classList.add("d-block", "w-100");
img.src = images[i];
carouselItem.appendChild(img);

const indicator = document.createElement("li");
indicator.setAttribute("data-target", "#imageGalleryCarousel");
indicator.setAttribute("data-slide-to", i);
carouselIndicators.appendChild(indicator);
}

// Set the first image as active
carouselInner.firstElementChild.classList.add("active");
carouselIndicators.firstElementChild.classList.add("active");
}

// Fetch the images.json file and initialize the carousel
fetch('js/images.json')
.then(response => response.json())
.then(data => {
const backgroundImages = data.backgroundImages;
initializeCarousel(backgroundImages);
})
.catch(error => {
console.error('Error fetching images.json:', error);
});


// Handle the carousel controls with jQuery
$(document).ready(function () {
$("#imageGalleryCarousel").carousel();

$(".carousel-control-prev").click(function () {
$("#imageGalleryCarousel").carousel("prev");
currentImageIndex = ($("#imageGalleryCarousel .carousel-item.active").index());
});

$(".carousel-control-next").click(function () {
$("#imageGalleryCarousel").carousel("next");
currentImageIndex = ($("#imageGalleryCarousel .carousel-item.active").index());
});

// Set as Background Image button click handler
$("#set-background-button").click(function () {
// Store the currentImageIndex in local storage
localStorage.setItem('backgroundImageIndex', currentImageIndex);
alert("Background image set!");
});
});
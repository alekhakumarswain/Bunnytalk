const savedImageIndex = localStorage.getItem('backgroundImageIndex');
    
if (savedImageIndex !== null) {
const imagesJsonUrl = 'js/images.json'; 

fetch(imagesJsonUrl)
.then(response => response.json())
.then(data => {
const backgroundImages = data.backgroundImages;
const selectedImageIndex = parseInt(savedImageIndex);

if (selectedImageIndex >= 0 && selectedImageIndex < backgroundImages.length) {
const selectedImage = backgroundImages[selectedImageIndex+1];
const backgroundContainer = document.getElementById('background-display');
backgroundContainer.style.backgroundImage = `url('${selectedImage}')`;
}
})
.catch(error => {
console.error('Error fetching images.json:', error);
});
}
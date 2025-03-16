
const IMAGE_ELEMENT = document.querySelector("#random_image")

let currentIndex = 0;

const IMAGE_SRC = [ "fireplace.jpg", "harbour_evening.jpg", "harbour_north.jpg", "harbour_south.jpg", "mountain_silhouette.jpg" ];

function SetRandomImage() {

    if (IMAGE_SRC.length > 0) {
        let newImageIndex = currentIndex;

        if (IMAGE_SRC.length > 1) {
            while (currentIndex === newImageIndex) {
                // This loop will repeat if the newImageIndex is the same as the previous index.
                newImageIndex = Math.floor(Math.random() * IMAGE_SRC.length);
            }
        }

        // Set the image address
        IMAGE_ELEMENT.setAttribute("src", `./images/${IMAGE_SRC[newImageIndex]}`);

        currentIndex = newImageIndex;
    } 
    else {
        // Do nothing
    }
}

SetRandomImage(); // Loads the first image when the page is loaded.

IMAGE_ELEMENT.addEventListener('click', SetRandomImage); // Will call the SetRandomImage function each time the image is clicked.

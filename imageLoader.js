const imageURLs = [
    "https://www.wildlifehotline.com/wp-content/uploads/2011/10/080.jpg",
    "https://www.tier-fotos.eu/tier-fotos.eu/1024/katta-tierpark-berlin--12555.jpg",
    "https://www.erdlingshof.de/wp-content/uploads/2018/09/Nico-Portrait.jpg",
];

function preloadImages(callbackFunction) {
    let images = [];
    function preloadImage(i) {
        if (i < imageURLs.length) {
            const img = new Image();
            img.onload = () => {
                images.push(img);
                preloadImage(i + 1);
            };
            img.src = imageURLs[i];
        } else {
            callbackFunction(images);
        }
    }
    preloadImage(0);
}

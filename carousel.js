document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var items = document.querySelectorAll('.hero-carousel-item').length;
    var carouselContainer = document.querySelector('.hero-carousel');

    document.getElementById('carousel-right-btn').addEventListener('click', function() {
        if (currentIndex < items - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        carouselContainer.scrollLeft = currentIndex * carouselContainer.offsetWidth;
        updateCarouselIndex();
    });
    document.getElementById('carousel-left-btn').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items - 1;
        }
        carouselContainer.scrollLeft = currentIndex * carouselContainer.offsetWidth;
        updateCarouselIndex();
    });
    function updateCarouselIndex() {
        document.getElementById('carousel-index').textContent = (currentIndex + 1) + ' of ' + items;
    }
    updateCarouselIndex();
});
// Jascript Code to handle Hide functionality as requested

document.addEventListener("DOMContentLoaded", function() {
    var galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(function(item) {
        var learnMoreLink = item.querySelector('.learn-more');

        item.addEventListener('mouseover', function() {
            learnMoreLink.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            learnMoreLink.style.display = 'none';
        });
    });
});

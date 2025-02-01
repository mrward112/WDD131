document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('hide_menu');
    const menu = document.getElementById('Menu');
    const viewer = document.querySelector('.viewer');
    const viewerImage = viewer.querySelector('img');
    const closeViewerButton = viewer.querySelector('.close-viewer');
    const galleryImages = document.querySelectorAll('.gallery img');

    // Toggle menu visibility
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('visible');
    });

    // Show viewer with clicked image
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            viewerImage.src = img.src.replace('sm', 'full');
            viewer.style.display = 'grid';
        });
    });

    // Close viewer
    closeViewerButton.addEventListener('click', function() {
        viewer.style.display = 'none';
    });
});
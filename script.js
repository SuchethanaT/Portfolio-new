// Tab Switching Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const gallerySections = document.querySelectorAll('.gallery-section');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and sections
        tabButtons.forEach(btn => btn.classList.remove('active'));
        gallerySections.forEach(section => section.classList.remove('active'));

        // Add active class to clicked button and target section
        button.classList.add('active');
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Lightbox Open Function
function openLightbox(imageSrc, captionText) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightbox.classList.add('active');
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = captionText;
}

// Lightbox Close Function
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Close Lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
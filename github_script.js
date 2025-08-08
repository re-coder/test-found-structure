function showSlide(slideId) {
    // Hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected slide
    document.getElementById(slideId).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}
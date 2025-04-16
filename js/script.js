const testimonialContainer = document.getElementById('testimonial-container');
const prevButton = document.getElementById('prev-testimonial');
const nextButton = document.getElementById('next-testimonial');
const testimonials = Array.from(testimonialContainer.children);
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((card, i) => {
        card.classList.remove('active');
        card.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    testimonials[index].classList.add('active');
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

// Initial setup
showTestimonial(currentIndex);

// Event listeners for the buttons
nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

// Automatic sliding (optional)
setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

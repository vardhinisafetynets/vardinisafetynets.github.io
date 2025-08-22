// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(index);
        currentSlide = index;
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// Testimonial Carousel
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

nextButton.addEventListener('click', () => {
    nextTestimonial();
});

prevButton.addEventListener('click', () => {
    prevTestimonial();
});

// Auto-slide testimonials every 5 seconds
let testimonialInterval = setInterval(nextTestimonial, 5000);

// Reset testimonial interval on manual navigation
prevButton.addEventListener('click', () => {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

nextButton.addEventListener('click', () => {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

// Sticky Navbar Color Change
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Lazy Load Images and Videos
const lazyElements = document.querySelectorAll('img[data-src], video[data-src]');
const config = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
};

let observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            element.src = element.dataset.src;
            element.removeAttribute('data-src');
            if (element.tagName === 'VIDEO') {
                element.load();
            }
            self.unobserve(element);
        }
    });
}, config);

lazyElements.forEach(element => {
    observer.observe(element);
});

// Back to Top Button
const backToTop = document.createElement('a');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.className = 'back-to-top';
backToTop.href = '#';
document.body.appendChild(backToTop);

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 300) {
//         backToTop.style.opacity = '1';
//     } else {
//         backToTop.style.opacity = '0';
//     }
// });

// Location Box Hover Animation
const locationBoxes = document.querySelectorAll('.location-box');
locationBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.animation = 'pulse 0.5s';
    });
    box.addEventListener('animationend', () => {
        box.style.animation = '';
    });

});

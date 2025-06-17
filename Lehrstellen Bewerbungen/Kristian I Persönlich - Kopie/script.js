// Aktuelle Kategorie = Anzeige bei der NavBar

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav_links li a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#startseite') {
            link.classList.add('active');
        }
    });

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= documentHeight) {
            current = 'kontakt';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});


// Wenn Logo angeklickt = zur Startseite

document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Menüpunkt-Scroll mit Header-Offset

document.querySelectorAll('.nav_links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


// Zeugniss-Slider

let currentSlide = 0;
let isMoving = false;

function moveSlide(direction) {
    if (isMoving) return;
    isMoving = true;

    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].offsetWidth;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    setTimeout(() => {
        isMoving = false;
    }, 500);
}

document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
// Aktiv bei Navbar bei denjeningen Seiten

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav_links li a');

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


// Wenn Logo angeklickt = zur Startseite

document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Adjust scroll position to account for fixed header
document.querySelectorAll('.nav_links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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


// Adjust scroll position for the "Kontakt" button

document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('onclick').match(/#(\w+)/)[1];
    const targetElement = document.getElementById(targetId);
    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav_links li a');

    window.addEventListener('scroll', function() {
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


/* Zeugniss slider */

let currentSlide = 0;
let isMoving = false; // Verhindert doppelte Bewegungen während einer Animation

function moveSlide(direction) {
    if (isMoving) return; // Falls gerade eine Bewegung stattfindet, tue nichts
    isMoving = true;

    const slides = document.querySelectorAll('.slide'); // Alle Slides
    const slider = document.querySelector('.slider'); // Slider-Container
    const slideWidth = slides[0].offsetWidth; // Breite eines einzelnen Slides

    // Berechnung der neuen Position
    currentSlide += direction;

    // Begrenzung der Slide-Bewegung
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Setze die Transform-Eigenschaft für eine saubere Animation
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Nach der Animation wieder Bewegungen erlauben
    setTimeout(() => {
        isMoving = false;
    }, 500);
}


// 1 Klick = einmal rechts oder links

document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

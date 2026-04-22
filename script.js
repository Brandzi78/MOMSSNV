const leftArrows = document.querySelectorAll('.left-arrow');
const rightArrows = document.querySelectorAll('.right-arrow');
const wrapper = document.querySelector('.slider-wrapper');
const mainPages = document.querySelectorAll('.main-grid');
const maxIndex = mainPages.length - 1;

let counter = 0;

// Loop through every right arrow found and give it the instructions
rightArrows.forEach(button => {
    button.addEventListener('click', () => {
        if (counter < maxIndex) { 
            counter++;
            wrapper.style.transform = `translateX(-${counter * 100}vw)`;
        }
    });
});

// Loop through every left arrow
leftArrows.forEach(button => {
    button.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            wrapper.style.transform = `translateX(-${counter * 100}vw)`;
        }
    });
});

window.addEventListener ('load', () => {
    const plusSign = document.querySelector('.fa-plus');
    setTimeout(() => {
        plusSign.classList.add('loaded');
    }, 100);
});

let menuButton = document.querySelector('.menu-button');
const toggledMenu = document.querySelector('.mobile-nav-section');

menuButton.addEventListener ('click', () => {
    toggledMenu.classList.toggle('toggled-on');
    const menuIcon = document.querySelector('i');
    setTimeout(() => {
    if (toggledMenu.classList.contains('toggled-on')) {
        menuIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    }
    }, 100);
});

const scrollContainer = document.querySelector('.scroll-container');
const cards = Array.from(scrollContainer.children);  

cards.forEach(card => {
    const clone = card.cloneNode(true);
    scrollContainer.appendChild(clone);
});

let scrollPos = 0;
let speed = 0.8; // Higher = faster

// 1. Loop the movement
function animate() {
    scrollPos -= speed;
    
    // If we've moved half the track (Set A), reset to 0
    // We use the width of Set A (half the scrollWidth)
    if (Math.abs(scrollPos) >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
    }
    
    scrollContainer.style.transform = `translateX(${scrollPos}px)`;
    requestAnimationFrame(animate);
}

// 2. Slow down on hover
scrollContainer.addEventListener('mouseenter', () => speed = 0.2); // Slow speed
scrollContainer.addEventListener('mouseleave', () => speed = 0.8);   // Normal speed

// Start the loop
animate();





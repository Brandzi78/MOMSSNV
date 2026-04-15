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
})


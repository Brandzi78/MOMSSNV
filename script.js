const leftArrows = document.querySelectorAll('.left-arrow');
const rightArrows = document.querySelectorAll('.right-arrow');
const wrapper = document.querySelector('.slider-wrapper');

let counter = 0;

// Loop through every right arrow found and give it the instructions
rightArrows.forEach(button => {
    button.addEventListener('click', () => {
        if (counter < 1) { 
            counter++;
            wrapper.style.transform = `translateX(-${counter * 50}%)`;
        }
    });
});

// Loop through every left arrow
leftArrows.forEach(button => {
    button.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            wrapper.style.transform = `translateX(-${counter * 50}%)`;
        }
    });
});

window.addEventListener ('load', () => {
    const plusSign = document.querySelector('.fa-plus');
    setTimeout(() => {
        plusSign.classList.add('loaded');
    }, 100);
})
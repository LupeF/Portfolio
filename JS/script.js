const hamburgerMenu = document.querySelector('.hamburger-container');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-button');
const projectMain = document.querySelector('.project-main');
const cards = document.querySelectorAll('.content-cont');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const visibleCards = 3; 
const cardWidth = cards[0].offsetWidth + 16; // Including gap/margin
let index = 0;
hamburgerMenu.addEventListener('click', () => {
    overlay.classList.add('show');
    overlay.classList.remove('hidden')
})
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlay.classList.remove('show');
})    

nextBtn.addEventListener('click', () => {
    if (index < cards.length - visibleCards) {
        index++;
        projectMain.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        projectMain.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});
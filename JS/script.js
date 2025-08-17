const hamburgerMenu = document.querySelector('.hamburger-container');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-button');
// const projectMain = document.querySelector('.project-main');

// const cardWidth = cards[0].offsetWidth + 16; // Including gap/margin

hamburgerMenu.addEventListener('click', () => {
    overlay.classList.add('show');
    overlay.classList.remove('hidden')
})
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlay.classList.remove('show');
})    

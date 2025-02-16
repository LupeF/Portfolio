const hamburgerMenu = document.querySelector('.hamburger-container');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-button');
hamburgerMenu.addEventListener('click', () => {
    overlay.classList.add('show');
    overlay.classList.remove('hidden')
})
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlay.classList.remove('show');
})    
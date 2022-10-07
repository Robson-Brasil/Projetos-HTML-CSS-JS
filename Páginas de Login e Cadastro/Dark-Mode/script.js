const header = document.querySelector('.header');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    header.classList.toggle('dark');
})

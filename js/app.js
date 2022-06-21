const bgImage = document.querySelector('.bg__img');
const containerImages = document.querySelectorAll('.container__image');

containerImages.forEach(ci => ci.addEventListener('mouseenter', () => {
    const ciStyle = getComputedStyle(ci);
    bgImage.style.animation = 'none';
    bgImage.style.backgroundImage = ciStyle?.backgroundImage;
    bgImage.style.animation = 'bg-animation 3s ease-out forwards';
}));
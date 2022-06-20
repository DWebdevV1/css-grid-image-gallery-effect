const bgImage = document.querySelector('.bg__img');
const containerImages = document.querySelectorAll('.container__image');

bgImage.addEventListener('mouseenter', () => {
    bgImage.style.backgroundImage = 'none';
});

containerImages.forEach(ci => ci.addEventListener('mouseenter', () => {
    const ciStyle = getComputedStyle(ci);
    bgImage.style.backgroundImage = ciStyle?.backgroundImage;
}))
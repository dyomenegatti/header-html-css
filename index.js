const menuLinks = document.querySelector('.links');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function() {
    menuLinks.classList.toggle('show')
})
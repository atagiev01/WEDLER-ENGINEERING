const burger = document.getElementById('burger');
const menu = document.getElementById('menu-bur');
burger.addEventListener('click', function() {
    burger.classList.toggle('close');
    menu.classList.toggle('menu-open')
})
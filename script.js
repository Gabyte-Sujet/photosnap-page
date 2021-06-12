


let burgerBar = document.querySelector('.burger-bar');
let header = document.getElementById('header');
let nav = document.getElementById('nav');
let opClose = document.getElementById('op-close');
console.log(opClose)

burgerBar.addEventListener('click', () => {
    nav.classList.toggle('toggle');
    header.classList.toggle('toggle');
    opClose.classList.toggle('fa-window-close')
})
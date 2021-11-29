let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let search = document.querySelector('.search-from');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
}
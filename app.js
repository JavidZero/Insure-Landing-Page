const hamburgerButton = document.querySelector(".container .nav .wrapper .flex .hamburger");
const navList = document.querySelector(".container .nav .wrapper .flex .nav-header");
const nav = document.querySelector(".container");

hamburgerButton.addEventListener('click',()=>{
    hamburgerButton.classList.toggle('open');
    navList.classList.toggle('open');
    nav.classList.toggle('open');
})
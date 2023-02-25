//! scroll detect
const navbar = document.querySelector('.nav')
const nav = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (scrollY >= 900){
        navbar.classList.add('active');
        nav.classList.add('active');
    }
    else {
        navbar.classList.remove('active');
        nav.classList.remove('active');
    } 
})
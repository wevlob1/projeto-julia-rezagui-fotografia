//! scroll detect
const navbar = document.querySelector('.navbar')
const navItems = document.querySelectorAll('.nav-items')



window.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    if (scrollY >= 800) {
        navbar.style.backgroundColor = "white";
        navItems.forEach(link => {
            link.style.color = 'black';
          });
        navbar.style.transition = 'background-color 0.5s ease-out';
    }
    else {
        navbar.style.backgroundColor = "black";
        navItems.forEach(link => {
            link.style.color = 'white';
          });
        navbar.style.transition = 'background-color 0.5s ease-out';
    }
})
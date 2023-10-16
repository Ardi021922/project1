// toggle class active
const navbarNav =document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hambuerger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

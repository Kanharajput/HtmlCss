// setup nav
const navBtn = document.getElementById("nav-btn");
// for small screen menu
const navbar = document.getElementById("to-add-class");
// use toggle it automatically made  the first click to add class and second click to remove class
navBtn.addEventListener("click", () => {
    navbar.classList.toggle("show-mob-nav");
});

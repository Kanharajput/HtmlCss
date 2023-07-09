// setup nav
const navBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-sidebar");
// for small screen menu
const sidebar = document.getElementById("to-add-class");
navBtn.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

// select the buttons
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

// select the blocks
const frontPanel = document.getElementById("add-to-front");
const backPanel = document.getElementById("add-to-back");

// when open-btn clicked then add class-none to front panel
openBtn.addEventListener("click", () => {
    frontPanel.classList.add("class-none");
    backPanel.classList.add("class-inherit");
});

// when close-btn clicked then add class-none to close panel
closeBtn.addEventListener("click", () => {
    backPanel.classList.remove("class-inherit");
    frontPanel.classList.remove("class-none");
});

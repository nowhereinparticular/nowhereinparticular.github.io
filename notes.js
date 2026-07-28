const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close");

// Opens the paper
function openPaper() {
    overlay.classList.add("show");
}

// Closes the paper
function closePaper() {
    overlay.classList.remove("show");
}

// Close when X is clicked
closeBtn.addEventListener("click", closePaper);

// Close when clicking outside the paper
overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        closePaper();
    }
});

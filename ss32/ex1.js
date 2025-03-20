document.querySelectorAll(".changeColor").forEach(button => {
    button.addEventListener("click", function() {
        this.parentElement.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

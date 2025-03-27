
function changecolor(color) {
    let colors = {
        "red": "#ff0000",
        "blue": "#0000ff",
        "yellow": "#ffff00",
        "purple": "#800080"
    };

    if (colors[color]) {
        document.body.style.backgroundColor = colors[color];
        localStorage.setItem("bgColor", colors[color]);
    }
}

window.onload = function () {
    let savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};

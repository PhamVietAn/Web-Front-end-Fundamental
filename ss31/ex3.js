let colorBox = document.querySelectorAll('.color-box');
let container = document.querySelector('.container');

for (let i = 0; i < colorBox.length; i++) {
    colorBox[i].addEventListener('click', function () {
        let color = window.getComputedStyle(colorBox[i]).backgroundColor;
        container.style.backgroundColor = color;
    });
}
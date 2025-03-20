function changeSize(value) {
    let text = document.getElementById("text");
    let currentSize = parseInt(window.getComputedStyle(text).fontSize);
    let newSize = currentSize + value;
    
    if (newSize >= 10 && newSize <= 50) { 
        text.style.fontSize = newSize + "px";
    }
}
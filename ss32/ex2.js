let count = 0;
document.getElementById("clickButton").addEventListener("click", function() {
    count++;
    document.getElementById("count").textContent = count;
});

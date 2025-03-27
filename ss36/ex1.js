document.addEventListener("DOMContentLoaded", function() {
    let savedName = localStorage.getItem("userName");
    if (savedName) {
        showGreeting(savedName);
    }
});

function saveName() {
    let name = document.getElementById("nameInput").value;
    if (name.trim()) {
        localStorage.setItem("userName", name);
        showGreeting(name);
    }
}

function showGreeting(name) {
    document.getElementById("nameInputContainer").style.display = "none";
    document.getElementById("greetingName").textContent = name;
    document.getElementById("greetingContainer").style.display = "block";
}

function changeName() {
    document.getElementById("greetingContainer").style.display = "none";
    document.getElementById("nameInputContainer").style.display = "block";
    document.getElementById("nameInput").value = "";
}
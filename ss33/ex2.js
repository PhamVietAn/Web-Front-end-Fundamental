function countCharacters() {
    let text = document.getElementById("inputText").value;
    let count = text.length;
    document.getElementById("charCount").innerText = count + " ký tự";
}
let string = prompt("Nhập vào một chuỗi kí tự");
let letter = string.indexOf(" ");
console.log(letter);
if (letter !== -1){
    alert("Chuỗi chứa dấu cách");
} else {
    alert("Chuỗi không chứa dấu cách");
}
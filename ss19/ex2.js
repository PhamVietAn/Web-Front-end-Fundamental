let char = prompt("Nhập vào một ký tự");
let letter = Number(char) ;
if (isNaN(letter) && char.length == 1) {
    console.log(`Ký tự ${char} là chữ cái`);
} else {
    console.log(`Ký tự ${char} không phải là chữ cái`);
}
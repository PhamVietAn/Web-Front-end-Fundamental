let Num1 = +prompt("Nhập số thứ nhất");
let Num2 = +prompt("Nhập số thứ hai");
let random = Math.floor(Math.random() * (Num2 - Num1 + 1)) + Num1;
document.write(`số random trong khoảng từ [${Num1};${Num2}] là: ${random}`);
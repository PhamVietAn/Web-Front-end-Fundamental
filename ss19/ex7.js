let num1 = +prompt("Nhập 3 số bất kì\nNhập số thữ nhất");
let num2 = +prompt("Nhập 3 số bất kì\nNhập số thữ hai");
let num3 = +prompt("Nhập 3 số bất kì\nNhập số thữ ba");

let maxNum = num1 > num2 && num1 > num3 ? `Số ${num1} là số lớn nhất` : num2 > num1 && num2 > num3 ? `Số ${num2} là số lớn nhất` : `Số ${num3} là số lớn nhất`;
alert(maxNum);
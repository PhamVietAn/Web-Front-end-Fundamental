let Num1 = prompt("Nhập số thứ nhất");
let Num2 = prompt("Nhập số thứ hai");
let Num3 = prompt("Nhập số thứ ba");
let maxNum;

if(Num1 >= Num2 && Num1 >= Num3){
    maxNum = Num1;
}else if(Num2 >= Num1 && Num2 >= Num3){
    maxNum = Num2;
}else{
    maxNum = Num3;
}

document.write(`Số lớn nhất là: ${maxNum}`);
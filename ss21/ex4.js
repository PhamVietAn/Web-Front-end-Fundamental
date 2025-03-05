let num1 
let num2 
let num3 

do{
    num1 = +prompt("Phương trình bậc 2 có dạng: ax^2 + bx + c = 0\nNhập số a");
    if (isNaN(num1)) {
        alert("Vui lòng nhập đúng")
    }
} while (isNaN(num1))
do {
    num2 = +prompt("Phương trình bậc 2 có dạng: ax^2 + bx + c = 0\nNhập số b");
    if (isNaN(num1)) {
        alert("Vui lòng nhập đúng")
    }
} while (isNaN(num2));
do {
    num3 = +prompt("Phương trình bậc 2 có dạng: ax^2 + bx + c = 0\nNhập số c");
    if (isNaN(num1)) {
        alert("Vui lòng nhập đúng")
    }
} while (isNaN(num3));
    

let delta = num2*num2 - 4*num1*num3;
let x1,x2;
if (delta > 0) {
    x1 = (-num2 + Math.sqrt(delta))/2*num1;
    x2 = (-num2 - Math.sqrt(delta))/2*num1;
    alert(`Phương trình có 2 nghiệm phân biệt:\n x1=${x1}\n x2=${x2}`)
} else if (delta === 0) {
    x1 = x2 = -num2/2*num1;
    alert(`Phương trình có nghiệm kép:\n x1 = x2 =${x1}`)
} else {
    alert(`Phương trình vô nghiệm`);
} 


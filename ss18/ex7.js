let numA = +prompt("Nhập vào số a");
let numB = +prompt("Nhập vào số b");
let Calculations = prompt("Nhập vào các phép tính (+,-,*,/)");
let result;
switch (Calculations) {
    case '+':
        result = numA + numB;
        alert(`${numA} + ${numB} = ${result}`);
        break;
    case '-':
        result = numA - numB;
        alert(`${numA} - ${numB} = ${result}`);
        break;
    case '*':
        result = numA * numB;
        alert(`${numA} * ${numB} = ${result}`);
        break;
    case '/':
        result = numA / numB;
        alert(`${numA} / ${numB} = ${result}`);
        break;
    default:
        alert("Phép tính lỗi");
        break;
}
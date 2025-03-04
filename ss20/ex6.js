let n = prompt("Nhập vào 1 số nguyên")
let flag = 1;

if (n < 2) {
    flag = 0;
} else if (n == 2) {
    flag = 1;
} else if (n % 2 == 0) {
    flag = 0;
} else {
    for (let i = 3; i < n-1; i+=2) {
        if (n % i == 0){
            flag = false;
            break;
        }
    }
}

if (flag === 1) {
    alert(`${n} là số nguyên tố`);
} else {
    alert(`${n} không phải là số nguyên tố`);
}
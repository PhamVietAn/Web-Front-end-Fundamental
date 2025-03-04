let num = +prompt("Nhập n số Fibonacci đầu tiên:");
let f = [];
let str = '';

if (isNaN(num) || num < 0) {
    alert("Không hợp lệ");
} else {
    if (num >= 1) {
        f[0] = 1;
        str += f[0] + " ";
    }
    if (num >= 2) {
        f[1] = 1;
        str += f[1] + " ";
    }
    for (let i = 2; i < num; i++) {
        f[i] = f[i - 1] + f[i - 2];
        str += f[i] + " ";
    }
    alert(str);
}
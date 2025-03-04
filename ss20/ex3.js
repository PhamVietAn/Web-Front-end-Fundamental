let num = +prompt("Nhập một số:");
let strNum = String(num);
let len = strNum.length;
let flag = 1;

if (isNaN(num) || num < 0) {
    alert("Số không hợp lệ");
} else {
    for (let i = 0; i < len / 2; i++) {
        if (strNum[i] !== strNum[len - 1 - i]) {
            flag = 0;
            break;
        }
    }

    if (flag === 0) {
        alert("Không phải số đối xứng");
    } else {
        alert("Là số đối xứng");
    }
}
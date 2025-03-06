let arrLen = +prompt("Nhập số lượng phần tử:");

if (isNaN(arrLen) || arrLen <= 0) {
    alert("Số lượng phần tử không hợp lệ");
} else {
    let flag=true
    let arr = [];
    for (let i = 0; i < arrLen; i++) {
        let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
        if (isNaN(num)) {
            flag=false
        }
        arr.push(num);
    }
    if (flag){
        let reverseArr = arr.reverse();
        alert(reverseArr);
    } else {
        alert("Dãy không hợp lệ");
    }
}
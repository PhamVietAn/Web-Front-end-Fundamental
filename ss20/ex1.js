let num = +prompt("Nhập một số:");
let total=0;
if (isNaN(num) || num<0) {
    alert("Dữ liệu nhập vào không hợp lệ")
} else {
    for (let i=1; i<=num;i++){
        total = total + i;
    }
    alert(total)
}

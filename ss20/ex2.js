let num = +prompt("Nhập một số:");
let str = '';
if (isNaN(num) || num<0) {
    alert("Dữ liệu nhập vào không hợp lệ")
} else {
    for (let i=1; i<=num; i++){
        if (i % 5 == 0) {
            str += i + ", ";
        }
    }
    alert(`Các số chia hết cho 5 từ 1 đến ${num} là: ${str}`)
}

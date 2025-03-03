let input = +prompt("Nhập vào 1 số bất kỳ");
if (input % 3 == 0 && input % 5 == 0){
    alert(`${input} chia hết cho cả 3 và 5`);
} else if (isNaN(input)) {
    alert("Lỗi")
} else {
    alert(`${input} không chia hết cho cả 3 và 5`);
}
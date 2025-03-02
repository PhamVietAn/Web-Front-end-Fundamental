let math = +prompt("Nhập điểm môn toán: ");
let literature = +prompt("Nhập điểm môn văn: ");
let english = +prompt("Nhập điểm môn anh: ");
let avg = (math + literature + english)/3;
console.log(`Điểm trung bình: ${avg}`);
if (avg >= 8.0) {
    console.log("Giỏi");
} else if (avg >= 6.5 && avg <= 7.9) {
    console.log("Khá");
} else if (avg >= 5.0 && avg <= 6.4){
    console.log("Trung Bình");
} else {
    console.log("Yếu");
}
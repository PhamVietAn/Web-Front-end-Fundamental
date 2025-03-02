let exp = +prompt("Nhập số năm kinh nghiệm:");
if (exp > 6) {
    console.log("Quản lý");
} else if (exp >= 4) {
    console.log("Chuyên viên");
} else if (exp >= 1) {
    console.log("Nhân viên có kinh nghiệm");
} else {
    console.log("Mới vào nghề");
}
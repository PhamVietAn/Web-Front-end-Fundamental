// Nhập hai ngày từ người dùng
let day1 = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
let day2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");
let date1 = new Date(day1);
let date2 = new Date(day2);

if (isNaN(date1) || isNaN(date2)) {
    console.log("Ngày nhập vào không hợp lệ. Vui lòng nhập lại theo định dạng YYYY-MM-DD.");
}else{
    let unevenMS = Math.abs(date2 - date1);
    let unevenDay = Math.floor(unevenMS / (1000 * 60 * 60 * 24));
    console.log(`Độ lệch là ${unevenDay} ngày.`);
}
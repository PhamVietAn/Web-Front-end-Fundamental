let number = parseInt(prompt("Nhập một số nguyên:"));
if(isNaN(number)){
    console.log("Vui lòng nhập một số nguyên hợp lệ.");
}else{
    let binary = number.toString(2);
    console.log(`Số ${number} trong hệ nhị phân là: ${binary}`);
}
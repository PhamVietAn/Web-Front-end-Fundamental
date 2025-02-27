let desposit = +prompt("Nhập số tiền gửi:");
let numMonth = +prompt("Nhập số tháng gửi:");
let interest = (((4.3)/100)/12)*numMonth*desposit;
console.log(`Số tiền ban đầu: ${desposit.toLocaleString()}`);
interest.toFixed(2);
console.log(`Số tiền lãi nhận được sau ${numMonth} tháng: ${interest.toLocaleString()}`);

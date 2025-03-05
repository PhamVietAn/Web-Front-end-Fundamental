let lastMoney
let interest
let month
do {
    lastMoney = parseFloat(prompt("Nhập số tiền gửi ban đầu:"))
    if(isNaN(lastMoney) || lastMoney<0) {
        alert("Vui lòng nhập đúng")
    }
} while (isNaN(lastMoney) || lastMoney<0)
do {
    interest = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100
    if(isNaN(interest) || interest<0) {
        alert("Vui lòng nhập đúng")
    }
} while (isNaN(interest) || interest<0)
do {
    month = parseInt(prompt("Nhập số tháng gửi:"))
    if(isNaN(month) || month<0) {
        alert("Vui lòng nhập đúng")
    }
} while (isNaN(month) || month<0)

let total = lastMoney * Math.pow(1 + interest, month);
let intrMoney = total - lastMoney;
    
alert(`Tiền lãi: ${intrMoney.toFixed(3)}\nTiền nhận được: ${total.toFixed(3)}`);
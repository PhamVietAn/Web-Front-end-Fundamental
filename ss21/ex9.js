let num = +prompt("Nhập một số nguyên: ");

if (isNaN(num) || num < 0) {
    alert("Vui lòng nhập một số nguyên dương hợp lệ!");
} else {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    
    if (count === 2) {
        alert(`${num} là số nguyên tố`);
    } else {
        alert(`${num} không phải là số nguyên tố`);
    }
}
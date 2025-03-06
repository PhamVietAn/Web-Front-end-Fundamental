let input = prompt("Vui lòng nhập dãy số (các số cách nhau bằng dấu cách): ");
let numbers = input.split(" ");
let validNumbers = [];
let flag = true;

for (let i = 0; i < numbers.length; i++) {
    let num = parseInt(numbers[i]);
    if (isNaN(num)) {
        flag = false;
    } else {
        validNumbers.push(num);
    }
}

if (validNumbers.length === 0) {
    alert("Không có số hợp lệ nào trong dãy số bạn nhập!");

} else if (!flag) {
    alert("Dãy số có chứa giá trị không hợp lệ!");

} else {
    let maxNumber = validNumbers[0];
    for (let i = 1; i < validNumbers.length; i++) {
        if (validNumbers[i] > maxNumber) {
            maxNumber = validNumbers[i];
        }
    }
    alert(`Số lớn nhất trong dãy số là: ${maxNumber}`);
}


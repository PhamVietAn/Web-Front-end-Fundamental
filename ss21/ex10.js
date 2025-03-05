let n;
do {
    n = +prompt("Nhập số nguyên dương n:");
    if (isNaN(n) || n <= 0) {
        alert("Vui lòng nhập một số nguyên dương.");
    }
} while (isNaN(n) || n <= 0);

let count = 0;
let currentNumber = 2;
let result = "";

while (count < n) {
    let prime = true;
    if (currentNumber < 2) {
        prime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
            if (currentNumber % i === 0) {
                prime = false;
                break;
            }
        }
    }
    if (prime) {
        result += currentNumber + " ";
        count++;
    }
    currentNumber++;
}

alert(`Các số nguyên tố đầu tiên là:\n${result}`);

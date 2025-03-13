function splitArray(array, n) {
    let size = Math.ceil(array.length / n)
    let result = []
    
    for (let i = 0; i < n; i++) {
        let start = i * size
        let end = start + size
        result.push(array.slice(start, end))
    }
    
    return result
}

let arr = []
let numIdx;

do {
    numIdx = +prompt("Nhập vào số lượng phần tử")
    if (isNaN(numIdx) || numIdx < 0) {
        alert("Vui lòng nhập một số nguyên dương")
    }
} while (isNaN(numIdx) || numIdx < 0)

for (let i = 0; i < numIdx; i++) {
    let input = prompt(`Nhập phần tử thứ ${i+1}`)
    arr.push(input)
}

let amount
do {
    amount = +prompt("Nhập số lượng mảng con")
    if (isNaN(amount) || amount <= 0) {
        alert("Vui lòng nhập một số nguyên dương")
    }
} while (isNaN(amount) || amount <= 0);

if (amount > arr.length) {
    alert("Dữ liệu không hợp lệ");
} else {
    let result = splitArray(arr, amount);
    alert(JSON.stringify(result));
}

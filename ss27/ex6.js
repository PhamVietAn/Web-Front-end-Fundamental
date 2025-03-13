function Additive(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return false;
    }

    if (!arr.every(num => Number.isInteger(num))) {
        return false;
    }

    let difference = arr[1] - arr[0];

    return arr.slice(1).every((num, index) => num - arr[index] === difference);
}

let arr = [];
let numIdx;
do {
    numIdx = +prompt("Nhập vào số lượng phần tử");
    if (isNaN(numIdx) || numIdx < 0) {
        alert("Vui lòng nhập một số nguyên dương");
    }
} while (isNaN(numIdx) || numIdx < 0);

for (let i = 0; i < numIdx; i++) {
    let input;
    do {
        input = +prompt(`Nhập phần tử thứ ${i + 1}`);
        if (isNaN(input) || !Number.isInteger(input)) {
            alert("Vui lòng nhập một số nguyên");
        }
    } while (isNaN(input) || !Number.isInteger(input));
    arr.push(input);
}

if (Additive(arr)) {
    alert("TRUE");
} else {
    alert("FALSE");
}


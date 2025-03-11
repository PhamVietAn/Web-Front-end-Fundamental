let inputString = prompt("Nhập vào một chuỗi ký tự để kiểm tra đối xứng:")

function symmetry(str) {
    let reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}

if (inputString !== null) {
    if (symmetry(inputString)) {
        alert("Là chuỗi đối xứng")
    } else {
        alert("Không phải là chuỗi đối xứng")
    }
} else {
    alert("Không có chuỗi ký tự để kiểm tra")
}
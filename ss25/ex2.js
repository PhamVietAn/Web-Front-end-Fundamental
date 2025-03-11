let arr = [] 
let addArr = function() {
    for (let i=0; i<2; i++) {
        arr[i] = +prompt(`Nhập giá trị thứ ${i+1}`)
    }
    return "Đã nhập dữ liệu"
}

let sumArr = function() {
    let sum = arr[0] + arr[1]
    if (isNaN(sum) || sum % 1 !== 0) {
        return "Giá trị không hợp lệ"
    }
    return sum
}

alert(addArr())
alert(sumArr())
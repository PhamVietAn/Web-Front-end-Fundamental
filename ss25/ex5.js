let arr = []

let addArr = function(){
    let n = +prompt("Nhập số lượng phần tử")
    if (n === 0) {
        return "Mảng không chứa phần tử"
    } else if (isNaN(n)) {
        return "Giá trị nhập vào không hợp lệ"
    } else {
        for (let i=0; i<n; i++) {
            arr[i] = +prompt(`Nhập giá trị thứ ${i+1}`)
        }
    }
    return "Mảng đã được nhập"
}

let posIntNum = function() {
    let count = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 1 === 0) {
            count++
        }
    }
    if (count === 0) {
        return "không có số nguyên dương trong mảng"
    } else {
        return count
    }
}

alert(addArr())
alert(posIntNum())
let arr = []
let check = true
let addArr = function(){
    let n = +prompt("Nhập số lượng phần tử")
    if (n === 0) {
        return "Mảng không chứa phần tử"
    } else if (isNaN(n)) {
        return "Giá trị nhập vào không hợp lệ"
    } else {
        for (let i=0; i<n; i++) {
            arr[i] = +prompt(`Nhập giá trị thứ ${i+1}`)
            if (isNaN(arr[i])) {
                check = false
            }
        }
    }
    return "Mảng đã được nhập"
}

let minArr = function(){
    if (check) {
        let min = arr[1]
        for (let i=0; i<arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        return min
    } else {
        return "Giá trị không hợp lệ"
    }
}

alert(addArr())
alert(`Phần tử nhỏ nhất trong mảng là ${minArr()}`)
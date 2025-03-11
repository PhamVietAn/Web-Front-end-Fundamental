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

let evenNumber = function(){
    let evenNum = []
    for (let i = 0; i< arr.length ;i++) {
        if (arr[i] % 2 ===0) {
            evenNum.push(arr[i])
        } else if (isNaN(arr[i])){
            return "Dữ liệu nhập vào không hợp lệ"
        }

    }
    if (evenNum.length === 0) {
        return "Mảng không chứa số chẵn"
    }
    return evenNum
}

alert(addArr())
alert(evenNumber())
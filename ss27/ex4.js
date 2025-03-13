let arr = []

let addArr = function() {
    let n
    do {
        n = +prompt("Nhập vào số lượng phần tử");
        if (isNaN(n) || n < 0) {
            alert("Vui lòng nhập một số nguyên dương")
        }
    } while (isNaN(n) || n < 0)

    for (let i = 0; i < n; i++) {
        let input = +prompt(`Nhập phần tử thứ ${i+1}`)
        if (isNaN(input)) { 
            alert("Vui lòng nhập một số nguyên")
            i--
        } else {
            arr.push(input)
        }
    }
    return "Nhập dữ liệu thành công"
}

let average = function() {
    if (arr.length === 0) {
        return "Danh sách trống!"
    }
    let sum = arr.reduce((partialSum, a) => partialSum + a, 0)
    return `Trung bình các số: ${(sum/arr.length).toFixed(1)}`
};

let evenMax = function() {
    if (arr.length === 0) {
        return "Danh sách trống!"
    }
    let evenNumbers = arr.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0) {
        return "Không có số chẵn trong danh sách!"
    }
    let max = Math.max(...evenNumbers)
    return `Số chẵn lớn nhất: ${max}`
};

let oddMin = function() {
    if (arr.length === 0) {
        return "Danh sách trống!"
    }
    let oddNumbers = arr.filter(num => num % 2 !== 0)
    if (oddNumbers.length === 0) {
        return "Không có số lẻ trong danh sách!"
    }
    let min = Math.min(...oddNumbers)
    return `Số lẻ nhỏ nhất: ${min}`
}

let choice
do {
    choice = +prompt("    1. Nhập danh sách số nguyên.\n    2. Tính trung bình các số.\n    3. Tìm số chẵn lớn nhất.\n    4. Tìm số lẻ nhỏ nhất.\n    5. Thoát.")
    switch (choice) {
        case 1:
            alert(addArr())
            break
        
        case 2:
            alert(average())
            break

        case 3:
            alert(evenMax())
            break

        case 4:
            alert(oddMin())
            break

        case 5:
            alert("Thoát chương trình")
            break
    
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-5.")
            break
    }
} while (choice !== 5)